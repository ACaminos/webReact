//Imports
import { useEffect, useState } from 'react'
import { getProducts } from './mock/mockData'
import ItemList from './itemList/ItemList'

//Styles
import '../styles/styles.css'

export const ItemListContainer = ( {greeting} ) => {
  const [productos, setProductos] = useState([])

  useEffect( () => {
    getProducts()
    .then(res => {
      setProductos(res)
    })
    .catch(err => {
      console.error(err)
    })
  })
  return (
    <div className='container'>
        <h1 className='titleListContainer'>{greeting}</h1>
        <ItemList productos={productos} />
    </div>
  )
}