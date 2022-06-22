import { useState } from "react";
import { Link } from "react-router-dom";

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
    
    const Intercambio = () =>{
  
        const[inputType, setInputTipe] = useState('button')
        
        const ButtonAdd = ()=>{

            function onAdd(){
                console.log(`Has agregado ${cont} items a tu carrito`)
                setInputTipe('input')
            }
            return(
    
                <>
                    <button className="addCart" onClick={onAdd} >Agregar al Carrito</button>
                </>
    
            )
        }
        
        const InputCount = () =>{
        return(
          <>
                <Link to='/cart'>
                    <button
                        className=''
                        onClick={()=>console.log('yendo al cart')}>
                        IR AL CARRITO o TERMINAR COMPRA
                    </button>
                </Link>
          </>
            )
        }
       
        return(
            inputType == 'button' ? <ButtonAdd/> : <InputCount/> 
        )
    
    }

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