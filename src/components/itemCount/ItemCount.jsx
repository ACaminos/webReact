import { useState } from 'react'

//Styles
import '../itemCount/itemCountcss.css'

export const ItemCount = ( { stock, initial, onAdd } ) => {
  const [quantity, setQuantity] = useState(initial)

  const addition = () => {
    if( quantity < stock ){
      setQuantity( quantity + 1 )
    }
  }

  const decrement = () => {
    if( quantity > 1 ){
      setQuantity( quantity - 1 )
    }
  }

  const saveStock = () => {
    const valor = quantity
    console.log(`Se han guardado ${valor} productos`)
  }

  return (
    <div className='contador'>
      <div className='container row'>
        <div className='col-5' style={{textAlign:'right'}}>
          <div className="btn-group btn-group-sm" role="group" style={{height: '31px'}}>
              <button type="button" className="btn btn-sm btn-primary" onClick={ decrement }> - </button>
              <h4 style={{color:'black', fontWeight:'bold', marginLeft:20, marginRight:20}}>{quantity}</h4>
              <button type="button" className="btn btn-sm btn-primary" onClick={ addition }> + </button>
          </div>
        </div>
        <div className='col-5' style={{textAlign:'right'}}>
          <button type="button" className="btn btn-sm btn-danger" onClick={() => onAdd(quantity)} disabled={!stock}> Agregar </button>
        </div>
      </div>
    </div>
  )
}
