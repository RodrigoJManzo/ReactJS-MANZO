import { useState } from "react";
import { Link } from "react-router-dom";
import Intercambio from "./intercambio";

function ItemCounter ({stock, initial, onAdd}){
    const [cont, addCount] = useState(initial)
    
    function Agregar(){
        if(cont < stock){
            addCount(cont + 1)
        }        
    }

    function Restar(){
        if(cont > initial){
            addCount(cont - 1)       

    }}
    

    return(
        <div className="itemCartAdd">
            <p className="counterTitle" >AGRGAR ITEMS</p>
            <div className="counter">
                <button className="addRemove" onClick={Agregar} > + </button>
                <p className="counterValue" >{cont}</p>
                <button className="addRemove" onClick={Restar} > - </button>
            </div>
            <div>
                <Intercambio/>
            </div>
        </div>
    )

}

export default ItemCounter