import React, { useContext } from 'react'
import { CartContext, useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../cartItem/CartItem'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useCart()

    if(totalQuantity === 0){
        return(
            <>
                <div className='container'>
                    <h1 style={ { color:'white' } }>No hay productos en el carrito</h1>
                    <Link to='/'>Productos</Link>
                </div>
            </>
        )
    }
  return (
    <div className='container'>
        <ul className='list-unstyled'>
            { cart.map( p => <CartItem key={ p.id } { ...p } /> ) }
        </ul>
        <h3 style={{color:'white'}}>Total: u$s {total}</h3>
        <button onClick={ () => clearCart() }>Limpiar carrito</button>
        <Link to='/checkout'>Checkout</Link>
    </div>
  )
}

export default Cart