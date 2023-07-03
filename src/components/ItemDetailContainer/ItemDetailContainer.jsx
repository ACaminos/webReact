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
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()


    useEffect(() => {
      setLoading(true)
      const docRef = doc( db, 'products', itemId )

      getDoc(docRef)
      .then( res => {
        const data = response.data()
        const productAdapted = { id: res.id, ...data }
        setProduct(productAdapted)
      })
      .catch(err => {
        console.log(err)
      })
      .finally( () => {
        setLoading(false)
      })
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