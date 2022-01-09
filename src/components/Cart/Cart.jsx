import React,{ useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Link} from 'react-router-dom'

import BuyForm from '../BuyForm/BuyForm';


function Cart() {
    
    const { cartList, emptyCart } = useContext(CartContext)
    const [ total, setTotal ] = useState(0);
    const [order, setOrder] = useState({})


    const newOrder = {buyer: {}, items: [], total: 0}

    const [modal, setModal] = useState(false);


    let totalNumber = 0;

    cartList.map(item=>{
        const subtotal = item.price * item.quantity
        totalNumber = totalNumber + subtotal
    })

    useEffect(()=>{
        setTotal(totalNumber)
    },[totalNumber])

    function buy(){

        cartList.map(e=>{
            newOrder.items.push({id: e.id, name: e.name, price: e.price, quantity: e.quantity})
        })
        newOrder.total = total;
        
        setOrder(newOrder)

        setModal(true)

    }


    const ShowList = cartList.map((item, index)=>{

        return(
                <CartItem key={item.id} item={item} index={index}/>
        )
    })

    return (
        <>
        <BuyForm onClose={()=> setModal(false)} modal={modal} order={order}/>
            {
            cartList.length > 0 ? 
            <div>
                {ShowList} 
                <div className="text-center">
                    <h2 >total: ${total}</h2>
                    <button className='btn btn-danger me-3' onClick={emptyCart}>BORRAR TODO</button>
                    <button className='text-center btn btn-success' onClick={buy}>COMPRAR</button>
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
