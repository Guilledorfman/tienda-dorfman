import React, {  useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import './CartWidget.css'




const CartWidget = () => {

    const [cartNumber, setCartNumber] = useState(0);

    const { cartList } = useContext(CartContext)
    
    let number = 0;

    cartList.map(item=>{
        number = number + item.quantity
    })

    useEffect(()=>{
        setCartNumber(number)
    },[number])

    
    return (
        <div>
            <button className='cart-btn'>
                <i className="fas fa-shopping-cart fs-2 text-warning"></i>
                {cartNumber > 0 ? <h2 className="cart-number">{cartNumber}</h2> : <></>}
                
            </button>
        </div>
    )
}

export default CartWidget
