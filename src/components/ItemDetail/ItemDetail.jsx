import { ItemCount } from '../itemCount/ItemCount'

const ItemDetail = ({ id, title, price, category, description, image, stock }) => {
  return (
    <>
        <div className="card" style={{width:'18rem'}}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{category}</h5>
                <p className="card-text">{title}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Description</li>
                <li className="list-group-item">{description}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Price: &nbsp; {price}</a>
                <a href="#" className="card-link">Stock: &nbsp; {stock}</a>
            </div>
            <div className="card-footer text-muted">
                <ItemCount initial={1} stock={stock} />
            </div>
        </div>
    </>
  )
}

export default ItemDetail