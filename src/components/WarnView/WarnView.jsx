import { Warning } from "@phosphor-icons/react";

export const WarnView = ({
  showWarnView,
  handleReturnToMenu,
  handleCloseWarnView,
}) => {
  return (
    <>
      {showWarnView && (
        <>
          <div
            className="
            bg-black opacity-[.5] w-[100%] h-[100vh] absolute top-[0px]
            "
          />
          <div
            className="
            bg-white text-black w-[400px] h-[270px] rounded-[12px] p-[12px]
              absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]
              mobileL:w-[300px]
            "
          >
            <Warning
              color="#f39c12"
              size={35}
              className="relative left-[50%] translate-x-[-50%]"
            />
            <p className="text-center text-2xl mt-[8px]">
              Are you sure you want to back to the menu?
            </p>

            <p className="absolute left-[50%] translate-x-[-50%] mt-[10px]">
              Your current score will lost!
            </p>

            <div
              className="
                h-[100px] flex justify-center flex-col items-center gap-[8px]
                absolute left-[50%] translate-x-[-50%] bottom-[0] text-gray-800
              "
            >
              <button
                className="
                  bg-green-400 w-[120px] rounded-[12px] hover:transition hover:bg-green-300
                  h-[26px]
                "
                onClick={handleReturnToMenu}
              >
                Yes
              </button>
              <button
                className="
                  bg-red-400 w-[120px] rounded-[12px] hover:transition hover:bg-red-300
                  h-[26px]
                "
                onClick={handleCloseWarnView}
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
