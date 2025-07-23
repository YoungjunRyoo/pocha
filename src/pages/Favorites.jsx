import "../css/Favorites.css"
import {useFoodContext} from "../contexts/FoodContext"
import FoodCard from "../components/FoodCard"

function Favorites(){
    const {favorites} = useFoodContext();
    
    if(favorites.length > 0){
        return(
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="foods-grid">
                    {favorites.map((food) => (
                        <FoodCard food={food} key={food.id}/>
                        ))} 
                </div>
            </div>
        );
    }

    return(
        <> 
            <h2>No Favorite Foods Yet</h2>
            <p>Start adding foods to your favorites</p>
        </>

    );
   
}
export default Favorites