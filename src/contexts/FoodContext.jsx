 import {createContext, useState, useContext, useEffect} from "react"

 const FoodContext = createContext()

 export const useFoodContext = () => useContext(FoodContext)

 export const FoodProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])

    const addToFavorites = (food) =>{
        setFavorites(prev => [...prev, food])
    }
    const removeFromFavorites = (foodID) =>{
        setFavorites(prev => prev.filter(food => food.id !== foodID))
    }
    const isFavorite = (foodID) =>{
        return favorites.some(food => food.id === foodID)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return(
        <FoodContext.Provider value={value}>
            {children}
        </FoodContext.Provider>
    );
 }