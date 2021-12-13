import React,{useState} from 'react'
import styles from './ItemDetail.css'

const ItemDetail = ({data}) => {

    const [productNumber, setProductNumber] = useState(0);
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

        if(productNumber > 0){
            setProductNumber(productNumber-1);
        }
    }
    return (
        <div className="ItemDetail">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-8">
                        <img src="https://cdn.korg.com/es/products/upload/8e509f6017cffae8ac5fd3cd981b6207_pc.jpg" className="detailImg img-fluid rounded-start" alt="Microkorg"/>
                        <p className="product-info">{data.description}</p>
                    </div>
                    <div className="col-md-4">
                        <div className="buy-tab mt-5">
                            <h5 className="title">{data.name}</h5>
                            <p className="text">{data.type}</p>
                            <p className="text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="price">
                            <h2>$80.500</h2>
                            <h5 className={stockClass}>Stock: {data.stock}</h5>
                    <div className="buy-btn d-flex justify-content-between">
                        <button onClick={removeProduct} className="btn btn-warning">-</button>
                        <h2 className="">{productNumber}</h2>
                        <button onClick={addProduct} className="btn btn-warning">+</button>
                    </div>
                    <button className="btn btn-warning mt-3">Comprar ahora</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
