export const CardWidget = () => {
  return (

    <button type="button" className="btn btn-dark btn-sm position-relative">
        <img src='/src/assets/carritoCompra.png' width={20} height={20} />&nbsp;
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
            <span className="visually-hidden">Notificaciones sin leer</span>
        </span>
    </button>
  );
}