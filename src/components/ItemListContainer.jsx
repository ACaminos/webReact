//Imports
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from './mock/mockData'
import { useParams } from 'react-router-dom'
import ItemList from './itemList/ItemList'

//Firebase
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../service/firebase/firebaseConfig'

//Styles
import '../styles/styles.css'

export const ItemListContainer = ( {greeting} ) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect( () => {
    setLoading(true)

    const collectionRef = categoryId ?
        query(collection(db, 'items'), where('category', '==', categoryId))
        :
        collection(db, 'products')

        getDocs(collectionRef)
        .then(response => {
          const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data }
          })
          setProductos(productsAdapted)
        })
        .catch(err => (
          console.log(err)
        ))
        .finally( () => {
          setLoading(false)
        })
      },[categoryId])




      // ------------ Sin Firebase -----------------
  //   const asyncFunction = categoryId ? getProductsByCategory : getProducts
  //   asyncFunction(categoryId)
  //     .then(res => {
  //       setProductos(res)
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // },[categoryId])

  // console.log(productos, 'itemListContainer')

  if(loading) {
    return <h1>Loading...</h1>
}

  return (
    <div className='container'>
        <h1 className='titleListContainer'>{greeting}</h1>
        <ItemList productos={productos} />
    </div>
  )
}