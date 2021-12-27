import React,{ useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Link} from 'react-router-dom'


function Cart() {
    
    const { cartList, emptyCart, deleteCartItem } = useContext(CartContext)
    const [ total, setTotal ] = useState(0);


    let totalNumber = 0;

    cartList.map(item=>{
        const subtotal = item.price * item.quantity
        totalNumber = totalNumber + subtotal
    })

    useEffect(()=>{
        setTotal(totalNumber)
    },[totalNumber])


    const ShowList = cartList.map((item, index)=>{

        return(
                <CartItem key={item.id} item={item} index={index}/>
        )
    })

    return (
        <>
            {
            cartList.length > 0 ? 
            <div>
                {ShowList} 
                <div className="text-center">
                    <h2 >total: ${total}</h2>
                    <button onClick={emptyCart}>BORRAR TODO</button>

                </div>
            </div>:
            <div className="text-center">
                <h2>Tu carrito está vacío</h2>
                <Link className="btn btn-warning" to={'/'}>Volver</Link>
            </div>
            }

                

        </>

    )

}


export default Cart
