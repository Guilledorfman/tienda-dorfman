import React, {useState, useContext} from 'react'

import {Link} from 'react-router-dom'
import { CartContext } from '../../helpers/CartContext'
import './ItemCount.css'

const ItemCount = ({ data, cartState }) => {

    const { cartProds, setCartProds } = useContext(CartContext)
    
    
    const [productNumber, setProductNumber] = useState(1);
    const [stockClass, setStockClass] = useState('stock available');


    function alertStock(){
        setStockClass('stock unavailable')
        setTimeout(()=>{
            setStockClass('stock available')
        },200)
    }
    function addProduct(){
        productNumber < data[0].stock ? setProductNumber(productNumber + 1) : alertStock();
        
    }
    function removeProduct(){
        
        if(productNumber > 1){
            setProductNumber(productNumber-1);
        }
    }

    function addToCart(){
        setCartProds([...cartProds, {product:data[0].name, quantity: productNumber, price: data[0].price, id: data[0].id}])
    }

    function goToCart(){
        'ir al carrito'
    }

    const AddToCartBtn = ()=>{
        return <button className="btn btn-warning mt-3" onClick={addToCart}>Agregar al carrito</button>
    }
    const GoToCartBtn = ()=>{
        return <Link to={"/cart"} className="btn btn-warning mt-3" onClick={goToCart}>Ir al carrito</Link>
    }



        return (
            <div className="counter card border-0 text-center">
                    {
                        cartState === false ? 
                        
                        
                        
                        <>
                            <h5 className={stockClass}>Stock: {data[0].stock}</h5>
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
