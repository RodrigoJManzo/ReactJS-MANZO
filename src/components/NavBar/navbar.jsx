import CartWidget from '../cartWidget/cartWidget'
import icoCart from '../images/shoppCart.png'
import {Link, NavLink} from 'react-router-dom'


export default function NavBar(){
    return(
        <header className="realHeader">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand" to="/">SUPERTEC</NavLink>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Tarjetas de Video</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Monitores</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Mothers</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Perifericos</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Procesadores</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Busqueda</button>
                        </form>
                    </div>
                </div>
                <CartWidget/>
            </nav>
          
        </header>
        
    )
}