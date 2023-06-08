import React, { FC } from "react";
import styles from "./CocktailCard.module.css";

type CocktailCardProps = {
  name: string;
  photoUrl: string;
  isAlcoholic: boolean;
  onClickCocktail: () => void;
};

const CocktailCard: FC<CocktailCardProps> = ({
  name,
  photoUrl,
  isAlcoholic,
  onClickCocktail,
}) => {
  return (
    <div onClick={onClickCocktail} className={styles.cocktailsCard}>
      <h1>{name}</h1>
      <img
        className={styles.coctailImage}
        alt="cocktail image"
        src={photoUrl}
      />
      <div
        className={
          isAlcoholic
            ? styles.alkoholicCocktailIndicator
            : styles.nonAlkoholicCocktailIndicator
        }
      ></div>
    </div>
  );
};

export default CocktailCard;
