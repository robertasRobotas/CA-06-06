import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const RandomCocktailPage = () => {
  const [x, setX] = useState("");
  const [randomCocktail, setRandomCocktail] = useState(null);
  const [isDisplayName, setDisplayName] = useState(true);

  const fetchRandomCocktail = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );

    const data = await response.json();
    console.log(data.drinks[0]);
    setRandomCocktail(data.drinks[0]);
  };

  console.log("Component refreshed");

  useEffect(() => {
    console.log("Doing fech");
    fetchRandomCocktail();
  }, []);

  return (
    <>
      <div>Random cocktail</div>
      <button onClick={() => setX("new value")}>Click me</button>
      <div className={styles.wrapper}>
        <div>{x}</div>
      </div>

      <div className={styles.wrapper}>
        {randomCocktail && (
          <>
            {/* @ts-ignore */}
            <div>{randomCocktail.strDrink}</div>
            {/* @ts-ignore */}
            <div>{randomCocktail.strAlcoholic}</div>
          </>
        )}
      </div>

      {/* {isDisplayName && <div>Tadas</div>} */}
    </>
  );
};

export default RandomCocktailPage;
