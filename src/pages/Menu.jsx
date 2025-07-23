import FoodCard from "../components/FoodCard"
import {useState} from "react"
import "../css/Menu.css"

function Menu(){
    const [searchQuery, setSearchQuery] = useState("");

    const foods =[
        {id: 1, name: "SPAM & EGG", price: 14.99, image:"/pocha/images/foods/starter/spamEgg.png"},
        {id: 2, name: "RICH CAKE", price: 23.99, image:"/pocha/images/foods/starter/tteokbokki.png"},
        {id: 3, name: "EGG TOTS", price: 11.99, image:"/pocha/images/foods/starter/eggTot.png"},
        {id: 4, name: "FRENCH FRIES", price: 7.99, image:"/pocha/images/foods/starter/frenchFries.png"},
        {id: 5, name: "STEAM EGG", price: 11.99, image:"/pocha/images/foods/starter/steamedEgg.png"},
        {id: 6, name: "ROLL EGG", price: 14.99, image:"/pocha/images/foods/starter/eggRoll.png"},
        {id: 7, name: "RAMEN", price: 8.99, image:"/pocha/images/foods/starter/ramen.png"},
        {id: 8, name: "EDAMAME", price: 7.99, image:"/pocha/images/foods/starter/edamame.png"},
        {id: 9, name: "SOONDAE", price: 22.99, image:"/pocha/images/foods/starter/soondae.png"},
        {id: 10, name: "SEAFOOD PANCAKE", price: 16.99, image:"/pocha/images/foods/starter/haemulPajeon.png"},
        {id: 11, name: "KIMCHI PANCAKE", price: 16.99, image:"/pocha/images/foods/starter/kimchiJeon.png"},
        {id: 12, name: "CORN CHEESE", price: 9.99, image:"/pocha/images/foods/starter/cornCheese.png"},
        {id: 13, name: "SEAWEED SALAD", price: 11.99, image:"/pocha/images/foods/starter/seaweedSalad.png"},
        {id: 14, name: "FRIED CHICKEN WING", price: 24.99, image:"/pocha/images/foods/chickenWing/friedChickenWing.png"},
        {id: 15, name: "SWEET & SPICY WING", price: 24.99, image:"/pocha/images/foods/chickenWing/sweetAndSpicyChickenWing.png"},
        {id: 16, name: "SOY & GARLIC WING", price: 24.99, image:"/pocha/images/foods/chickenWing/soyAndGarlicChickenWing.png"},
        {id: 17, name: "BONLESS WING", price: 24.99, image:"/pocha/images/foods/chickenWing/boneless.png"},
        {id: 18, name: "SWEET & SPICY BONLESS WING", price: 24.99, image:"/pocha/images/foods/chickenWing/sweetAndSpicyBonless.png"},
        {id: 19, name: "SOY & GARLIC BONLESS WING", price: 24.99, image:"/pocha/images/foods/chickenWing/soyAndGarlicBoneless.png"},
        {id: 20, name: "PORK KATSU", price: 19.99, image:"/pocha/images/foods/katsu/porkKatsu.png"},
        {id: 21, name: "CHICKEN KATSU", price: 19.99, image:"/pocha/images/foods/katsu/chickenKatsu.png"},
        {id: 22, name: "SQUID STIRFRIED", price: 24.99, image:"/pocha/images/foods/stirFried/squidStirFried.png"},
        {id: 23, name: "SAUSAGE & VEGETABLE", price: 16.95, image:"/pocha/images/foods/stirFried/sausageAndVege.png"},
        {id: 24, name: "GIZZARD & GARLIC ", price: 14.95, image:"/pocha/images/foods/stirFried/GizzardAndGarlic.png"},
        {id: 25, name: "PORK STIRFRIED", price: 26.99, image:"/pocha/images/foods/stirFried/jeyukbokkum.png"},
        {id: 26, name: "BULGOGI", price: 24.99, image:"/pocha/images/foods/koreanBbq/bulgogi.png"},
        {id: 27, name: "PORK BULGOGI", price: 24.99, image:"/pocha/images/foods/koreanBbq/porkBulgogi.png"},
        {id: 28, name: "PORK BELLY", price: 24.99, image:"/pocha/images/foods/koreanBbq/porkBelly.png"},
        {id: 29, name: "LATERAL AXIS GALBI", price: 26.99, image:"/pocha/images/foods/koreanBbq/laGalbi.png"},
        {id: 30, name: "BOSSAM", price: 34.99, image:"/pocha/images/foods/chefSpecial/bossam.png"},
        {id: 31, name: "GAMJATANG", price: 34.99, image:"/pocha/images/foods/chefSpecial/gamjatang.png"},
        {id: 32, name: "BUDAE JEONGOL", price: 34.99, image:"/pocha/images/foods/chefSpecial/budaeJeongol.png"},
        {id: 33, name: "SEAFOOD JJAMPPONG JEONGOL", price: 34.99, image:"/pocha/images/foods/chefSpecial/seafoodJjamppong.png"},
        {id: 34, name: "KIMCHI HOT POT", price: 34.99, image:"/pocha/images/foods/chefSpecial/kimchiHotpot.png"},
        {id: 35, name: "CHEESE RICH CAKE COMBO", price: 24.99, image:"/pocha/images/foods/chefSpecial/cheeseRiceCake.png"},
        {id: 36, name: "CHEESE BULDAK", price: 29.99, image:"/pocha/images/foods/chefSpecial/cheeseBuldak.png"},
        {id: 37, name: "FISH CAKE STEW", price: 16.99, image:"/pocha/images/foods/soupOrStew/fishCakeSoup.png"},
        {id: 38, name: "MUSSEL STEW", price: 16.95, image:"/pocha/images/foods/soupOrStew/musselSoup.png"},
        {id: 39, name: "CLAM STEW", price: 16.95, image:"/pocha/images/foods/soupOrStew/clamSoup.png"},
        {id: 40, name: "SQUID SWEET AND SOUR", price: 14.99, image:"/pocha/images/foods/sweetAndSour/sweetAndSourSquid.png"},
        {id: 41, name: "SWELK SWEET AND SOUR", price: 26.99, image:"/pocha/images/foods/sweetAndSour/sweetAndSourWhelk.png"},
        {id: 42, name: "SEA SQUIRT SWEET AND SOUR", price: 26.99, image:"/pocha/images/foods/sweetAndSour/sweetAndSourSeasquirt.png"},
        {id: 43, name: "DRIED POLLOK", price: 26.99, image:"/pocha/images/foods/drySnack/pollock.png"},
        {id: 44, name: "DRY SQUID & PEANUTS", price: 26.99, image:"/pocha/images/foods/drySnack/drySquid.png"},
        {id: 45, name: "SEASONED FILEFISH % PEANUTS", price: 26.99, image:"/pocha/images/foods/drySnack/filefish.png"},
        {id: 46, name: "MACKEREL", price: 16.99, image:"/pocha/images/foods/seafood/grilledMackerel.png"},
        {id: 47, name: "STEAM SQUID", price: 16.99, image:"/pocha/images/foods/seafood/steamedSquid.png"},
        {id: 48, name: "SEA SQUIRT", price: 24.99, image:"/pocha/images/foods/seafood/seaSquirt.png"},
        {id: 49, name: "EEL", price: 29.99, image:"/pocha/images/foods/seafood/Eel.png"},
        {id: 50, name: "MOCHI ICECREAM", price: 6.99, image:"/pocha/images/foods/desert/mochi.png"},
        
        
        

        
    ]

    const handleSearch = (e) =>{
        e.preventDefault();
    }

    return(
        <div className="menu-page">
            <div className="head-image">
                
            </div>
            <div className="menu-images">
                <img src="/pocha/images/menu/drinkMenu.png"/>
                <img src="/pocha/images/menu/starterMenu.png"/>
                <img src="/pocha/images/menu/wingMenu.png"/>
                <img src="/pocha/images/menu/barbequeMenu.png"/>
                <img src="/pocha/images/menu/chefSpecial1Menu.png"/>
                <img src="/pocha/images/menu/chefSpecial2Menu.png"/>
                <img src="/pocha/images/menu/stewMenu.png"/>
                <img src="/pocha/images/menu/sweetAndDryMenu.png"/>
                <img src="/pocha/images/menu/fishDesertMenu.png"/>
            </div>
            <form className="search-form" onSubmit={handleSearch}>
                <input className="search-input" 
                        type="text" 
                        placeholder="Ex) fried chicken wing"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="foods-grid">
               {foods.map((food) => (
                    food.name.toLowerCase().startsWith(searchQuery) && (
                    <FoodCard food={food} key={food.id}/>
                    )
                ))} 
            </div>
            
        </div>
        
    );
}

export default Menu