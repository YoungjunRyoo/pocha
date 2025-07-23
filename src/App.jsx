import './css/App.css';
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Menu from "./pages/Menu"
import Location from "./pages/Location"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import {FoodProvider} from "./contexts/FoodContext"

function App() {


  return (
    <FoodProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/location" element={<Location/>}/>
        </Routes>
      </main>
      <Footer/>
    </FoodProvider>
      
    
  )
}

export default App
