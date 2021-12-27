import React, {useState, useContext } from 'react'

import {Link} from 'react-router-dom'
import {CartContext}  from '../../context/CartContext'

import './ItemCount.css'

const ItemCount = ({ data, cartState }) => {

    const { cartList , addToCart }= useContext(CartContext)

    const [productNumber, setProductNumber] = useState(1);
    const [stockClass, setStockClass] = useState('stock available');


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

    function goToCart(){
        'Terminar mi compra'
    }

    const AddToCartBtn = ()=>{
        return <button className="btn btn-warning mt-3" onClick={clickAddToCart}>Agregar al carrito</button>
    }
    const GoToCartBtn = ()=>{
        return <Link to={"/cart"} className="btn btn-warning mt-3" onClick={goToCart}>Terminar mi compra</Link>
    }



        return (
            <div className="counter card border-0 text-center">
                    {
                        cartState === false ? 
                        
                        
                        
                        <>
                            <h5 className={stockClass}>Stock: {data.stock}</h5>
                            <div className="buy-btn d-flex justify-content-between">
                                <button onClick={removeProduct} className="btn btn-warning">-</button>
                                <h2 className="">{productNumber}</h2>
                                <button onClick={addProduct} className="btn btn-warning">+</button>
                            </div>
                            <p>cantidad</p>
                            <AddToCartBtn/>

                        </>
                        :  <GoToCartBtn/>

                    }
            </div>
        )
}

export default ItemCount
