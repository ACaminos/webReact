//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import { HeaderNav } from './components/HeaderNav'
import { ItemListContainer } from './components/ItemListContainer';
import { ItemCount } from './components/itemCount/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNav/>
        <Routes>
          <Route path='/' element={ <ItemListContainer />  } />
          <Route path='/category/:categoryId' element={  <ItemListContainer /> } />
          <Route path='/item/:itemId' element={ <ItemDetailContainer />  } />
          <Route path='*' element={ <h2>404 NOT FOUND</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
