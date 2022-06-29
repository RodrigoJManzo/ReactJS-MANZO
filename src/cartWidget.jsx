import icoCart from './components/images/shoppCart.png'
import {Link} from 'react-router-dom'
import { CartContext } from './contexts/cartContext'
import { useContext } from 'react'

const CartWidget = () => {

    const {IconCart} = useContext(CartContext)

    return(
        <>
            <Link to='/Cart'>
                <i>
                    <img className="imageCart" src={icoCart} alt="icono del Shopping Cart" />
                </i>
            </Link>
            <div className=''>
                <p className = " cartIco " >{IconCart()}</p>
            </div>
        </>
    )
}

export default CartWidget