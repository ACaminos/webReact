import { useState } from 'react'
import '../itemCount/itemCountcss.css'

export const ItemCount = ( { stock, initial, onAdd } ) => {
  const [cantidad, setCantidad] = useState(initial)
  const [guardado, setGuardado] = useState()

  const addition = () => {
    if( cantidad < stock ){
      setCantidad( cantidad + 1 )
    }
  }

  const decrement = () => {
    if( cantidad > 1 ){
      setCantidad( cantidad - 1 )
    }
  }

  const saveStock = () => {
    const valor = cantidad
    console.log(`Se han guardado ${valor} productos`)
  }

  return (
    <>
      <div className='container row'>
        <div className='col-md-6'>
          <div className="btn-group" role="group">
              <button type="button" className="btn btn-sm btn-primary" onClick={ decrement }> - </button>
              {/* <input type="number" value={cantidad} name={cantidad} readOnly onWheel={() => document.activeElement.blur()} /> */}
              <h4 style={{color:'white', fontWeight:'bold', marginLeft:20, marginRight:20}}>{cantidad}</h4>
              <button type="button" className="btn btn-sm btn-primary" onClick={ addition }> + </button>
          </div>
        </div>
        <div className='col-md-6'>
          <button type="button" className="btn btn-sm btn-danger" onClick={saveStock}> Agregar </button>
        </div>
      </div>
    </>
  )
}
