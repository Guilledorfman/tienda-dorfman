import React,{useContext} from 'react'
import { CartContext } from '../../App';


const Cart = () => {
    const { cartProds, setCartProds } = useContext(CartContext)

    function removeItem(e){

        setCartProds([])

    }

    const productList = cartProds.map(product=>{
        return(
            <li key={product.id}>nombre: <b>{product.product}</b> unidades: {product.quantity} <i className="fas fa-trash" onClick={()=>{removeItem([product.id])}}></i></li>
        )
    })
    return (
        <>
        CARRITO DE COMPRAS
            <ul>
                {productList}
            </ul>
        </>
    )
}

export default Cart
