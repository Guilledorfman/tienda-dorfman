import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idItem } = useParams()

    
    useEffect(() => {
        if(idItem){
            getFetch.then(res=> setProduct(res.find(prod => prod.id === parseInt(idItem))))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
        }else{
            getFetch.then(res=> setProduct(res))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))

        }
    },[idItem]);


    return (
        <div className="ItemDetailContainer">
            {loading ? <img className="loading" src="https://support.lenovo.com/esv4/images/loading.gif" alt="LOADING..."/>: <ItemDetail data={product}/>}
        </div>
    )
}

export default ItemDetailContainer
