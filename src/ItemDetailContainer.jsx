import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {ItemSingle} from './items'
import {useParams} from 'react-router-dom'
import Item from './itemDetail'

const ItemDetailContainer = () => {

  const [productos, setProductos] = useState({})
  
  const [loading, setLoading] = useState(true)

  const {id} = useParams()
 

  useEffect(()=>{
    if (id) {
      ItemSingle()
      .then((resp)=>{setProductos(resp.find(productos=>productos.id === id))})
      .catch((err)=>console.log(err))
      .finally(()=>setLoading(false))
    } else {
      ItemSingle()
      .then((resp)=>{setProductos(resp)})
      .catch((err)=>console.log(err))
      .finally(()=>setLoading(false))

    }
    
  }, [])

    
  return ( 

    <div>
        {loading ? <h2>CARGANDO.... !!</h2> : <Item item={productos}/>}

    </div>

  )
}

export default ItemDetailContainer