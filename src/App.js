
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import NavBar from './navbar';
import ItemDetailContainer from './ItemDetailContainer';
import CartWidget from './cartWidget';





function App (){
   console.log('prueba de reinicio')
  

  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/Cart" element={<CartWidget/>}/>

      <Route path="*" element={<Navigate to= '/'/>}/>

      </Routes>
    </BrowserRouter>
    
  )
}
export default App