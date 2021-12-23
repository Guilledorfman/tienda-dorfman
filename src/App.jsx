import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from 'react'
import { ArrayPrueba } from "./ArrayPrueba";

import "bootstrap/dist/css/bootstrap.css"
import NavBar from './components/NavBar/NavBar'
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Welcome from "./components/Welcome/Welcome";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";


export const CartContext = createContext([])

function App() {
  const [cartProds, setCartProds] = useState([])

  return (
    <div className="main-cont">
      <CartContext.Provider value={{ cartProds, setCartProds }}>
        <BrowserRouter>
          <NavBar/>
          <Welcome/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/cart" element={<CartContainer/>}/>
            <Route exact path="/categoria/:idCate" element={<ItemListContainer/>}/>
            <Route exact path="/item/:idItem" element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  )
}

export default App
