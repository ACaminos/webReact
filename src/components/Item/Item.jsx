//Components
import { Link } from "react-router-dom"
import { ItemCount } from "../itemCount/ItemCount"

//Styles
import './item.css'

const Item = ( { id, title, price, category, image, stock } ) => {
    return(
        <>
            <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <blockquote>{category}</blockquote>
                    <h6 className="card-title">{title}</h6>
                    <div className="row stockData">
                        <div className="col-6">
                            <p className="card-text" style={{textAlign:'left'}}>Stock disp: {stock}</p>
                        </div>
                        <div className="col-6">
                            <p className="card-text" style={{textAlign:'right'}}>U$S {price}</p>
                        </div>
                    </div>
                </div>
                {/* <button className="btn btn-sm btn-primary">Ver detalle</button> */}
                <Link to={`/item/${id}`} className="btn btn-sm btn-primary">Ver detalle</Link>
            </div>
        </>
    )
}

export default Item