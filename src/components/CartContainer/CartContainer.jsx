import React,{useContext, useEffect, useState} from 'react'
import {CartContext} from '../../helpers/CartContext'


const Cart = () => {
    
    const { cartProds, setCartProds } = useContext(CartContext)

    


    function removeItem(e){
        setCartProds([])    
        // const indexCartFn = (prod) => prod.id === e[0];
        // const indexCart = cartProds.findIndex(indexCartFn)
        
        // let newArray = cartProds;
        // newArray.splice(indexCart,1);
        // setCartProds(newArray)
        // console.log(newArray);


    }
    let productList = cartProds.map(product=>{
        return(
            <li key={product.id}>nombre: <b>{product.product}</b> unidades: {product.quantity} <i className="fas fa-trash" onClick={()=>{removeItem([product.id])}}></i></li>
        )
        })
useEffect(()=>{
    productList=''
     productList = cartProds.map(product=>{
        return(
            <li key={product.id}>nombre: <b>{product.product}</b> unidades: {product.quantity} <i className="fas fa-trash" onClick={()=>{removeItem([product.id])}}></i></li>
        )

},[cartProds])

})

    return (
        <>
        CARRITO DE COMPRAS
            <ul>
                {productList}
            </ul>
        </>
    )
}

export default Cart
