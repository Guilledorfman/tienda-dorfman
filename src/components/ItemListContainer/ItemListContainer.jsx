import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

import {collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {



    const [products, setProducts] = useState([]);
    const [producto, setProducto] = useState({});
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


//     useEffect(() => {
//         const db = getFirestore()
//         const queryDB = doc(db, 'items', 'JD85O1lZIxE1HDPmwBBA')
//         getDoc(queryDB)
//         .then(resp => setProducto({ id: resp.id, ...resp.data() }))
//     },[idCate]);

// console.log(producto);

//     useEffect(() => {

//         const db = getFirestore()

//         const queryCollection = query(collection(db, 'items'), where('price', '>', 100000  ))
//         getDocs(queryCollection)
//         .then((resp) => {
//             setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
//         })
//         .catch(err => console.log(err))
//         .finally(()=> setLoading(false))

//     },[idCate]);

// console.log(products);
    
    return (
        <div className="main-content d-flex flex-wrap justify-content-around text-center">
            {loading ? <img className="loading" src="https://support.lenovo.com/esv4/images/loading.gif" alt="LOADING..."/>: <ItemList data={products}/>}
        </div>
    )
}

export default ItemListContainer
