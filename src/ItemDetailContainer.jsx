import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {ItemSingle} from './items'
import {useParams} from 'react-router-dom'
import Item from './itemDetail'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  
  const [loading, setLoading] = useState(true)

  const {id} = useParams()
 
  useEffect(() => {
    const db = getFirestore()
    const queryItem = doc(db, "productos", id)
    getDoc(queryItem)
      .then(resp=> setProducto({id: resp.id, ...resp.data()}))
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
  }, [])

    
  return ( 

    <div>
        {loading ? <h2 className='loadingText text-center'>CARGANDO.... !!</h2> : <Item item={producto}/>}

    </div>

  )
}

export default ItemDetailContainer