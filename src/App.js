
import './App.css';
import Body from './components/body';
import ItemListContainer from './components/componentsContainer/ItemListContainer';
import NavBar from './components/NavBar/navbar';
import ItemDetailContainer from './components/componentsContainer/ItemDetailContainer';





function App (){
   console.log('prueba de reinicio')
  

  return(
    <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
    
  )
}
export default App