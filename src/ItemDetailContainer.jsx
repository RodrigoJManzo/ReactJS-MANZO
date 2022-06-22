import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {ItemSingle} from './items'
import ItemCounter from './itemCount'
import {Link, useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

  const [productos, setProductos] = useState({})

  const {id} = useParams()

  useEffect(()=>{
    if (id) {
      ItemSingle()
      .then((resp)=>{setProductos(resp.find(productos=>productos.id === id))})
      .catch((err)=>console.log(err))
    } else {
      ItemSingle()
      .then((resp)=>{setProductos(resp)})
      .catch((err)=>console.log(err))
    }
    
  }, [])

    
  return ( 

    <div className='row'>

      <div className='col-md-6'>

        <img src= {productos.picureURL}  alt="" className='w-100' />

      </div>

      <div className='col-md-6'>
        <h2>Nombre: {productos.nombre} </h2>
        <h3>Precio: {productos.precio}</h3>
        <h4>Modelo: {productos.modelo}</h4>
        <>
        <ItemCounter stock={productos.stock} initial = {1} />
        </>
      </div>

    </div>
  )
}

export default ItemDetailContainer


