import {React, useContext} from 'react';
import { CartContext } from './contexts/cartContext';
import ItemCounter from './itemCount';




function Item ({item}) {

    const {id, nombre, modelo, precio, categoria, stock, pictureURL} = item;

    const {cart, AddToCart} = useContext(CartContext)

    const onAdd = (cantidad) =>{
      console.log(cantidad)

        AddToCart ({...item ,cantidad: cantidad});
    }
    return(

        <div className='row'>

      <div className='col-md-6'>

        <img src= {pictureURL}  alt="" className='w-100' />

      </div>

      <div className='col-md-6'>
        <ul>
          <li><p><strong>Nombre:</strong> {nombre} </p>   </li>
          <li><p><strong>Categoría:</strong>{categoria}</p>  </li>
          <li><p><strong>Precio:</strong>{precio}</p>  </li>
          <li><p><strong>Modelo:</strong> {modelo}</p> </li>
          <li><p><strong>ID:</strong>{id}</p>  </li>
        </ul>
        <>
        <ItemCounter stock={stock} initial = {1} onAdd = {onAdd}  />
        </>
      </div>

    </div>

    )
}


export default Item