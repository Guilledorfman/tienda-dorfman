import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

import {collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemDetailContainer = () => {


    const color = "#ffc107";
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idItem } = useParams()

    const override = css`
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
        
    }
    `;


    useEffect(() => {
            const db = getFirestore()
            const queryDB = doc(db, 'items', idItem)
            getDoc(queryDB)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
            
    },[idItem]);



    return (
        <div className="ItemDetailContainer">
                  
            {loading ?   <ScaleLoader color={'#ffc107'} loading={loading} css={override} size={150} height={60} width={40}/>: <ItemDetail data={product}/>}
        </div>
    )
}

export default ItemDetailContainer
