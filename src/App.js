
import './App.css';
import Body from './components/body';
import ItemListContainer from './components/componentsContainer/ItemListContainer';
import NavBar from './components/NavBar/navbar';





function App (){
   console.log('prueba de reinicio')
  

  return(
    <>
    <NavBar/>
    <ItemListContainer/>
    {/* <Body/> //es el body de la app de react que no lo he borrado aun */}
  
    </>
    
  )
}
export default App