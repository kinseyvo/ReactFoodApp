import Item from "./Item";

export default function ItemList({ food, isLoading }) {
    return (
        <div>
            {isLoading ? (
                <p>Loading.....Please Wait</p>
            ) : (
                food.extendedIngredients.map((ingredient) => (
                    <Item ingredient={ingredient} />
                ))
            )}
        </div>
    );
}
