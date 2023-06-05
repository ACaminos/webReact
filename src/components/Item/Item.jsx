//Components
import { ItemCount } from "../itemCount/ItemCount"

//Styles
import './item.css'

const Item = ( { title, price, description, image, stock } ) => {
    return(
        <>
            <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    {/* <p className="card-text">{description}</p> */}
                    <ItemCount initial={0} stock={stock} />
                </div>
            </div>
        </>
    )
}

export default Item