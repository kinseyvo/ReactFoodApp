import { useEffect, useState } from "react";
import style from "./fooddetail.module.css";
import ItemList from "./ItemList";
import Steps from "./Steps";

export default function FoodDetail({ foodId }) {

    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = import.meta.env.VITE_FOOD_API_KEY;

    useEffect(() => {
        async function getFoodDetails() {
            let response = await fetch(`${URL}?apiKey=${API_KEY}`);
            let data = await response.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        getFoodDetails();
    }, [foodId]);

    return (
        <div>
            <div className={style.recipeCard}>
                <h1 className={style.recipeName}>{food.title}</h1>
                <img className={style.recipeImage} src={food.image} alt="" />
                <div className={style.recipeDetails}>
                    <span>
                        <strong>⌚{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        <strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong>
                    </span>
                    <span>
                        <strong>
                            {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-vegetarian"}
                        </strong>
                    </span>
                    <span>
                        <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
                    </span>

                    <div>
                        <span>
                            <strong>💲{food.pricePerServing / 100} Per Serving</strong>
                        </span>
                    </div>
                </div>
            </div>
            <h2>Ingredients</h2>
            <ItemList food={food} isLoading={isLoading} />
            <h2>Instructions</h2>
            <div className={style.recipeInstructions}>
                <ol>
                    <Steps food={food} isLoading={isLoading} />
                </ol>
            </div>
        </div>
    );
}