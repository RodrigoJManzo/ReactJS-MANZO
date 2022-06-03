import { useState } from "react";

function ItemCounter ({stock, initial, onAdd}){
    const [cont, addCount] = useState(initial)
    
    function Agregar(){
        if(cont < stock){
            addCount(cont + 1)
        }else{
            addCount(cont = stock)
        }
        
    }

    function Restar(){
        if(cont > 0){
            addCount(cont - 1)
        }else{
            addCount(cont = initial)
        }
        

    }
    
    function onAdd(){
        console.log(`Has agregado ${cont} items a tu carrito`)
    
    }
    return(
        <div className="itemCartAdd">
            <p className="counterTitle" >AGRGAR ITEMS</p>
            <div className="counter">
                <button className="addRemove" onClick={Agregar} > + </button>
                <p className="counterValue" >{cont}</p>
                <button className="addRemove" onClick={Restar} > - </button>
            </div>
            <button className="addCart" onClick={onAdd} >Agregar al Carrito</button>
            
        </div>
    )

}

export default ItemCounter