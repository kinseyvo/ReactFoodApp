import style from "./item.module.css";

export default function Item({ ingredient }) {
    return (
        <div>
            <div className={style.itemContainer} key={ingredient.id}>
                <div className={style.imageContianer}>
                    <img className={style.image}
                        src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
                        alt=""
                    />
                </div>
                <div className={style.nameContainer}>
                    <div className={style.name}>{ingredient.name}</div>
                    <div className={style.amount}>
                        {ingredient.amount} {ingredient.unit}
                    </div>
                </div>
            </div>
        </div>
    );
}