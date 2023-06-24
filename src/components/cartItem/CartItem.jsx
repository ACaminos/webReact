import React from 'react'
import './cartItem.css'

const CartItem = ({ id, title, price, category, image, stock }) => {
  console.log(image)
  return (
    <>
        <li className="media my-4">
            <img src={image} className="mr-3" alt={title}/>
            <div className="media-body">
                <h5 className="mt-0 mb-1">{title}</h5>
                <p>{title}</p>
                <p>{price}</p>
            </div>
        </li>
    </>
  )
}

export default CartItem