import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCounter ({stock, initial, onAdd}){
    const [cantidad, setCantidad] = useState(initial)

    
    function Agregar(){
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }        
    }

    function Restar(){
        if(cantidad > initial){
            setCantidad(cantidad - 1)       

    }}

    const[inputType, setInputType] = useState('button')

    const addProduct = () => {
        onAdd(cantidad)
        console.log(`Has agregado ${cantidad} items a tu carrito`)
        setInputType('input')
    } 
    

    if(inputType === "button"){
        return(
    
            <>
                <div className="itemCartAdd">
                        <p className="counterTitle" >AGRGAR ITEMS</p>
                    <div className="counter">
                        <button className="addRemove" onClick={Agregar} > + </button>
                        <p className="counterValue" >{cantidad}</p>
                        <button className="addRemove" onClick={Restar} > - </button>
                    </div>
                    <div>
                        <button className="addCart" onClick={addProduct} >Agregar al Carrito</button>
                    </div>
                </div>
                
            </>
            

        )
    }          
        
    if( inputType === 'input' ){
        return(
            <>
                <Link to ='/cart'>
                    <button
                        className=''
                        onClick={()=>console.log('yendo al cart')}>
                        IR AL CARRITO o TERMINAR COMPRA
                    </button>
                </Link>
                <Link to = '/'>
                    <button
                    onClick={()=>console.log('Siga Comprando dijo el Juez!')}>
                        SEGUIR COMPRANDO
                    </button>
                </Link>
          </>
        )
    }    
    
}

export default ItemCounter