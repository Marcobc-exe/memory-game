import { useEffect, useState } from "react";
import { XCircle, GlobeHemisphereWest } from "@phosphor-icons/react";

export const WorlUserScoresHistory = ({
  showTableWorldScore,
  handleViewTableWorldHistory,
}) => {
  const [listScoresHistory, setListScoresHistory] = useState([]);

  useEffect(() => {
    if (!showTableWorldScore) return;
    const scoreHistory = localStorage.getItem("scoreHistory");
    const parseScoreHistory = JSON.parse(scoreHistory).sort((a, b) =>
      a.username.localeCompare(b.username)
    );

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
              absolute left-[50%] translate-x-[-50%] top-[400%]
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

            <div
              className="
                absolute left-[50%] translate-x-[-50%] w-[420px] flex flex-col
                top-[24%] gap-[16px] h-[280px] overflow-auto overflow-x-hidden
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
