import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './ItemCount.css'
const ItemCount = ({ data }) => {

    const [productNumber, setProductNumber] = useState(1);
    const [stockClass, setStockClass] = useState('stock available');
    const [cartState, setCartState] = useState(false);

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
        setCartState(true)
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
