export const GameDifficult = ({ cardsGame }) => {
  return (
    <p className="text-[16px] absolute right-[14px] opacity-[.6]">
      {cardsGame} <span className="mobileS:hidden">cards</span>
    </p>
  );
};
