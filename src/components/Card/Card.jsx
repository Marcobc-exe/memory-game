import { useEffect, useState } from "react";
import { ContentCard } from "../ContentCard/ContentCard";

export const Card = ({
  listAnimals,
  cardsGame,
  isAnimation,
  handleClickCard,
}) => {
  const [cols, setCols] = useState(4);

  const gridColsClasses = {
    4: "grid-cols-4 gap-6",
    5: "grid-cols-5 gap-4",
    6: "grid-cols-6 gap-4",
    10: "grid-cols-8 gap-4",
  };

  const stylesByCardsGame = {
    12: `
      grid mt-10 absolute left-[50%] translate-x-[-50%] w-[600px]
      ${gridColsClasses[cols]} laptop:w-[800px] tabletXL:w-[700px]
      tabletL:w-[550px] mobileL:w-[400px] gap-[12px]
      mobileM:w-[365px] mobileS:w-[300px] mobileS:gap-[3px]
    `,
    16: `
      grid mt-10 absolute left-[50%] translate-x-[-50%] w-[500px] gap-[12px]
      ${gridColsClasses[cols]} tabletL:w-[550px] mobileS:gap-[5px]
      mobileL:w-[400px] mobileL:gap-[10px] mobileM:w-[365px] mobileS:w-[300px]
    `,
    20: `
      grid mt-10 absolute left-[50%] translate-x-[-50%] w-[600px] gap-[12px]
      ${gridColsClasses[cols]} laptop:w-[800px] tabletXL:w-[700px]
      tabletL:w-[550px] mobileL:w-[400px] mobileM:w-[365px] mobileS:w-[300px]
      mobileS:gap-[5px] mobileL:gap-[5px]
    `,
    24: `
      grid mt-10 absolute left-[50%] translate-x-[-50%] w-[600px] gap-[12px]
      ${gridColsClasses[cols]} laptop:w-[800px] tabletXL:w-[700px]
      tabletL:w-[400px] mobileL:w-[400px] mobileM:w-[365px] tabletL:gap-[3px]
      mobileS:w-[300px]
    `,
    30: `
      grid mt-10 absolute left-[50%] translate-x-[-50%] w-[600px] gap-[12px]
      ${gridColsClasses[cols]} laptop:w-[800px] tabletXL:w-[650px]
      tabletXL:gap-[6px] tabletL:w-[480px] tabletL:gap-[3px] mobileL:w-[410px]
      mobileM:w-[350px] mobileS:w-[300px] mobileS:gap-[2px]
    `,
    40: `
      grid mt-10 absolute left-[50%] translate-x-[-50%] w-[600px] gap-[10px]
      ${gridColsClasses[cols]} laptop:w-[800px] tabletXL:w-[600px]
      tabletXL:gap-[5px] tablet:w-[500px] tablet:gap-[3px] mobileL:w-[400px] 
      mobileM:w-[365px] mobileS:w-[300px] mobileS:gap-[2px]
    `,
  };

  useEffect(() => {
    if (cardsGame == null) return;
    if (cardsGame === "12" || cardsGame === "16") return;

    if (cardsGame === "20") setCols((preValue) => preValue + 1);
    if (cardsGame === "24") setCols((preValue) => preValue + 2);

    if (cardsGame === "30" || cardsGame === "40") {
      setCols((preValue) => preValue + 6);
    }

    return () => {
      setCols(4);
    };
  }, [cardsGame]);

  return (
    <main className={stylesByCardsGame[cardsGame]}>
      {listAnimals.map((animal, index) => (
        <ContentCard
          key={`${index}_${animal.id}`}
          animal={animal}
          isAnimation={isAnimation}
          handleClickCard={handleClickCard}
        />
      ))}
    </main>
  );
};
