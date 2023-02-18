import React from "react";
import classes from ".//CharactersItem.module.css";

const CharacterItem = ({ character, isFavorite, addFavorite }) => {
  return (
    <>
      <div
        className={
          isFavorite
            ? `${classes.character_box} ${classes.favorite}`
            : classes.character_box
        }
      >
        <div className={classes.character_info_box}>
          <div className={classes.character_info}>
            <h3>{character.name}</h3>
            <p>
              Gender - {character.gender}, status - {character.status}
            </p>
          </div>
        </div>
        <img src={character.image} alt={character.name} />
        <div className={classes.like_box} onClick={() => addFavorite(character.id)}> 
            <svg
              className={classes.favorite_button}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.97342 4.59641C6.21857 0.341121 0.642853 2.65926 0.642853 7.29469C0.642853 10.7755 8.28685 16.2205 8.97342 16.9285C9.66471 16.2205 16.9286 10.7755 16.9286 7.29469C16.9286 2.69441 11.7334 0.341121 8.97342 4.59641Z"
                fill={isFavorite ? "red" : "black"}
              />
            </svg>
        </div>
      </div>
    </>
  );
};

export default CharacterItem;
