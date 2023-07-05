import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { useNotification } from '../notification/NotificationService'
import { useNavigate } from 'react-router-dom'

import { db } from "../../service/firebase/firebaseConfig"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const navigate = useNavigate()

    const { setNotification } = useNotification()

    const createOrder = async() => {

    const objOrder = {
        buyer: {
            name: "Pepe lolo",
            phone: '12345678',
            email: 'hola@hola.com.ar'
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

    finally{  setLoading(false) }
  }

  if(loading){
    return(
      <h2>Se esta procediendo a generar la orden</h2>
    )
  }
  return (
    <>
            <h1 style={{color:'white'}}>Checkout</h1>
            <h2 style={{color:'white'}}>Formulario</h2>
            <button onClick={createOrder}>Generar orden de compra</button>
    </>
  )
}

export default Checkout