import React,{useState, useEffect} from 'react'
import { getFetch } from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        getFetch.then(res=> setProducts(res))
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
    },[]);


    return (
        <div className="main-content d-flex flex-wrap justify-content-around text-center">
            {loading ? <img className="loading" src="https://support.lenovo.com/esv4/images/loading.gif" alt="LOADING..."/>: <ItemList data={products}/>}
        </div>
    )
}

export default ItemListContainer
