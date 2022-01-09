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

    function cartItemDelete(id) {

        setCartList(cartList.filter(prods => prods.id !== id))

    }
    
    function cartItemIncrease(index){
        
        
        if(cartList[index].quantity < cartList[index].stock){
            const newArr = [...cartList];
            newArr[index].quantity = newArr[index].quantity + 1;
            setCartList(newArr)
        }else{
            return(false)
        }
        

    }
    function cartItemDecrease(index){
        
        if(cartList[index].quantity > 1){
            const newArr = [...cartList];
            newArr[index].quantity = newArr[index].quantity - 1;
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



