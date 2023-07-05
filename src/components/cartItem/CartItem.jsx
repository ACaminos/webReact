import React from 'react'
import './cartItem.css'
import { useCart } from '../../context/CartContext'

const CartItem = ({ id, title, price, category, image, quantity }) => {

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
                    <i className="fa fa-trash-o ml-3 text-black-50"></i>
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