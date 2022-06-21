import icoCart from './components/images/shoppCart.png'
import {Link, NavLink} from 'react-router-dom'

function CartWidget(){
    return(
        <Link to='/Cart'>
            <i>
                <img className="imageCart" src={icoCart} alt="icono del Shopping Cart" />
            </i>
        </Link>
    )
}

export default CartWidget