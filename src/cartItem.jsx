import { useContext } from "react";
import {CartContext } from "./contexts/cartContext"

const CartItem = ({ item }) => {
  const { DelItem } = useContext(CartContext);
  const { Nombre, precio, id, pictureURL } = item;
  return (
    <div>
      <h4>{Nombre}</h4>
      <button onClick={() => DelItem(id)}>borrar item</button>
    </div>
  );
};

export default CartItem;