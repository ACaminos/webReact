import { useContext, useState } from 'react'

//Components
import { ItemCount } from '../itemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useNotification } from '../notification/NotificationService'

//Packages
import { Link } from 'react-router-dom'

//Styles
import './ItemDetail.css'

const ItemDetail = ( { id, title, price, category, description, image, stock } ) => {
    const [ quantityAdd, setQuantityAdd ] = useState(0)

    const { addItem } = useContext(CartContext)
    const {setNotification} = useNotification()

    const handleQuantity = ( quantity ) => {
        setQuantityAdd( quantity )

        const item = {
            id, title, price, image, stock, category, quantity
        }

        addItem( item, quantity )
        setNotification('error', `Se agrego correctamente ${quantity} ${title} al carrito`, 5)
    }

    console.log(quantityAdd, 'quantity add')

  return (
    <>
        <div className="card" style={ { width:'30rem' } }>
            <img src={ image } className="card-img-top" id='queOnda' alt={ title } />
            <div className="card-body">
                <h4 className="card-title">{ category }</h4>
                <h6 className="card-text cardTextTitle">{ title }</h6>
            </div>
            <ul className="list-group list-group-flush listGroupPadding">
                <li className="list-group-item descriptionTitle">Description</li>
                <li className="list-group-item descriptionContent">{ description }</li>
            </ul>
            <div className="card-body">
                <div className='row RowMargin'>
                    <div className='col-7'>
                        <p className="card-link"><b>Price:</b> &nbsp; { price }</p>
                    </div>
                    <div className='col-5'>
                        <p className="card-link"><b>Stock:</b> &nbsp; { stock }</p>
                    </div>
                </div>
            </div>
            <div className="Cardfooter">
                {
                    quantityAdd > 0 ? (  <Link to='/cart' style={{textDecoration:'none'}}>
                                            <button type="button" className="btn btn-sm btn-success w-100" style={{borderRadius:'0'}}>Finalizar compra</button>
                                        </Link>
                                      )
                        :
                    <ItemCount initial={ 1 } stock={ stock } onAdd={ handleQuantity } />
                }
            </div>
        </div>
    </>
  )
}

export default ItemDetail