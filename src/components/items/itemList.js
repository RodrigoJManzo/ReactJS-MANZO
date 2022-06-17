import { useEffect, useState } from "react";
import { Item } from "./items";
import { ItemSingle } from "./items";
import {Link, NavLink} from 'react-router-dom'


export const ItemList = () =>{

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        Item ()
            .then((resp)=>{
                    setProductos(resp)
            })
            .catch(err=> console.log(err))
            .finally(()=>console.log())
    }, [])

    return(

        <div className="container d-flex justify-content-center mt-50 mb-50">
            <div className="row">
            {[productos.map(producto => 
                        
                        <div class="col-md-4 mt-2">
                            
                                
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-img-actions">
                                                            
                                            <img src={producto.picureURL} class="card-img img-fluid" width="96" height="350" alt=""></img>
                                                            
                                                        
                                        </div>
                                        </div>
                
                                            <div class="card-body bg-light text-center">
                                                <div class="mb-2">
                                                    <h6 class="font-weight-semibold mb-2">
                                                        <Link to={`/detail/${producto.id}`} class="text-default mb-2" data-abc="true">{producto.nombre}</Link>
                                                    </h6>
                
                                                         <a href="#" class="text-muted" data-abc="true">{producto.categoria}</a>
                                                </div>
                
                                                <h3 class="mb-0 font-weight-semibold">{producto.precio}</h3>
                
                                                <div>
                                                    <i class="fa fa-star star"></i>
                                                    <i class="fa fa-star star"></i>
                                                    <i class="fa fa-star star"></i>
                                                    <i class="fa fa-star star"></i>
                                                </div>
                
                                                <div class="text-muted mb-3">{producto.modelo}</div>
                
                                                <button type="button" onClick={ItemSingle} class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
                
                                                        
                                            </div>
                                        </div>                   
                        </div> 
    
                )]}
            </div>
            
        </div>
    )

}

