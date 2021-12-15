import React,{useState} from 'react'
import styles from './ItemDetail.css'

const ItemDetail = ({data}) => {

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
    return (
        <div className="ItemDetail">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-8">
                        <img src={data[0].photo} className="detailImg img-fluid rounded-start" alt={data[0].name}/>
                        <p className="product-info">{data[0].description}</p>
                    </div>
                    <div className="col-md-4">
                        <div className="buy-tab mt-5">
                            <h5 className="title">{data[0].name}</h5>
                            <p className="text">{data[0].type}</p>
                            <p className="text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="price">
                            <h2>${data[0].price}</h2>
                            <h5 className={stockClass}>Stock: {data[0].stock}</h5>
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
