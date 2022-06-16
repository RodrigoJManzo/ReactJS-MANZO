import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ItemSingle } from '../items/items'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})

  useEffect(()=>{
    ItemSingle()
      .then((resp)=>{setProducto(resp)})
      .catch((err)=>console.log(err))
  }, [])

    
  return ( 

    <div className='row'>

        <div className='col-md-6'>

          <img src= {producto.picureURL}  alt="" className='w-100' />

        </div>

        <div className='col-md-6'>
            <h2>Nombre: {producto.nombre} </h2>
            <h3>Precio: {producto.precio}</h3>
            <h4>Modelo: {producto.modelo}</h4>

        </div>

      </div>
  )
}

export default ItemDetailContainer