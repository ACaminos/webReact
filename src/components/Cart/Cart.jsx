import React, { useContext } from 'react'
import { CartContext, useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../cartItem/CartItem'

//Styles
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useCart()

    const getTotal = total.toFixed(2)

    if(totalQuantity === 0){
        return(
            <>
                <div className='container'>
                    <h1 style={ { color:'white' } }>No hay productos en el carrito</h1>
                    <button className='btn btn-sm btn-primary mt-5 px-5'><Link to='/'>Ir a productos</Link></button>

                </div>
            </>
        )
    }
  return (
    <div className='container'>
        <ul className='list-unstyled'>
            { cart.map( p => <CartItem key={ p.id } { ...p } /> ) }
        </ul>
        <div className='row'>
            <div className='col-sm-6 colIzq'>
                <h3 style={{color:'white'}}>Total: u$s {getTotal}</h3>
            </div>
            <div className='col-sm-6 colDer'>
                <button className='btn btn-sm btn-danger btnClean' onClick={ () => clearCart() }>Limpiar carrito</button>
                <button className='btn btn-sm btn-primary btnCheck'><Link to='/checkout'>Checkout</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Cart