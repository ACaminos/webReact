//Components
import { useCart } from "../context/CartContext";

//Package
import { Link } from "react-router-dom";

export const CardWidget = () => {
  const { totalQuantity } = useCart()
  console.log(totalQuantity, 'total quantityy')

  return (
    <Link to='/cart' style={ { display: totalQuantity > 0 ? 'block' : 'none' } }>
      <button type="button" className="btn btn-dark btn-sm position-relative">
          <img src='/src/assets/carritoCompra.png' width={20} height={20} />&nbsp;
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalQuantity}
              <span className="visually-hidden">Productos en carrito</span>
          </span>
      </button>
    </Link>
  );
}