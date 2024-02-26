import { ArrowBendUpLeft } from "@phosphor-icons/react";

export const BtnReturn = ({ handleCurrentGameCounter }) => {
  return (
    <button
      className="
        w-[100px] h-[20px] hover:bg-gray-200 absolute
        rounded-[22px] flex flex-row pl-[14px] pr-[14px]
        items-center justify-between top-[10%] left-[1%]
        hover: transition-all
      "
      onClick={handleCurrentGameCounter}
    >
      <ArrowBendUpLeft />
      <span className="mobileM:hidden">Menu</span>
    </button>
  );
};
