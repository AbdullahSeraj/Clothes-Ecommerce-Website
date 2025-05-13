import "./Footer.scss"
import instagram_icon from "../../Assets/instagram_icon.png"
import pintester_icon from "../../Assets/pintester_icon.png"
import whatsapp_icon from "../../Assets/whatsapp_icon.png"

import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <Link to={'/'}>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <h2>SHOPPER</h2>
                </div>
            </Link>

            <ul className="nav-menu">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="icons">
                <img src={instagram_icon} alt="" />
                <img src={pintester_icon} alt="" />
                <img src={whatsapp_icon} alt="" />
            </div>

            <div className="footer-copyright">
                {/* <p>Copyright @ 2024 - All Right Reserved | <span><a href="https://serajs.com" target="_blank">SERAJS.COM</a></span></p> */}
                <p>Copyright @ 2024 - All Right Reserved | <span>Eiad Arja</span></p>
            </div>
        </div>
    )
}