import { useEffect, useState } from 'react'

//Component
import ItemDetail from '../ItemDetail/ItemDetail'

//Router Dom
import { useParams } from 'react-router-dom'

//Mock Data
import { getProductById } from '../mock/mockData'

//Firebase
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState( null )
    const [loading, setLoading] = useState( true )

    const { itemId } = useParams()


    useEffect(  () => {
      const productRef = doc( db, 'products', itemId  )

      getDoc(productRef)
        .then(  querySnapshot => {
          console.log(querySnapshot)
          const fields = querySnapshot.data()
          const productAdapted = { id: querySnapshot.id, ...fields }

          setProduct(productAdapted)
        })
        .finally( setLoading( false ) )
    }, [itemId])


    //   getProductById(itemId)
    //   .then(res => {
    //     setProduct(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // }, [itemId])

    if(loading) {
      return <h1>Loading...</h1>
  }

  return (
    <>
        <h1>Detalle del producto</h1>
        <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer