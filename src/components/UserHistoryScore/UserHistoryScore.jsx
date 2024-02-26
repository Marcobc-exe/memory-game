import { useEffect, useState } from "react";
import { XCircle, User } from "@phosphor-icons/react";

export const UserHistoryScore = ({
  showTableUserHistory,
  handleViewTableHistory,
  userBody,
}) => {
  const [listUseHistory, setListUseHistory] = useState([]);

  useEffect(() => {
    if (!showTableUserHistory) return;
    const scoreHistory = localStorage.getItem("scoreHistory");
    const parseScoreHistory = JSON.parse(scoreHistory);

    const userHistory = parseScoreHistory.filter(
      (item) => item.username === userBody.username
    );

    setListUseHistory(userHistory);
  }, [showTableUserHistory, userBody]);

  return (
    <>
      {showTableUserHistory && (
        <>
          <div
            className="
            bg-black opacity-[.5] w-[100%] h-[100vh] absolute top-[0px] z-10
            "
          />
          <div
            className="
            bg-white text-black w-[450px] h-[400px] rounded-[12px] p-[12px]
              relative left-[40%] translate-x-[-50%] top-[150%]
              mobileL:w-[300px] z-[10]
            "
          >
            <User weight="thin" size={25} className="absolute left-[26%] top-[6.5%]"/>
            <p className="text-center text-2xl mt-[8px]">Scores history</p>
            <button
              onClick={handleViewTableHistory}
              className="absolute right-[10px] top-[10px]"
            >
              <XCircle size={30} color="gray" />
            </button>

            <div
              className="
                absolute left-[50%] translate-x-[-50%] w-[380px] flex flex-col
                top-[24%] gap-[16px] h-[280px] overflow-auto overflow-x-hidden
              "
            >
              {listUseHistory.length &&
                listUseHistory.map((score, index) => (
                  <div
                    key={index}
                    className="flex gap-[5px] border-b-[1px] border-gray-400 justify-around"
                  >
                    <span>{index + 1}.</span>
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
