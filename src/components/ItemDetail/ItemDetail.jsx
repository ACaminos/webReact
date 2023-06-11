import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'

const ItemDetail = ({ id, title, price, category, description, image, stock }) => {
  return (
    <>
    <div class="card" style="width: 18rem;">
        <img src={image} class="card-img-top" alt={title} />
        <div class="card-body">
            <h5 class="card-title">{category}</h5>
            <p class="card-text">{title}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Description</li>
            <li class="list-group-item">{description}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Price: &nbsp; {price}</a>
            <a href="#" class="card-link">Stock: &nbsp; {stock}</a>
        </div>
        <div class="card-footer text-muted">
            <ItemCount initial={1} stock={stock} onAdd={ (cantidad) => console.log('Cantidad agregada')} />
        </div>
    </div>
    </>
  )
}

export default ItemDetail