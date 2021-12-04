import "bootstrap/dist/css/bootstrap.css"
import NavBar from './components/NavBar/NavBar'
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Welcome from "./components/Welcome/Welcome";


function App() {

  return (
    <div className="main-cont">
      <NavBar/>
      <Welcome/>
      <ItemListContainer/>
    </div>
  )
}

export default App
