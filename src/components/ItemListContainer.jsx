//Imports
import { useEffect, useState } from 'react'
// import { getProducts, getProductsByCategory } from './mock/mockData'
import { useParams } from 'react-router-dom'
import ItemList from './itemList/ItemList'

//Firebase
import { getDocs, collection, query, where, QuerySnapshot } from "firebase/firestore"
import { db } from '../service/firebase/firebaseConfig'

//Styles
import '../styles/styles.css'

export const ItemListContainer = ( {greeting} ) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect( () => {
    const productRef = collection(db, 'products')

    setLoading(true)

    getDocs(productRef)

      .then(querySnapshot => {
        const productsAdapted = querySnapshot.docs.map(doc => {
          const fields = doc.data()
          console.log(fields)
          return{ id: doc.id, ...fields }
        })
        setProductos( productsAdapted )
      })

      .finally( () => { setLoading(false) } )
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