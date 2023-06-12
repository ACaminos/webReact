//Imports
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from './mock/mockData'
import { useParams } from 'react-router-dom'
import ItemList from './itemList/ItemList'

//Styles
import '../styles/styles.css'

export const ItemListContainer = ( {greeting} ) => {
  const [productos, setProductos] = useState([])

  const { categoryId } = useParams()

  useEffect( () => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId)
      .then(res => {
        setProductos(res)
      })
      .catch(err => {
        console.error(err)
      })
  },[categoryId])

  console.log(setProductos, 'itemDetailContainer')

  return (
    <div className='container'>
        <h1 className='titleListContainer'>{greeting}</h1>
        <ItemList productos={productos} />
    </div>
  )
}