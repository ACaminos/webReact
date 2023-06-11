import React, { useEffect, useState } from 'react'
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
        console.error(err)
      })
    }, [third])
    
  return (
    <>
        <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer