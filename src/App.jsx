import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css"
import NavBar from './components/NavBar/NavBar'
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Welcome from "./components/Welcome/Welcome";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";


function App() {

  return (
    <div className="main-cont">
      <BrowserRouter>
        <NavBar/>
        <Welcome/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/cart" element={<CartContainer/>}/>
          <Route exact path="/categoria" element={<ItemDetailContainer/>}/>
          <Route exact path="/categoria/:idCate" element={<ItemListContainer/>}/>
        </Routes>
        <ItemDetailContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App
