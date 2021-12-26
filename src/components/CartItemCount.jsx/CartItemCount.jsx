import React,{ useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItemCount = ({item}) => {
    const { cartList, emptyCart, cartItemIncrease, cartItemDecrease } = useContext(CartContext)

    return (
        <div>   
            {/* <button onClick={()=>cartItemDecrease(item)}>-</button>
            <button onClick={()=>cartItemIncrease(item)}>+</button> */}
        </div>
    )
}

export default CartItemCount
