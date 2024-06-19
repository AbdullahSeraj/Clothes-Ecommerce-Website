import { Link } from "react-router-dom";
import "./css/Login.scss"

export default function Login() {
    return (
        <div className="login-page">
            <div className="login">
                <h2>Login</h2>
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <input type="submit" />
                <p>Create an account? <Link to='/signup'>Click here</Link></p>
                <div className="checkbox">
                    <input type="checkbox" id="policy" />
                    <label htmlFor="policy">By Coutinuing, i agree to the terms of use & privacy policy</label>
                </div>
            </div>
        </div>
    )
}