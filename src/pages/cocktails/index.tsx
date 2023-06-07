import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState(null);

  const fetchCocktails = async () => {
    const request = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const data = await request.json();
    console.log("data", data.drinks);
    setCocktails(data.drinks);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <>
      <div className={styles.coctailsWrapper}>
        {cocktails &&
          /* @ts-ignore */
          cocktails.map((cocktail) => (
            /* @ts-ignore */
            <div className={styles.cocktailsCard}>
              <h1>{cocktail.strDrink}</h1>
              <img
                className={styles.coctailImage}
                alt="cocktail image"
                src={cocktail.strDrinkThumb}
              />
              <div
                className={
                  cocktail.strAlcoholic === "Alcoholic"
                    ? styles.alkoholicCocktailIndicator
                    : styles.nonAlkoholicCocktailIndicator
                }
              ></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cocktails;
