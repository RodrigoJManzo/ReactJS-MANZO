import {useCartContext } from "./contexts/cartContext"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";




const Carrito = () => {
    const{cart, IconCart, PriceTotal, DelProducto, VaciarCarrito} = useCartContext();

    async function generarOrden(e){
        e.preventDefault()
        let order = {};

        order.buyer = {name:'', email: '' , phone: '' }
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

        // const queryCollectionStock = collection(db, 'productos')
        

        // const queryActualizarStock = await query(
        //     queryCollectionStock, 
        //     where(documentId(), 'in', cart.map(it =>it.id))
        // )

        // const batch = writeBatch(db)

        // await getDocs(queryActualizarStock)
        // .then(resp => resp.docs.forEach(res => batch.update(res.ref,{stock: res.data().stock - cart.find(item => item.id === res.id).cantidad})))
        // .finally(()=> console.log(VaciarCarrito()))

        // batch.commit()
    }

    let agregados = IconCart()
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
                            {cart.map((e) => (<li  key={e.item.id}>
                                <img className="w-25" src={e.item.pictureURL} alt="foto producto" />
                                
                                Nombre: {e.item.nombre}
                                
                                Precio :{e.item.precio}
                                
                                Cantidad : {e.item.cantidad}
                                
                                <button className="btn btn-outline-danger" onClick={()=>DelProducto(e.item.key)}>Eliminar Producto</button>
                                </li> ))}
                        </ul>
                        <div>
                            <button className="btn btn-outline-danger" onClick={VaciarCarrito} >VACIAR CARRITO</button>
                             <p>El precio de los Productos a comprar es US$ {PriceTotal()}</p>
                            {agregados <= 1 ? <p></p> : <p>La cantidad de objetos en el Carrito es {agregados}</p>}
                        </div>
                        <div>
                            <button className="btn btn-outline-primary" onClick={generarOrden}>Terminar Compra</button>
                        </div>
                    </div>

                </>
            )
            
        }

        
    
}

export default Carrito