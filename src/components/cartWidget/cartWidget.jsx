import icoCart from '../images/shoppCart.png'

function CartWidget(){
    return(
        <a href="">
            <i>
                <img className="imageCart" src={icoCart} alt="icono del Shopping Cart" />
            </i>
        </a>
    )
}

export default CartWidget