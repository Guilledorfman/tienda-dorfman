import React, {  useState, useEffect, useContext  } from 'react'
import { Link } from 'react-router-dom';

import {CartContext}  from '../../context/CartContext'
import ColorPicker from '../ColorPicker/ColorPicker';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({data, error}) => {
    const { cartList }= useContext(CartContext)
    const [cartState, setCartState] = useState(false);
    const [option, setOption] = useState(error ? '' : data.colors[0].img);

    useEffect(()=>{
        isInCart(data.id)
    },[cartList])

    function isInCart(id){
        const isItInCart = cartList.find(prod => prod.id === id);
        if(isItInCart){
            setCartState(true);
        }else{
            setCartState(false);
        }
     }

    function optionSelected(value){
        setOption(value);
    }

    return (
        <div className="ItemDetail-cont">
            {
                error ? 
                
                <div className="error">
                    <img src="https://res.cloudinary.com/dxoqq4yvo/image/upload/v1642596362/coderhouse-react-tienda/Product_Not_Found_a06won.png" alt="" />
                    <p>Parece que el producto que usted quiere visualizar no existe</p>
                    <Link className="btn btn-warning" to='/'>Volver</Link>
                </div> 
                :
                
                <div className="ItemDetail">
                    <div className="row g-0">
                        <div className="col-md-6 detailImg-cont">
                            <img src={option} className="detailImg img-fluid rounded-start" alt={data.name}/>
                            {

                                data.stock === 0 ?
                                <span className="sinstock badge bg-secondary">SIN STOCK</span> :
                                <></>
                                
                            }
                            
                        <hr/>
                        <div className="colors">
                            <ColorPicker colors={data.colors} onSelect={optionSelected} defaultOption={option}/> 
                        </div>
                        <hr/>
                        </div>
                        <div className="col-md-6">
                            <div className="buy-tab mt-5">
                                <h5 className="title">{data.name}</h5>
                                <p className="text">{data.type}</p>

                            </div>
                            <p className="product-info">{data.description}</p>
                            <div className="price">
                                <h2>${data.price}</h2>

                                {

                                    data.stock === 0 ?
                                    <h5>Sin stock</h5> :
                                    <ItemCount data={data} cartState={cartState}/>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemDetail
