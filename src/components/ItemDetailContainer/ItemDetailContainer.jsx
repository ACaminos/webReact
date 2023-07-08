import { useEffect, useState } from 'react'

//Component
import ItemDetail from '../ItemDetail/ItemDetail'

//Package
import { useParams } from 'react-router-dom'

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

    if(loading) {
      return <h1>Loading...</h1>
  }

  return (
    <div className='container'>
        <h4 style={{color:'white', marginTop:'20px'}}>Detalle del producto</h4>
        <hr style={{color:'white'}} />
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer