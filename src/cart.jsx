import {useCartContext } from "./contexts/cartContext"




const Cart = () => {
    const{} = useCartContext();

    return(
        <div className="w-50">
            <ul>
                {Cart.map(item => <li key={item.id}>
                    <img className="w-25" src={item.picure} alt="" />
                    Nombre: {item.name} 
                    Precio :{item.precio}
                    Catidad : {item.cantidad}
                    </li> )}
            </ul>
            <div>
                <button onClick={vaciarCarrito} >VACIAR CARRITO</button>
            </div>
        </div>
    )
}

export default Cart