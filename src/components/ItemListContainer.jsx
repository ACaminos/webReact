//Imports
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from './mock/mockData'
import ItemList from './itemList/ItemList'

//Styles
import '../styles/styles.css'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ( {greeting} ) => {
  const [productos, setProductos] = useState([])

  const { categoryId } = useParams()

  useEffect( () => {
    const identify = categoryId ? getProductsByCategory : getProducts

    identify(categoryId)
    .then(res => {
      setProductos(res)
    })
    .catch(err => {
      console.error(err)
    })
  },[categoryId])

  return (
    <div className='container'>
        <h1 className='titleListContainer'>{greeting}</h1>
        <ItemList productos={productos} />
    </div>
  )
}