import { BtnReturn } from "../BtnReturn/BtnReturn";
import { Counters } from "../Counters/Counters";
import { GameDifficult } from "../GameDifficult/GameDifficult";

export const Header = ({
  cardsGame,
  handleCurrentGameCounter,
  hits,
  misses,
}) => {
  return (
    <div
      className="
       w-[50%] relative left-[50%] shadow-md h-[30px]
       translate-x-[-50%] rounded-[12px] top-[10px]
       pl-[12px] pr-[12px] tabletXL:w-[80%]
      "
    >
      <BtnReturn handleCurrentGameCounter={handleCurrentGameCounter} />
      <Counters hits={hits} misses={misses} />
      <GameDifficult cardsGame={cardsGame} />
    </div>
  );
};
