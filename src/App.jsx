//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import { HeaderNav } from './components/HeaderNav'
import { ItemListContainer } from './components/ItemListContainer';


function App() {
  return (
    <>
      <HeaderNav/>
      <ItemListContainer greeting={'Lorem Ipsum'} />
    </>
  )
}

export default App
