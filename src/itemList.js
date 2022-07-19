import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


export const ItemList = () =>{

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()
    //console.log(categoriaId)

        useEffect(() => {
            if(categoriaId){
                    const db = getFirestore()
                    const queryCollection = collection(db, "productos")
                    const queryCollectionFilter = query(queryCollection, where('categoria','==', categoriaId))
                    getDocs(queryCollectionFilter)
                    .then (resp =>setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}) )))
                    .catch (err => console.log(err))
                    .finally(()=>setLoading(false))
                 }  
                 else {
                    const db = getFirestore()
                    const queryCollection = collection(db, "productos")
                    getDocs(queryCollection)
                    .then (resp =>setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}) )))
                    .catch (err => console.log(err))
                    .finally(()=>setLoading(false))
                }}, [categoriaId])

    console.log(productos)


     if (loading === true){
         return(
             <>
               <h2 className="loadingText text-center">CARGANDO PRODUCTOS!......</h2>  
             </>
         )
     }else{
         return(

             <div className="listaObjetos container d-flex justify-content-center mt-50 mb-50">
                 <div className="row">
                 {[productos.map(producto => 
                            
                             <div className="col-md-4 mt-2">
                                     <div className="card">
                                         <div className="card-body">
                                             <div className="card-img-actions">
                                                                
                                                 <img src={producto.pictureURL} className="card-img img-fluid" width="50" alt=""></img>
                                                                
                                                            
                                             </div>
                                             </div>
                    
                                                 <div className="card-body bg-light text-center">
                                                     <div className="mb-2">
                                                         <h6  className="font-weight-semibold mb-2">
                                                             <Link to={`/detail/${producto.id}`} className="text-default mb-2" data-abc="true">{producto.nombre}</Link>
                                                         </h6>
                    
                                                              <Link to={`/categoria/${producto.categoria}`} className="text-muted" data-abc="true">{producto.categoria}</Link>
                                                     </div>
                    
                                                     <h3 className="mb-0 font-weight-semibold"> US$ {producto.precio}</h3>
                    
                                                     <div className="text-muted mb-3">{producto.modelo}</div>
                                                            
                                                 </div>
                                             </div>                   
                             </div> 
        
                     )]}
                 </div>
                
             </div>
            
            
         )
     }
   

}

