import React, {useState, useContext, useEffect } from 'react'

import {Link} from 'react-router-dom'
import {CartContext}  from '../../context/CartContext'

import './ItemCount.css'

const ItemCount = ({ data, cartState }) => {

    const { cartList , addToCart, cartItemDelete }= useContext(CartContext)

    const [productNumber, setProductNumber] = useState(1);
    const [stockClass, setStockClass] = useState('stock available');
    const [ amountInCart, setAmountInCart ] = useState(0)

    useEffect(()=>{
        
        cartState ? setAmountInCart(cartList.find(item => item.id === data.id).quantity) : setAmountInCart(0)


    },[cartState])


    function alertStock(){
        setStockClass('stock unavailable')
        setTimeout(()=>{
            setStockClass('stock available')
        },200)
    }
    function addProduct(){
        productNumber < data.stock ? setProductNumber(productNumber + 1) : alertStock();
        
    }
    
    function removeProduct(){
        
        if(productNumber > 1){
            setProductNumber(productNumber-1);
        }
    }

    function clickAddToCart(){

        addToCart({...data, quantity: productNumber})
    }

    function deleteItem(id){
        cartItemDelete(id)

    }

    const AddToCartBtn = ()=>{
        return <button className="btn btn-warning mt-3" onClick={clickAddToCart}>Agregar al carrito</button>
    }
    const GoToCartBtn = ()=>{
        return(
            <>
            <p>-Hay <b>{amountInCart}</b> en el carrito-</p>
             <div className="edit-delete">
                <i onClick={() => deleteItem(data.id)} className="fas fa-trash-alt"></i>
             </div>
            <Link to={"/"} className="btn btn-warning mt-3">Seguir comprando</Link>
            <Link to={"/cart"} className="btn btn-success mt-3">Terminar mi compra</Link>
            </>
            
        ) 
    }



        return (
            <div className="counter card border-0 text-center">
                    {
                        cartState === false ? 
                        
                        
                        
                        <>
                            <h5 className={stockClass}>Stock: {data.stock}</h5>
                            <div className="counter-cont buy-btn d-flex justify-content-between">
                                <button onClick={removeProduct} className="btn btn-warning">-</button>
                                <h2 className="">{productNumber}</h2>
                                <button onClick={addProduct} className="btn btn-warning">+</button>
                            </div>
                            <p>cantidad</p>
                            <AddToCartBtn/>

                        </>
                        :  

                        <GoToCartBtn/>

                    }
            </div>
        )
}

export default ItemCount
