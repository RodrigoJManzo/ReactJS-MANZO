
import './App.css';
import Body from './components/body';
import ItemListContainer from './components/componentsContainer/ItemListContainer';
import NavBar from './components/navbar';




function App (){
  console.log('cuerpo')
  

  return(
    <>
    <NavBar/>
    <ItemListContainer/>
    <Body/> //es el body de la app de react que no lo he borrado aun
    </>
    
  )
}
export default App