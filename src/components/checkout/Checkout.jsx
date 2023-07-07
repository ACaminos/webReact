import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { useNotification } from '../notification/NotificationService'
import { useNavigate } from 'react-router-dom'

import { db } from "../../service/firebase/firebaseConfig"
import { useForm } from 'react-hook-form'

import './Checkout.css'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    const { setNotification } = useNotification()

    const createOrder = async(data) => {

    const objOrder = {
        buyer: {
            name: data.nombre,
            phone: data.telefono,
            email: data.email
        },
        items: cart,
        total: total
    }

    try{
      const ids = cart.map( prod => prod.id )

      const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids ) )

      const { docs } = await getDocs(productsRef)

      const batch = writeBatch(db)

      const outOfStock = []

      docs.forEach( doc => {
          const fieldsDoc = doc.data()
          const stockDb = fieldsDoc.stock

          const productAddedToCart = cart.find( prod => prod.id === doc.id )
          const prodQuantity = productAddedToCart?.quantity

          if(stockDb >= prodQuantity){
            batch.update(doc.ref, {stock: stockDb - prodQuantity })
          }
          else{
            outOfStock.push({id: doc.id, ...fieldsDoc })
          }
      })

      if( outOfStock.length === 0){
          batch.commit()
          const ordersRef = collection(db, 'orders')
          const { id } = await addDoc(ordersRef, objOrder)

          setNotification('success', 'La orden se genero exitosamente')

          clearCart()

          navigate('/')
      }
      else {
        setNotification('error', 'hay productos que no tienen stock')
    }
    }
    catch(err){ setNotification('error', '¡Cuidado!, ¡hubo un error en la generacion de la orden!') }

    finally{ setLoading(false) }
  }

  if(loading){
    return(
      <h2>Se esta procediendo a generar la orden</h2>
    )
  }
  return (
    <div className='container'>
      <h2>Checkout</h2>
      <hr style={{color:'gray'}} />
      <h4>Formulario</h4>
      <div className='row'>
        <div className='col-6'>
          <form onSubmit={ handleSubmit( createOrder ) }>
            <div class="mb-3 mt-3">
              <label for="formGroupExampleInput" class="form-label nameLabel">Nombre</label>
              <input type="text" className='form-control form-control-sm' placeholder='Ingrese su nombre' { ...register( "nombre", { required: true }) } />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label telLabel">Telefono</label>
              <input type="number" className='form-control form-control-sm telPlaceholder' placeholder='Ingrese su numero de telefono' { ...register( "telefono",{ required: true, pattern: /^[0-9]+$/ } ) } />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label emailLabel">Email</label>
              <input type="text" className='form-control form-control-sm' placeholder='Ingrese su correo electronico' { ...register( "email",{ required: true, pattern: /^\S+@\S+$/i } ) } />
            </div>
            <button type="submit" class="mt-2 btn btn-sm btn-success">Generar orden de compra</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout