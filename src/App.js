
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import NavBar from './navbar';
import ItemDetailContainer from './ItemDetailContainer';
import CartWidget from './cartWidget';
import { CartContext, CartContextProvider } from './contexts/cartContext';
import Carrito from './cart';





function App (){
   console.log('prueba de reinicio')
  

  return(
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Cart" element={<Carrito/>}/>

        <Route path="*" element={<Navigate to= '/'/>}/>

        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    
    
  )
}
export default App