import React,{useEffect, useState, useContext} from 'react'
import './BuyForm.css'

import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
margin-left: auto;
margin-right: auto;
margin-top: 100px;
    
}
`;


import {addDoc, collection, getFirestore, Timestamp, writeBatch, doc } from 'firebase/firestore';
import  {CartContext}  from '../../context/CartContext';


let buyerData;




const BuyForm = ({modal, onClose, order}) => {

    const { cartList, emptyCart } = useContext(CartContext)

    const [btnClass, setBtnClass] = useState('btn btn-success disabled');
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)
    
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [orderId, setOrderId] = useState('');
    
    const db = getFirestore()


    useEffect(()=>{
        const nameInput = document.getElementById('nameInput');
        const emailInput1 = document.getElementById('emailInput1');
        const emailInput2 = document.getElementById('emailInput2');
        const phoneInput = document.getElementById('phoneInput');
        setBtnClass('btn btn-success disabled')
    },[modal])
    
    function buy(){
        buyerData = {name: nameInput.value, phone: phoneInput.value, email: emailInput1.value}
        order.buyer = buyerData;
        order.date = Timestamp.fromDate(new Date())
        
        if( validateLength() && validateEmails() ){


            setLoading(true);
            const orderCollection = collection(db, 'orders')
            addDoc(orderCollection, order)
            .then(resp=> setOrderId(resp._key.path.segments[1]))
            .then(()=> emptyCart())
            .then(()=> updateStock())
            .catch(err=> console.log(err))
            .finally(()=>setLoading(false), setSuccess(true))

            


        } else{
            setShowError(true);
        }
        
    }
    
    function updateStock(){

        const batch = writeBatch(db)
        
        order.items.map(e=>{
            
            let docUpdate = doc(db, 'items', e.id)
            let currentStock = cartList.find(item => item.id === e.id).stock

            batch.update( docUpdate, {

                stock: currentStock - e.quantity

            });
        })

        batch.commit()
        
    }

    const validateLength = ()=>{

        validateEmails()
        setShowError(false);

        if (nameInput.value.length > 0 && emailInput1.value.length > 0 && emailInput2.value.length > 0 && phoneInput.value.length > 4){
            setBtnClass('btn btn-success enabled')
            return true
        }else{
            setBtnClass('btn btn-success disabled')
    }
}


    const validateEmails = ()=>{

        const containsAt = emailInput1.value.indexOf('@');
        const containsDot = emailInput1.value.indexOf('.');

        if (containsAt === -1 || containsDot === -1){
            setError('el Email debe estar en formato example@email.ok ')
        }
        
        if(!(emailInput1.value === emailInput2.value)){
            setError('Por favor confirme su Email')
        }

        if (emailInput1.value === emailInput2.value && containsAt > -1 && containsDot > -1 ){
            return true;
        }
        
    }


    return (
<>

{
    modal ? 

        <div onClick={onClose} className='buyform'>
            <div onClick={e => e.stopPropagation()} className="card form">

                <div className="bar bg-warning">
                    <i onClick={onClose} className="far fa-window-close closeicon"></i>
                </div>

            { loading ?  <ScaleLoader className='loading' color={'#ffc107'} loading={loading} css={override} size={150} height={60} width={40}/> :
                !success ?
                <>
                    <div className="buyerform">
                    {showError ?
                        <div className="alert alert-warning" role="alert">
                            {error}
                        </div>
                        : <div className="alert alert-light">Est??s a un paso de disfrutar tu compra!</div>
                    }
                        <h5>Nombre</h5>
                        <input id="nameInput" onChange={validateLength} type="text"  />
                        <h5>E-mail</h5>
                        <input id="emailInput1" onChange={validateLength} type="text" />
                        <h5>Confirme su E-mail</h5>
                        <input id="emailInput2" onChange={validateLength} type="text" />
                        <h5>Tel??fono</h5>
                        <input id="phoneInput" onChange={validateLength} type="number" />
                    </div>
                    <button className={btnClass} onClick={buy} >COMPRAR</button>    
                </> : 
                <>
                    <div className="loading end">
                        <h2>Listo, {order.buyer.name}.</h2>
                        <h3>??Gracias por tu compra!</h3>
                        <p>Podr??s hacer el seguimiento de tu pedido con el siguiente c??digo:</p>    
                        <b className="orderId">{orderId}</b>
                    </div>    
                    <button className="btn btn-warning" onClick={onClose}>Volver</button>
                </>
            }
            </div>
        </div>
        : <></>
}
</>
    )
}

export default BuyForm
