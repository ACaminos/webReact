//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import { HeaderNav } from './components/HeaderNav'
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNav/>
        <Routes>
          <Route path='/' element={ <ItemListContainer />  } />
          <Route path='/category/:categoryId' element={  <ItemListContainer greeting={"Listado de productos"} /> } />
          <Route path='/item/:itemId' element={ <ItemDetailContainer greeting={"Listado de productos filtrados"} />  } />
          <Route path='*' element={ <h2>404 NOT FOUND</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
