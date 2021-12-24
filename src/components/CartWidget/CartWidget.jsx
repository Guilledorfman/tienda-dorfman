import React, { useContext, useState, useEffect } from 'react'
import {CartContext} from '../../helpers/CartContext'
import './CartWidget.css'




const CartWidget = () => {

    const { cartProds } = useContext(CartContext)

    const [cartNumber, setCartNumber] = useState(0)
    
    let number = 0;

    useEffect(()=>{
        number = 0;
        setCartNumber(number)
        cartProds.forEach(prod=>{
            number = (number + prod.quantity)
        })
        setCartNumber(number);
    },[cartProds])

    
    return (
        <div>
            <button className='cart-btn'>
                <i className="fas fa-shopping-cart fs-2 text-warning"></i>
                {cartNumber > 0 ? <h5 className="text-warning">{cartNumber}</h5> : <></>}
            </button>
        </div>
    )
}

export default CartWidget
