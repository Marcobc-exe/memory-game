export const EndGameView = ({
  showEndGameView,
  hits,
  misses,
  handleResetGame,
  handleFinishGame,
  userBody
}) => {
  return (
    <>
      {showEndGameView && (
        <>
          <div
            className="
            bg-black opacity-[.5] w-[100%] h-[100vh] absolute top-[0px]
            "
          />
          <div
            className="
            bg-white text-black w-[400px] h-[300px] rounded-[12px] p-[12px]
              absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]
              mobileL:w-[300px]
            "
          >
            <p className="text-center text-2xl mt-[14px]">Congratulations!</p>
            <p className="text-center text-xl">You finished the game {userBody?.username}!</p>
            <div
              className="
                flex flex-row justify-evenly pl-[30px] pr-[30px]
                m-[30px] text-lg font-medium
              "
            >
              <p>Hits: {hits}</p>
              <p>Misses: {misses}</p>
            </div>
            <div className="flex flex-col gap-[12px] items-center absolute bottom-[15%] w-[90%]">
              <button
                className="
                hover:bg-blue-300 w-[140px] h-[26px] rounded-[12px]
                text-white hover:transition bg-blue-400
                "
                onClick={handleResetGame}
              >
                Reset game?
              </button>
              <button
                className="
                hover:bg-gray-200 w-[140px] h-[26px] rounded-[12px]
                text-black hover:transition-all bg-gray-300
                "
                onClick={handleFinishGame}
              >
                Menu
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
