import React from 'react'
import { Link } from 'react-router-dom'
import './CheckOrder.css'

const CheckOrder = ({loading, order, status}) => {


    return (
        <div className="checkorder-response">

             {loading ? <h2>LOADING</h2> : 
              
                status === 'error' ? 
                
                <div className="error">
                    <img src="https://res.cloudinary.com/dxoqq4yvo/image/upload/v1642596362/coderhouse-react-tienda/Product_Not_Found_a06won.png" alt="" />
                    <p>No hay ninguna compra con ese ID</p>
                    <Link className="btn btn-warning" to='/'>Volver</Link>
                </div>
                
                :
                <>
                    <p>Compra realizada el {order.date.toDate().toLocaleDateString()} a las {order.date.toDate().toLocaleTimeString()} hs</p>
                    {order.items.map(e=>{
                        return(
                            <div key={e.id} className="order-product">
                                <h5 className="order-product-name">{e.name}</h5>
                                <h5 className="order-product-quantity">x {e.quantity}</h5>
                                <h5 className="order-product-price">${e.price}</h5>
                            </div>
                        )
                    })}
                    <h2>${order.total}</h2>
                </>
            }


        </div>
    )
}

export default CheckOrder
