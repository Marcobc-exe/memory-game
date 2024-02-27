import { Play } from "@phosphor-icons/react";

export const Menu = ({ handleGame }) => {
  const amountOfCards = [12, 16, 20, 24, 30, 40];

  return (
    <div
      className="
        flex gap-10 w-[620px] flex-wrap relative mt-[50px]
        left-[50%] translate-x-[-50%] mobileL:w-[300px]
        mobileL:gap-5 mobileL:mt-[20px] tabletL:w-[500px] 
        tabletL:gap-5 justify-center
      "
    >
      {amountOfCards.map((num) => (
        <button
          key={num}
          id={num}
          className="
            w-[180px] h-[180px] rounded-[12px] shadow-cardShadow
            flex justify-center items-center flex-col gap-4
            bg-[#74b9ff] text-white hover:bg-[#8CC5FF]
            hover:transition mobileL:w-[120px] mobileL:h-[120px]
            tabletL:w-[140px] tabletL:h-[140px] hover:scale-105
          "
          onClick={(e) => handleGame(e)}
        >
          <p
            className="
              w-[50%] text-xl tracking-tight mobileL:text-base 
              tabletL:text-base
            "
          >
            {num} cards
          </p>
          <div
            className="
              border-[1px] border-white rounded-[50px] w-[45px]
              h-[45px] flex justify-center items-center
            "
          >
            <Play size={28} color="white" weight="fill" />
          </div>
        </button>
      ))}
    </div>
  );
};
