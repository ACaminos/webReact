import React from 'react'
import './cartItem.css'
import { useCart } from '../../context/CartContext'

const CartItem = ({ id, title, price, category, image, quantity }) => {

  return (
    <>
        <div class="container p-3 rounded cart">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="product-details mr-2">
                <div class="d-flex justify-content-between align-items-center mt-3 p-2 items laCard">
                  <div class="d-flex flex-row" >
                    <img class="rounded" src={image} width="40"/>
                      <div class="description">
                        <span class="spec">{category}</span>
                        <span class="font-weight-bold d-block">{title}</span>
                      </div>
                  </div>
                  <div class="d-flex flex-row align-items-center">
                    <span class="d-block stock">{quantity}<span style={{fontSize:'10px'}}>un</span></span>
                    <span class="d-block font-weight-bold price">U$S {price}</span>
                    <i class="fa fa-trash-o ml-3 text-black-50"></i>
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