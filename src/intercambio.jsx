import { useState } from "react"
import { Link } from "react-router-dom"



const Intercambio = () =>{
  
    const[inputType, setInputType] = useState('button')
    
    const ButtonAdd = ()=>{

        function onAdd(){
            //console.log(`Has agregado ${cont} items a tu carrito`)
            console.log('has agregado elementos al carrito')
            setInputType('input')
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
