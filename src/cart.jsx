import {useCartContext } from "./contexts/cartContext"
import CartItem from "./cartItem";




const Carrito = () => {
    const{cart, producto, VaciarCarrito, PriceTotal, IconCart} = useCartContext();

        if (cart.length < 1) {
            return(
                <p>EL CARRITO ESTA VACIO</p>
            )
            
        }else{
            return(
                <>
                    <div className="w-50">
                        <ul>
                            {cart.map(CartItem => <li key={producto.id}>
                                <img className="w-25" src={producto.pictureURL} alt="" />
                                Nombre: {producto.nombre} 
                                Precio :{producto.precio}
                                Catidad : {producto.cantidad}
                                </li> )}
                        </ul>
                        <div>
                            <button onClick={VaciarCarrito} >VACIAR CARRITO</button>
                            <p>El precio de los Productos a comprar es {PriceTotal}</p>
                            {IconCart() < 1 ? <p></p> : <p>La cantidad de objetos en el Carrito es {IconCart()}</p>}
                        </div>
                    </div>

                </>
            )
            
        }

        
    
}

export default Carrito