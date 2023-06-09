//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Cart from './components/Cart/Cart';
import { HeaderNav } from './components/HeaderNav'
import { CartProvider } from './context/CartContext';
import Checkout from './components/checkout/Checkout';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { NotificationProvider } from './components/notification/NotificationService';

//Package
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <HeaderNav/>
            <Routes>
              <Route path='/' element={ <ItemListContainer />  } />
              <Route path='/category/:categoryId' element={  <ItemListContainer greeting={"Listado de productos"} /> } />
              <Route path='/item/:itemId' element={ <ItemDetailContainer greeting={"Listado de productos filtrados"} />  } />
              <Route path='/cart' element={ <Cart/> } />
              <Route path='/checkout' element={ <Checkout/> } />
              <Route path='*' element={ <h2>404 NOT FOUND</h2>} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
