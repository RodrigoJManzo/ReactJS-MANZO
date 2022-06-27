import {React, useState, useEffetct, useContext} from 'react';
import { CartContext } from './contexts/cartContext';
import ItemCounter from './itemCount';




function Item ({item}) {

    const {id, nombre, modelo, precio, categoria, stock, picureURL} = item;

    const {AddToCart} = useContext(CartContext)

    const onAdd = (cantidad) =>{

        AddToCart (item, cantidad);

    }

    return(

        <div className='row'>

      <div className='col-md-6'>

        <img src= {picureURL}  alt="" className='w-100' />

      </div>

      <div className='col-md-6'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio}</h3>
        <h4>Modelo: {modelo}</h4>
        <h5>ID: {id}</h5>
        <>
        <ItemCounter stock={stock} initial = {1} onAdd = {onAdd}  />
        </>
      </div>

    </div>

    )
}


export default Item