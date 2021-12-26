import React, {useState, useEffect, useContext} from 'react'

import { CartContext } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ( {item, index} ) => {

    const { cartList, emptyCart, cartItemIncrease, cartItemDecrease, cartItemDelete } = useContext(CartContext)
    const [itemQuantity, setItemQuantity] = useState(item.quantity)


    const [ subTotal, setSubTotal ] = useState(0)

    useEffect(()=>{
        setSubTotal(cartList[index][0].price * cartList[index][0].quantity)
    },[cartList])

    return (
        <div className="cartListItem card">
            <div className="img-cont">
                <h2>{item.name}</h2>
                <img src={item.colors[0].img} alt='' />
                <b>${item.price}</b>
            </div>

            <div className="quantity-cont">
                <h2>x {cartList[index][0].quantity}</h2>

                <div>   
                    <button onClick={()=>cartItemDecrease(index)}>-</button>
                    <button onClick={()=>cartItemIncrease(index)}>+</button>
                </div>
            </div>

            <div className="subtotal-cont">
                <p>subtotal:</p>
                <b>${subTotal}</b>
            </div>

            <i className="fas fa-trash-alt" onClick={()=>cartItemDelete(index)} ></i>
        </div>
    )
}

export default CartItem
