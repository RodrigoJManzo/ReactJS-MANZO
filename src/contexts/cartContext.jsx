import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children} ) => {

    const [cart, setCart] = useState([])

    const AddToCart = (item, cantidad) => {

        //if(IsInCart(item.id)){
           // alert("El producto ya esta en el carro")
        //}else{
            setCart([
                ...cart, 
                {item, cantidad}])
                console.log('se agrego el producto correctamente')
        //}    
    }

    // const DelItem = (id) => {
    //     const items = cart.filter((productos)=> productos.item.id !== id)
    //     setCart(items)
    //     return
    //   }
    
    // const IconCart = () => {
    //     return cart.reduce((acum, i)=> acum + i.cantidad, 0)
    //   }
    
    // const PriceTotal = () => {
    //     return cart.reduce((acum, i) => acum + i.cantidad * i.item.price, 0)
    //   }
    
    
    // const IsInCart = (id) => {
    //     return cart && cart.some((i) => i.item.id === id);
    //   };
    
    const vaciarCarrito = () => {

        setCart([])

    }

    return(
        <CartContext.Provider 
            value={{
                cart,
                AddToCart,
                vaciarCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    )
}