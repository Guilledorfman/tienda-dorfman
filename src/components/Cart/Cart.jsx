import React,{ useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Link} from 'react-router-dom'

import {addDoc, collection, getFirestore, query,Timestamp, updateDoc, where, writeBatch } from 'firebase/firestore';
import BuyForm from '../BuyForm/BuyForm';


function Cart() {
    
    const { cartList, emptyCart, deleteCartItem } = useContext(CartContext)
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

        
        // const db = getFirestore()
        // const orderCollection = collection(db, 'orders')
        // addDoc(orderCollection, order)
        // .then(resp=> console.log(resp._key.path.segments[1]))
        // .catch(err=> console.log(err))
        
        // modificar update
        // const db = getFirestore()
        // const docEdit = doc(db, 'items', 'id')
        // updateDoc(docEdit, {
            //     stock: 99
            // })
            // .then(resp=> console.log())
            
            //modificar batch
            
        // const db = getFirestore()
        // const docEdit = doc(db, 'items', 'id')
        // const docEdit2 = doc(db, 'items', id2)
        // const batch = writeBatch(db)
        // batch.update(docEdit, {
        //     stock: 90
        // })
        // batch.update(docEdit2,{
        //     stock: 99
        // })
        // batch.commit()
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
