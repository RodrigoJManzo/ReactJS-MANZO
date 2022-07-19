import {useCartContext } from "./contexts/cartContext"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";




const Carrito = () => {
    const{cart, IconCart, PriceTotal, DelProducto, VaciarCarrito} = useCartContext();

    

    async function generarOrden(e){
        e.preventDefault()
        let order = {};

        order.buyer = {name:"" , email: "" , direccion: "" }
        order.total = PriceTotal()

        order.items = cart.map(cartItem => {
            const id = cartItem.item.id
            const nombre = cartItem.item.nombre
            const precio = cartItem.item.precio  * cartItem.item.cantidad
            return{id, nombre, precio}
        })

        const db = getFirestore()

        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then (resp => alert(`su numero de compra es ${resp.id} por $ ${PriceTotal()}`))
        .catch(err=>console.log(err))
        .finally(VaciarCarrito())

    }

    let agregados = IconCart()
        if (cart.length < 1) {
            return(
            
            <>
            <div className="carroVacio">
                <p className="loadingText">EL CARRITO ESTA VACIO</p>
                
                <Link to = '/'>
                    <button className="btn btn-warning">Sigue Comprando! </button>
                </Link> 
            </div>
   
            </>
                
            )
            
        }else{
            return(
                <>
                    <div className="carrito container w-90">
                        <table className="table tablaCarrito">
                            <thead>
                                <tr>
                                <th scope="col">Imagen</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">US$</th>
                                <th scope="col">Eliminar Item</th>
                                </tr>
                            </thead>
                            <tbody>
                            {cart.map((e) => (
                                <tr key={e.item.id}>
                                <th scope="row"><img className="fotoTabla" src={e.item.pictureURL} alt="" /></th>
                                <td>{e.item.nombre}</td>
                                <td>{e.item.cantidad}</td>
                                <td>{e.item.precio}</td>
                                <td><button className="btn btn-outline-danger" onClick={()=>DelProducto(e.item.key)}>Eliminar Producto</button></td>
                                </tr>))}
                            </tbody>
                        </table>


                
                        <div className="container w-90">
                            <table className="resumenCarro table">
                                
                                <tr>
                                    <th>
                                        {agregados <= 1 ? <p></p> : <p>La cantidad de objetos en el Carrito es {agregados}</p>}
                                    </th>
                                </tr>

                                <tr>
                                    <th scope="col"><p>El precio de los Productos a comprar es US$ {PriceTotal()}</p></th>
                                    <th scope="col"><button className="btn btn-outline-danger" onClick={VaciarCarrito} >VACIAR CARRITO</button></th>
                                </tr>
                                
                                <tr>
                                    
                                    <th>
                                        <button className="btn btn-outline-primary" onClick={generarOrden}>Terminar Compra</button>
                                    </th>
                                    <th>
                                        <Link to='/'>
                                            <button  className="btn btn-outline-success">Seguir de Compras!</button>
                                        </Link>
                                    </th>
                                </tr>
                            </table>
  
                        </div>
                        
                    </div>

                </>
            )
            
        }

        
    
}

export default Carrito