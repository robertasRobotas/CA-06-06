import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import CocktailCard from "../../components/CocktailCard/CocktailCard";

type CocktailProps = {
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
};

type CocktailsProps = Array<CocktailProps> | null;

const Cocktails = () => {
  const [cocktails, setCocktails] = useState<CocktailsProps>();
  const [displayedCocktails, setDisplayedCocktails] =
    useState<CocktailsProps>();

  const fetchCocktails = async () => {
    const request = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const data = await request.json();
    console.log("data", data.drinks);
    setCocktails(data.drinks);
    setDisplayedCocktails(data.drinks);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  const fetchCocktail = async () => {
    const request = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
    const data = await request.json();
    console.log("data", data);
  };

  return (
    <>
      <Navbar />

      <button
        onClick={() =>
          setDisplayedCocktails(() =>
            cocktails?.filter(
              (cocktail) => cocktail.strAlcoholic === "Alcoholic"
            )
          )
        }
      >
        Alkoholic
      </button>

      <button
        onClick={() =>
          setDisplayedCocktails(() =>
            cocktails?.filter(
              (cocktail) => cocktail.strAlcoholic !== "Alcoholic"
            )
          )
        }
      >
        nonAlkoholic
      </button>

      <div className={styles.coctailsWrapper}>
        {displayedCocktails &&
          displayedCocktails.map((cocktail) => (
            <CocktailCard
              name={cocktail.strDrink}
              photoUrl={cocktail.strDrinkThumb}
              isAlcoholic={cocktail.strAlcoholic === "Alcoholic"}
              onClickCocktail={fetchCocktail}
            />
          ))}
      </div>
    </>
  );
};

export default Cocktails;
