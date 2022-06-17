
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/componentsContainer/ItemListContainer';
import NavBar from './components/NavBar/navbar';
import ItemDetailContainer from './components/componentsContainer/ItemDetailContainer';
import CartWidget from './components/cartWidget/cartWidget';





function App (){
   console.log('prueba de reinicio')
  

  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index path="/" element={<ItemListContainer/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/Cart" element={<CartWidget/>}/>

      <Route path="*" element={<Navigate to= '/'/>}/>

      </Routes>
    </BrowserRouter>
    
  )
}
export default App