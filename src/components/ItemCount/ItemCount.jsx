import React, {useState} from 'react'
import './ItemCount.css'

const Product = ({name, description, id, stock}) => {
    const [productNumber, setProductNumber] = useState(0);

    function addProduct(){

        productNumber < stock ? setProductNumber(productNumber + 1) : alert('No hay mas stock de este producto')
    
    }

    function removeProduct(){

        if(productNumber > 0){
            setProductNumber(productNumber-1);
        }
    }

    return (
        <div>
            <div className="card m-3">
                <img src="https://picsum.photos/200/150/?blur" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h5>Stock: {stock}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-evenly">
                        <button onClick={removeProduct}  className="btn btn-warning">-</button>
                        <h2 className="">{productNumber}</h2>
                        <button onClick={addProduct}  className="btn btn-warning">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
