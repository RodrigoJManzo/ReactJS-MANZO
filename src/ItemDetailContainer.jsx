import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {ItemSingle} from './items'
import ItemCounter from './itemCount'
import {useParams} from 'react-router-dom'
import Item from './itemDetail'

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

    <div>

        <Item item={productos}/>
        {console.log(id)}

    </div>

  )
}

export default ItemDetailContainer


