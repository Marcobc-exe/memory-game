import { useEffect, useState } from "react";
import { XCircle, GlobeHemisphereWest } from "@phosphor-icons/react";

export const WorldUserScoresHistory = ({
  showTableWorldScore,
  handleViewTableWorldHistory,
}) => {
  const [listScoresHistory, setListScoresHistory] = useState([]);

  useEffect(() => {
    if (!showTableWorldScore) return;
    const scoreHistory = localStorage.getItem("scoreHistory");

    if (scoreHistory == null) return;

    const parseScoreHistory = JSON.parse(scoreHistory)
      .sort((a, b) => a.cardsGame - b.cardsGame)
      .sort((a, b) => a.misses - b.misses);

    setListScoresHistory(parseScoreHistory);
  }, [showTableWorldScore]);

  return (
    <>
      {showTableWorldScore && (
        <>
          <div
            className="
            bg-black opacity-[.5] w-[100%] h-[100vh] absolute top-[0px] z-10
            "
          />
          <div
            className="
            bg-white text-black w-[500px] h-[450px] rounded-[12px] p-[12px]
              relative left-[40%] translate-x-[-50%] top-[150%]
              mobileL:w-[300px] z-[10]
            "
          >
            <GlobeHemisphereWest
              weight="thin"
              size={25}
              className="absolute left-[17%] top-[6.5%]"
            />
            <p className="text-center text-2xl mt-[8px]">
              World user scores history
            </p>
            <button
              onClick={handleViewTableWorldHistory}
              className="absolute right-[10px] top-[10px]"
            >
              <XCircle size={30} color="gray" />
            </button>

            <div className="bg-red-300 flex justify-center mt-[26px]">
              <select>
                <option value="12" key="12">12 cards</option>
                <option value="16" key="16">16 cards</option>
                <option value="20" key="20">20 cards</option>
                <option value="24" key="24">24 cards</option>
                <option value="30" key="20">30 cards</option>
                <option value="40" key="40">40 cards</option>
              </select>
            </div>
            <div
              className="
                absolute left-[50%] translate-x-[-50%] w-[420px] flex flex-col
                top-[30%] gap-[16px] h-[280px] overflow-auto overflow-x-hidden
              "
            >
              {listScoresHistory.length &&
                listScoresHistory.map((score, index) => (
                  <div
                    key={index}
                    className="flex gap-[5px] border-b-[1px] border-gray-400 justify-around"
                  >
                    <span>{score.username}</span>
                    <span>Game: {score.cardsGame}</span>
                    <span>Hits: {score.hits}</span>
                    <span>Misses: {score.misses}</span>
                    <span>Date: {score.date}</span>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
