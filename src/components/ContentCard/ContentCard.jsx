/* eslint-disable react/prop-types */
import "./contentCard.css";

export const ContentCard = ({ animal, isAnimation, handleClickCard }) => {
  return (
    <div
      className={`content-card cursor-pointer aspect-square`}
      onClick={() => (!animal.flipped && !isAnimation) && handleClickCard(animal)}
    >
      <div
        className={`content-card-inner ${
          animal.flipped && "content-card-flipped"
        } `}
      >
        <div className="card-front hover:transition hover:bg-[#A7F0E5] hover:scale-105"></div>
        <img
          src={animal.img}
          className="card-back object-cover"
          alt={animal.name}
        />
      </div>
    </div>
  );
};
