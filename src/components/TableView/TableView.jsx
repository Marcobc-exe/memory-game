import { useGetDataAnimals } from "../../hooks/useGetDataAnimals";
import { useHandleAnimals } from "../../hooks/useHandleAnimals";
import { useEffect, useState } from "react";
import { shuffleArray } from "../../utils/randomers";
import { Card } from "../Card/Card";
import { Header } from "../Header/Header";
import { Spinner } from "../Spinner/Spinner";
import { EndGameView } from "../EndGameView/EndGameView";
import { WarnView } from "../WarnView/WarnView";
import moment from "moment";

export const TableView = ({
  cardsGame,
  handleReturnToMenu,
  userBody,
}) => {
  const { loading: loadingData, entries } = useGetDataAnimals(cardsGame);
  const { loading: loadingList, listAnimals } = useHandleAnimals(
    loadingData,
    entries
  );

  const [shuffleListAnimals, setShuffleListAnimals] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAnimation, setIsAnimation] = useState(false);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [showEndGameView, setShowEndGameView] = useState(false);
  const [showWarnView, setShowWarnView] = useState(false);

  /**
   * Handle the user's clicks.
   *
   * The first click card will going to flip.
   *
   * If both cards are the same card reset selectedCard state.
   *
   * If both cards are not the same safe the last game
   *  but the last two cards will going to back to flip
   *
   * @param {object} card
   */
  const handleClickCard = (card) => {
    const cardFlipped = { ...card, flipped: true };
    let newListAnimals = [...shuffleListAnimals];
    newListAnimals.splice(card.id, 1, cardFlipped);
    setShuffleListAnimals(newListAnimals);

    // first click
    if (selectedCard === null) {
      setSelectedCard(card);
    } else if (selectedCard.name === card.name) {
      // both are the same card
      setSelectedCard(null);
      setHits((preValue) => preValue + 1);

      const endGame = newListAnimals.find((card) => !card.flipped);
      if (!endGame) setShowEndGameView(true);
    } else {
      // both aren't the same card
      setMisses((preValue) => preValue + 1);
      setIsAnimation(true);

      setTimeout(() => {
        newListAnimals.splice(card.id, 1, card);
        newListAnimals.splice(selectedCard.id, 1, selectedCard);

        setShuffleListAnimals(newListAnimals);
        setSelectedCard(null);
        setIsAnimation(false);
      }, 1000);
    }
  };

  /**
   * Show a menu to warn to the user that will lost their current scores.
   */
  const handleCurrentGameCounter = () => {
    if (hits > 0) {
      setShowWarnView(true);
    } else {
      handleReturnToMenu();
    }
  };

  /**
   * Closing the warn view
   */
  const handleCloseWarnView = () => {
    setShowWarnView(false);
  };

  /**
   * Creating o pushing a new score user history to localStorage
   */
  const handleScoreHistory = () => {
    const bodyUserScore = {
      username: userBody?.username,
      hits,
      misses,
      cardsGame,
      date: moment().format("YYYY/MM/DD"),
    };

    const listScoreHistory = localStorage.getItem("scoreHistory");

    if (!listScoreHistory) {
      const listScoreHistory = JSON.stringify([bodyUserScore]);
      localStorage.setItem("scoreHistory", listScoreHistory);
    } else {
      const parseListScoreHistory = JSON.parse(listScoreHistory);
      parseListScoreHistory.push(bodyUserScore);
      const newListScoreHistory = JSON.stringify(parseListScoreHistory);
      localStorage.setItem("scoreHistory", newListScoreHistory);
    }
  };

  /**
   * Restar the current game, save the user score on localStogare
   * generate a new game, flipping the cards and reset the score
   */
  const handleResetGame = () => {
    handleScoreHistory();
    builShuffleList();
    setHits(0);
    setMisses(0);
    setShowEndGameView(false);
  };

  /**
   * Finishing the game, save the user score on localStogare
   * and to navigate the user to the game menu
   */
  const handleFinishGame = () => {
    handleScoreHistory();
    handleReturnToMenu();
    setShowEndGameView(false);
  };

  /**
   * Building shuffle animal cards list
   */
  const builShuffleList = () => {
    const animalsShuffle = shuffleArray([...listAnimals, ...listAnimals]);
    const newListAnimals = animalsShuffle.map((animal, i) => ({
      id: i,
      name: animal.name,
      img: animal.img,
      flipped: false,
    }));

    setShuffleListAnimals(newListAnimals);
  };

  useEffect(() => {
    if (loadingList) return;
    builShuffleList();
  }, [loadingList]);
  return (
    <>
      {loadingData ? (
        <Spinner title={"Loading data"} />
      ) : loadingList ? (
        <Spinner title={"Loading list of animals"} />
      ) : (
        <>
          <Header
            cardsGame={cardsGame}
            handleCurrentGameCounter={handleCurrentGameCounter}
            hits={hits}
            misses={misses}
          />
          <Card
            listAnimals={shuffleListAnimals}
            cardsGame={cardsGame}
            isAnimation={isAnimation}
            handleClickCard={handleClickCard}
          />
          <EndGameView
            showEndGameView={showEndGameView}
            hits={hits}
            misses={misses}
            userBody={userBody}
            handleResetGame={handleResetGame}
            handleFinishGame={handleFinishGame}
          />
          <WarnView
            showWarnView={showWarnView}
            handleReturnToMenu={handleReturnToMenu}
            handleCloseWarnView={handleCloseWarnView}
          />
        </>
      )}
    </>
  );
};
