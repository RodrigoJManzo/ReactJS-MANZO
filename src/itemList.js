import { useEffect, useState } from "react";
import { Item } from "./items";
import { ItemSingle } from "./items";
import {Link, NavLink} from 'react-router-dom'
import {useParams} from 'react-router-dom'


export const ItemList = () =>{

    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams()
    console.log(categoriaId)

    useEffect(()=>{
        if (categoriaId) {
            Item ()
            .then((resp)=>{
                    setProductos(resp.filter(productos=>productos.categoria === categoriaId))
            })
            .catch(err=> console.log(err))
            .finally(()=>console.log()) 
        } else {
            Item ()
            .then((resp)=>{
                    setProductos(resp)
            })
            .catch(err=> console.log(err))
            .finally(()=>console.log()) 
        }
        
    }, [categoriaId])

    return(

        <div className="container d-flex justify-content-center mt-50 mb-50">
            <div className="row">
            {[productos.map(producto => 
                        
                        <div className="col-md-4 mt-2">
                            
                                
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-img-actions">
                                                            
                                            <img src={producto.picureURL} className="card-img img-fluid" width="96" height="350" alt=""></img>
                                                            
                                                        
                                        </div>
                                        </div>
                
                                            <div className="card-body bg-light text-center">
                                                <div className="mb-2">
                                                    <h6 className="font-weight-semibold mb-2">
                                                        <Link to={`/detail/${producto.id}`} className="text-default mb-2" data-abc="true">{producto.nombre}</Link>
                                                    </h6>
                
                                                         <Link to={`/categoria/${producto.categoria}`} className="text-muted" data-abc="true">{producto.categoria}</Link>
                                                </div>
                
                                                <h3 className="mb-0 font-weight-semibold">{producto.precio}</h3>
                
                                                <div>
                                                    <i className="fa fa-star star"></i>
                                                    <i className="fa fa-star star"></i>
                                                    <i className="fa fa-star star"></i>
                                                    <i className="fa fa-star star"></i>
                                                </div>
                
                                                <div className="text-muted mb-3">{producto.modelo}</div>
                
                                                <button type="button" onClick={ItemSingle} className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                
                                                        
                                            </div>
                                        </div>                   
                        </div> 
    
                )]}
            </div>
            
        </div>
    )

}

