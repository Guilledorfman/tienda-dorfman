import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {



    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCate } = useParams()


    
    useEffect(() => {
        if(idCate){
            getFetch.then(res=> setProducts(res.filter(prod => prod.category === idCate)))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
        }else{
            getFetch.then(res=> setProducts(res))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
            
        }
    },[idCate]);


    
    return (
        <div className="main-content d-flex flex-wrap justify-content-around text-center">
            {loading ? <img className="loading" src="https://support.lenovo.com/esv4/images/loading.gif" alt="LOADING..."/>: <ItemList data={products}/>}
        </div>
    )
}

export default ItemListContainer
