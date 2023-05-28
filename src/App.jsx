//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import { HeaderNav } from './components/HeaderNav'
import { ItemListContainer } from './components/ItemListContainer';
import { ItemCount } from './components/itemCount/ItemCount';


function App() {
  return (
    <>
      <HeaderNav/>
      <ItemListContainer greeting={'Lorem Ipsum'} />
      <ItemCount initial={0} stock={10}/>
    </>
  )
}

export default App
