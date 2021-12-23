import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../App'

import './CartWidget.css'



const CartWidget = () => {

    const { cartProds } = useContext(CartContext)

    const [cartNumber, setCartNumber] = useState(0)
    
    useEffect(()=>{
        setCartNumber(0)
        cartProds.forEach(prod=>{
            setCartNumber(cartNumber + prod.quantity)
        })
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
