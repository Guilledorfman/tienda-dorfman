import { BrowserRouter, Routes, Route } from "react-router-dom";
import  CartContextProvider  from "./context/CartContext";


import "bootstrap/dist/css/bootstrap.css"
import NavBar from './components/NavBar/NavBar'
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Welcome from "./components/Welcome/Welcome";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";


function App({}) {
  
  return (
    <div className="main-cont">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Welcome/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/categoria/:idCate" element={<ItemListContainer/>}/>
            <Route exact path="/item/:idItem" element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>

    </div>
  )
}

export default App
