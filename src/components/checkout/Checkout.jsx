import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { useNotification } from '../notification/NotificationService'
import { useNavigate } from 'react-router-dom'

import { db } from "../../service/firebase/firebaseConfig"
import { useForm } from 'react-hook-form'

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
    <>
      <h1 style={ { color: 'white' } }>Checkout</h1>
      <h2 style={ { color: 'white' } }>Formulario</h2>
      <form onSubmit={ handleSubmit( createOrder ) }>
        <div>
          <label style={ { color:'white' } }>Nombre:</label>
          <input type="text" { ...register( "nombre", { required: true }) } />
          {/* { errors.nombre && <span style={ { color:'white' } }>El nombre es requerido</span> } */}
        </div>

        <div>
          <label style={ { color:'white' } }>Teléfono:</label>
          <input type="number" { ...register( "telefono",{ required: true, pattern: /^[0-9]+$/ } ) } />
          {/* { errors.telefono && <span style={ { color:'white' } }>El teléfono es requerido y debe ser numérico</span> } */}
        </div>

        <div>
          <label style={ { color:'white' } }>Email:</label>
          <input type="text" { ...register( "email",{ required: true, pattern: /^\S+@\S+$/i } ) } />
          {/* { errors.email && <span style={ { color:'white' } }>El correo electrónico es requerido y debe ser válido</span> } */}
        </div>

        <button type="submit">Generar orden de compra</button>
      </form>
    </>
  )
}

export default Checkout