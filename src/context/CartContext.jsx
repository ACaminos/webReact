import { createContext, useContext, useState } from "react";

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


//Comprueba si el prod ya esta en el carrito o no
const isInCart = ( itemId ) => {
    return cart.some( prod => prod.id === itemId )
}

const getTotalQuantity = () => {
    let totalQuantity = 0

    cart.forEach(prod => {
        totalQuantity += prod.quantity
    })

    return totalQuantity
}

const totalQuantity = getTotalQuantity()

const getTotal = () => {
    let total = 0

    cart.forEach(prod => {
        total += prod.quantity * prod.price
    })

    return total
}

const total = getTotal()

//Limpiar Carrito
const clearCart = () => {
setCart([])
}

return(
    <CartContext.Provider value={ { cart, addItem, removeItem, clearCart, total, totalQuantity } }>
        { children }
    </CartContext.Provider>
)
}

export const useCart = () => {
    return useContext(CartContext)
}