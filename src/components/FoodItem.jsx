import style from './foodItem.module.css';

export default function FoodItem({ item, setFoodId }) {
    function handleClick(id) {
        console.log(id)
        setFoodId(id);
    }
    return (
        <div className={style.itemContainer}>
            <img className={style.itemImage} src={item.image} alt="" />
            <div className={style.itemContent}>
                <p className={style.itemName}>{item.title}</p>
            </div>
            <div className={style.buttonContainer}>
                <button
                    className={style.itemButton}
                    onClick={() => handleClick(item.id)}
                >
                    View Details
                </button>
            </div>
        </div>
    );
}