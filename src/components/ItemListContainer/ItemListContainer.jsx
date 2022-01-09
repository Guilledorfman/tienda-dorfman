import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

import {collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {



    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCate } = useParams()

    const override = css`

    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
`;

    useEffect(() => {

        const db = getFirestore()
        if(idCate){
            const queryCollection = query(collection(db, 'items'), where('category', '==', idCate  ))
            getDocs(queryCollection)
            .then((resp) => {
                setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }else{
            const queryCollection = query(collection(db, 'items'))
            getDocs(queryCollection)
            .then((resp) => {
                setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }

    },[idCate]);

    
    return (
        <div className="main-content d-flex flex-wrap justify-content-around text-center">
            {loading ? <ScaleLoader color={'#ffc107'} loading={loading} css={override} size={150} height={60} width={40}/>: <ItemList data={products}/>}
        </div>
    )
}

export default ItemListContainer
