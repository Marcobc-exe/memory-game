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
              relative left-[40%] translate-x-[-50%] top-[150%] tablet:left-[28%]
              mobileL:w-[300px] z-[10] laptop:left-[30%] tabletL:left-[20%] mobileL:left-[23%]
            "
          >
            <GlobeHemisphereWest
              weight="thin"
              size={25}
              className="
                absolute left-[17%] top-[6.5%] tablet:relative m-0
                tablet:top-[0%] tablet:left-[50%] tablet:translate-x-[-50%]
              "
            />
            <p className="text-center text-2xl mt-[8px] tablet:mt-[4px]">
              World user scores history
            </p>
            <button
              onClick={handleViewTableWorldHistory}
              className="absolute right-[10px] top-[10px]"
            >
              <XCircle size={30} color="gray" />
            </button>

            {/*<div
              className="
              bg-red-300 flex justify-center mt-[26px] tablet:mt-[16px]
              mobileL:mt-[10px]
              "
            >
              <select>
                <option value="12" key="12">12 cards</option>
                <option value="16" key="16">16 cards</option>
                <option value="20" key="20">20 cards</option>
                <option value="24" key="24">24 cards</option>
                <option value="30" key="20">30 cards</option>
                <option value="40" key="40">40 cards</option>
              </select>
            </div>*/}
            <div
              className="
                absolute left-[50%] translate-x-[-50%] w-[420px] flex flex-col
                top-[25%] gap-[16px] h-[280px] overflow-auto overflow-x-hidden
                tablet:w-[340px] mobileL:w-[260px] mobileM:w-[230px] mobileM:top-[30%]
              "
            >
              {listScoresHistory.length &&
                listScoresHistory.map((score, index) => (
                  <div
                    key={index}
                    className="
                      flex gap-[5px] border-b-[1px] border-gray-400 justify-around
                      tablet:min-h-[54px] tablet:gap-[3px]
                    "
                  >
                    <span className="tracking-tight mobileL:text-sm">{score.username}</span>
                    <span className="tracking-tight mobileL:text-sm">{score.cardsGame} cards</span>
                    <span className="tracking-tight mobileL:text-sm">Hits: {score.hits}</span>
                    <span className="tracking-tight mobileL:text-sm">Misses: {score.misses}</span>
                    <span className="tracking-tight mobileL:text-sm">{score.date}</span>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
