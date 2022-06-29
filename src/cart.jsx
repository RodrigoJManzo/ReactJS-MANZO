import {useCartContext } from "./contexts/cartContext"
import { Link } from "react-router-dom";




const Carrito = () => {
    const{cart, IconCart, PriceTotal, DelProducto, VaciarCarrito} = useCartContext();

        if (cart.length < 1) {
            return(
            
            <>
            <p>EL CARRITO ESTA VACIO</p>
                
                <Link to = '/'>
                    <button>Sigue Comprando! </button>
                </Link> 
                
            </>
                
            )
            
        }else{
            return(
                <>
                    <div className="w-50">
                        <ul>
                            {cart.map((item) => <li  key={item.id}>
                                <img className="w-25" src={item.pictureURL} alt="" />
                                <spacer>--</spacer>
                                Nombre: {item.nombre}
                                <spacer>--</spacer>
                                Precio :{item.precio}
                                <spacer>--</spacer>
                                Cantidad : {item.cantidad}
                                <spacer>--</spacer>
                                <button onClick={DelProducto}>Eliminar Producto</button>
                                </li> )}
                        </ul>
                        <div>
                            <button onClick={VaciarCarrito} >VACIAR CARRITO</button>
                             <p>El precio de los Productos a comprar es US$ {PriceTotal}</p>
                            {IconCart() <= 1 ? <p></p> : <p>La cantidad de objetos en el Carrito es {IconCart()}</p>}
                        </div>
                    </div>

                </>
            )
            
        }

        
    
}

export default Carrito