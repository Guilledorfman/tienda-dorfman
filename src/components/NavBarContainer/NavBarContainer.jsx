import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar';

import {collection, getDocs, getFirestore, query } from 'firebase/firestore';



const NavBarContainer = () => {
    const [ categories, setCategories ] = useState([])
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        
        const db = getFirestore()
        const queryCollection = query(collection(db, 'categories'))
        getDocs(queryCollection)
        .then((resp) => {
            setCategories(resp.docs.map((cat) => ({ id: cat.id, ...cat.data() })))
        })
        .catch(err => console.log(err))
        .finally(setLoading(false))
    },[])



    return (
            <NavBar categories={categories} loading={loading}/>
    )
}

export default NavBarContainer
