import "./Navbar.scss"

import logo from "../../Assets/logo.png"
import cart_icon from "../../Assets/cart_icon.png"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
    const [menu, setMenu] = useState('shop');

    const { getTotalCount } = useContext(ShopContext);

    return (
        <div className="navbar">
            <Link to={'/'}>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <h2>SHOPPER</h2>
                </div>
            </Link>

            <ul className="nav-menu">
                <Link to='/'>
                    <li onClick={() => setMenu('shop')}>
                        Shop {menu === 'shop' ? <hr /> : null}
                    </li>
                </Link>
                <Link to={'/men'}>
                    <li onClick={() => setMenu('men')}>
                        Men {menu === 'men' ? <hr /> : null}
                    </li>
                </Link>
                <Link to={'/women'}>
                    <li onClick={() => setMenu('women')}>
                        Women {menu === 'women' ? <hr /> : null}
                    </li>
                </Link>
                <Link to={'/kids'}>
                    <li onClick={() => setMenu('kids')}>
                        Kids {menu === 'kids' ? <hr /> : null}
                    </li>
                </Link>
            </ul>

            <div className="nav-login-cart">
                <button><Link to={'/login'}>Login</Link></button>

                <div className="nav-cart">
                    <Link to={'/cart'}>
                        <img src={cart_icon} alt="" width={'30px'} />
                        <div className="nav-cart-count">{getTotalCount()}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}