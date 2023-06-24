import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    //Agregar item
    const addItem = ( item, quantity ) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity} ] )
        } else {
            console.log('El producto ya fue agregado')
        }
    }

    //Eliminar Item
const removeItem = ( itemId ) => {
    const cartUpdate = cart.filter( prod => prod.id !== itemId )
    setCart(cartUpdate)
}

    //Limpiar Carrito
const clearCart = () => {
    setCart([])
}

    //Comprueba si el prod ya esta en el carrito o no
const isInCart = ( itemId ) => {
    return cart.some( prod => prod.id === itemId )
}

return(
    <CartContext.Provider value={ { cart, addItem, removeItem, clearCart } }>
        { children }
    </CartContext.Provider>
)
}