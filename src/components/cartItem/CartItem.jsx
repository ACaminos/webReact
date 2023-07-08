import React from 'react'

//Components
import { useCart } from '../../context/CartContext'

//Styles
import './cartItem.css'

const CartItem = ({ id, title, price, category, image, quantity }) => {

  const {removeItem} = useCart()

  return (
    <>
        <div className="container p-3 rounded cart">
          <div className="row no-gutters">
            <div className="col-md-12">
              <div className="product-details mr-2">
                <div className="d-flex justify-content-between align-items-center mt-3 p-2 items laCard">
                  <div className="d-flex flex-row" >
                    <img className="rounded" src={image} width="40"/>
                      <div className="description">
                        <span className="spec">{category}</span>
                        <span className="font-weight-bold d-block">{title}</span>
                      </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <span className="d-block stock">{quantity}<span style={{fontSize:'10px'}}>un</span></span>
                    <span className="d-block font-weight-bold price">U$S {price}</span>
                    <button className='btn btn-sm btn' onClick={ ()=> removeItem(id)}>
                      <img src={'/src/assets/trash.png'} style={{width:'32px', height:'32px', backgroundColor:'white'}}/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CartItem