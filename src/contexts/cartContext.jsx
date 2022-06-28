import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children} ) => {

const [cart, setCart] = useState([])

    const AddToCart = (producto, cantidad) => {

        if(IsInCart(producto.id)){
            alert("El producto ya esta en el carro")
        }else{
            setCart([
                ...cart, 
                {producto, cantidad}])
                console.log('se agrego el producto correctamente')
        }    
    }

     const Delproducto = (id) => {
         const productos = cart.filter((productos)=> productos.producto.id !== id)
         setCart(productos)
         
       }
    
     const IconCart = () => {
         return (cart.reduce((acum, i)=> acum + i.cantidad, 0))
       }
    
     const PriceTotal = () => {
         return (cart.reduce((acum, i) => acum + i.cantidad * i.producto.price, 0))
       }
    
    
     const IsInCart = (id) => {
         return (cart && cart.some((i) => i.producto.id === id));
       };
    
    const VaciarCarrito = () => {

        setCart([])

    }

    return(
        <CartContext.Provider 
            value={{AddToCart,VaciarCarrito, cart, Delproducto, PriceTotal, IconCart}}
        >
            {children}
        </CartContext.Provider>
    )
}