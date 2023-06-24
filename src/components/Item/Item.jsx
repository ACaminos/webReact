//Components
import { Link, useNavigate } from "react-router-dom"
import { ItemCount } from "../itemCount/ItemCount"

//Styles
import './item.css'

const Item = ( { id, title, price, category, image, stock } ) => {
    // const navigate = useNavigate()

    return(
        <>
            <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <blockquote>{category}</blockquote>
                    <h6 className="card-title">{title}</h6>
                    <div className="row stockData">
                        <div className="col-6">
                            <p className="card-text" style={{textAlign:'left'}}>Stock: {stock}u</p>
                        </div>
                        <div className="col-6">
                            <p className="card-text" style={{textAlign:'right'}}>U$S {price}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/item/${id}`} className="btn btn-sm btn-primary">Ver detalle</Link>
            </div>
        </>
    )
}

export default Item