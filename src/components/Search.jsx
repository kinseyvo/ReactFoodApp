import { useEffect, useState } from "react";
import style from './search.module.css';

// spoonacular API
const URL = "https://api.spoonacular.com/recipes/complexSearch?";
const API_KEY = import.meta.env.VITE_FOOD_API_KEY;

export default function Search({ setFoodData }) {
    const [query, setQuery] = useState("pizza");

    useEffect(() => {
        async function getFoodList() {
            let response = await fetch(`${URL}query=${query}&apiKey=${API_KEY}`);
            let data = await response.json();
            //console.log(data);
            setFoodData(data.results);
        }
        getFoodList();
    }, [query]);

    return (
        <div className={style.searchContainer}>
            <input
                className={style.input}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}