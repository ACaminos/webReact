//Styles
import '../styles/styles.css'

export const ItemListContainer = ( {greeting} ) => {
  return (
    <div className='container'>
        <h1 className='titleListContainer'>{greeting}</h1>
    </div>
  )
}
