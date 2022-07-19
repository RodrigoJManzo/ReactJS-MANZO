import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children} ) => {

    const [cart, setCart] = useState([])
    

    const AddToCart = (item, cantidad) => {

        const IsInCart = (id) => {
            return (cart && cart.some((i) => i.item.id === id));
            };

         if(IsInCart(item.id)){
             alert("El producto ya esta en el carro")
            }else{
            setCart([
                ...cart, {item}   
            ])
            console.log('se agrego el producto correctamente')       
        }    
    }

    const DelProducto =  (id) => {
        const filtrado = cart.filter((producto) => producto.id !== id)
        setCart(filtrado)
       
    };
  
    const IconCart = () => {
        return (cart.reduce((acum, i)=> acum + i.item.cantidad, 0))
        
    };
    console.log(cart)
    console.log(IconCart())
    
    const PriceTotal = () => {
        return (cart.reduce((acum, i) => acum + i.item.cantidad * i.item.precio, 0))
    };
    const VaciarCarrito = () => {

        setCart([])

    }

    return(
        <CartContext.Provider 
             value={{cart, AddToCart, IconCart, PriceTotal, DelProducto, VaciarCarrito }}
        >
            {children}
        </CartContext.Provider>
    )
}

