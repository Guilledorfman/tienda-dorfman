import React, {useState} from 'react'
import './Item.css'

const Product = ({name, photo, price, description, stock}) => {
    const [productNumber, setProductNumber] = useState(0);
    const [stockClass, setStockClass] = useState('stock available');

    function alertStock(){
        setStockClass('stock unavailable')
        setTimeout(()=>{
            setStockClass('stock available')
        },200)
    }

    function addProduct(){

        productNumber < stock ? setProductNumber(productNumber + 1) : alertStock();
    
    }

    function removeProduct(){

        if(productNumber > 0){
            setProductNumber(productNumber-1);
        }
    }

    return (
            <div className="card m-1 mb-5 border-0">
                <img src={photo} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <h5>${price}</h5>
                    <p className="card-text">{description}</p>
                    <h5 className={stockClass}>Stock: {stock}</h5>
                    <div className="d-flex justify-content-evenly">
                        <button onClick={removeProduct}  className="btn btn-warning">-</button>
                        <h2 className="">{productNumber}</h2>
                        <button onClick={addProduct}  className="btn btn-warning">+</button>
                    </div>
                    <button className="btn btn-warning mt-3">Agregar al carrito</button>
                </div>
            </div>
    )
}

export default Product
