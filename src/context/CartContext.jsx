import React, { createContext, useState } from 'react'

export const CartContext = createContext([]);

function CartContextProvider( { children } ) {

    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        setCartList( [...cartList, item] )
    }

    function emptyCart() {
        setCartList([])
    }

    function cartItemDelete(index) {
        const newCart = [...cartList];
        newCart.splice(index, 1)

        setCartList(newCart)

    }
    
    function cartItemIncrease(index){
        
        
        if(cartList[index][0].quantity < cartList[index][0].stock){
            const newArr = [...cartList];
            newArr[index][0].quantity = newArr[index][0].quantity + 1;
            setCartList(newArr)
        }else{
            console.log('No hay mas stock');
        }
        

    }
    function cartItemDecrease(index){
        
        if(cartList[index][0].quantity > 1){
            const newArr = [...cartList];
            newArr[index][0].quantity = newArr[index][0].quantity - 1;
            setCartList(newArr)

        }
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            cartItemDelete,
            cartItemIncrease,
            cartItemDecrease,

            }}>
            { children }
        </CartContext.Provider>
    )

}

export default CartContextProvider



