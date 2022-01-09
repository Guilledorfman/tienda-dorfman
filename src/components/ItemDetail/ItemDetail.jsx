import React, {  useState, useEffect, useContext  } from 'react'

import {CartContext}  from '../../context/CartContext'
import ColorPicker from '../ColorPicker/ColorPicker';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    const { cartList }= useContext(CartContext)
    const [option, setOption] = useState(data.colors[0].img);
    const [cartState, setCartState] = useState(false);


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
        </div>
    )
}

export default ItemDetail
