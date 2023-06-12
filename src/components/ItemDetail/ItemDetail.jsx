import { ItemCount } from '../itemCount/ItemCount'

const ItemDetail = ({ id, title, price, category, description, image, stock }) => {
  return (
    <>
        <div className="card" style={{width:'18rem'}}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h4 className="card-title">{category}</h4>
                <h6 className="card-text" style={{textAlign:'left',}}>{title}</h6>
            </div>
            <ul className="list-group list-group-flush" style={{padding:'0px 10px 0px 10px'}}>
                <li className="list-group-item" style={{fontWeight:'bold'}}>Description</li>
                <li className="list-group-item">{description}</li>
            </ul>
            <div className="card-body">
                <div className='row' style={{marginBottom:'10px'}}>
                    <div className='col-7'>
                        <p className="card-link"><b>Price:</b> &nbsp; {price}</p>
                    </div>
                    <div className='col-5'>
                        <p className="card-link"><b>Stock:</b> &nbsp; {stock}</p>
                    </div>
                </div>
            </div>
            <div className="Cardfooter" style={{padding:'0px 0px 20px 0px'}}>
                <ItemCount initial={1} stock={stock} />
            </div>
        </div>
    </>
  )
}

export default ItemDetail