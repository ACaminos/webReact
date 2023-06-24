import { useEffect, useState } from 'react'
import { getProductById } from '../mock/mockData'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()


    useEffect(() => {
      getProductById(itemId)
      .then(res => {
        setProduct(res)
      })
      .catch(err => {
        console.log(err)
      })
    }, [itemId])

  return (
    <>
        <h1>Detalle del producto</h1>
        <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer