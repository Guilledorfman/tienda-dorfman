import React, {useState} from 'react'
import CheckOrder from '../CheckOrder/CheckOrder'
import './CheckOrderContainer.css'

import { doc, getDoc, getFirestore } from 'firebase/firestore';

const CheckOrderContainer = () => {

    const [ idSent, setIdSent ] = useState(false);

    const [ orderId, setOrderId ] = useState('')
    const [ loading, setLoading ] = useState(true)
    const [ order, setOrder ] = useState({})

    const [ status, setStatus ] = useState('');

    
function changeId(){

    const inputValue = document.getElementById('checkorder-input')
    setOrderId(inputValue.value);

}

function checkOrder(){

    if(orderId.length > 0){
        setIdSent(true)

        const db = getFirestore()
        const queryDB = doc(db, 'orders', orderId)
        getDoc(queryDB)
        .then(resp=> !(resp._document === null) ? setOrder(resp.data()) : setStatus('error'))
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))

    }
}


    return (
        <div className="checkorderContainer">
            {
            idSent === false ? 
                <div className="checkOrderForm">
                    <h2>Ingrese el ID para comprobar el estado de su pedido</h2>
                    <input onChange={changeId} id="checkorder-input" type="text" />
                    <button onClick={checkOrder}>Ok</button>
                </div>
                : 
                <CheckOrder order={order} loading={loading} status={status}/>
        }

        </div>
    )
}

export default CheckOrderContainer
