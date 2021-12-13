import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFetch } from '../../helpers/getFetch'
import styles from './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);


    
    useEffect(() => {
        getFetch.then(res=> setProduct(res[15]))
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
    },[]);

    return (
        <div className="ItemDetailContainer">
            {loading ? <img className="loading" src="https://support.lenovo.com/esv4/images/loading.gif" alt="LOADING..."/>: <ItemDetail data={product}/>}
        </div>
    )
}

export default ItemDetailContainer
