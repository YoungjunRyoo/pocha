import "../css/FoodCard.css"
import {useFoodContext} from "../contexts/FoodContext"

function FoodCard({food}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useFoodContext()
    const favorite = isFavorite(food.id)


    function onFavoriteClick(e){
        e.preventDefault()
        if(favorite) removeFromFavorites(food.id)
        else addToFavorites(food)
    }

    return(
        <div className="food-card">
            <div className="food-image">
                <img src={food.image} alt={food.name}/>
                <div className="food-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ♥    
                    </button>
                </div>
            </div>
            <div className="food-info">
                <h3>{food.name}</h3>
                <p>${food.price}</p>
            </div>
        </div>
    );
}
export default FoodCard