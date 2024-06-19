import { Link } from "react-router-dom"
import "./css/Signup.scss"

export default function Signup() {
    return (
        <div className="signup-page">
            <div className="signup">
                <h2>Sign Up</h2>
                <input type="type" placeholder="Enter Your Name" />
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Create password" />
                <input type="submit" />
                <p>For Login: <Link to='/login'>Click here</Link></p>
                <div className="checkbox">
                    <input type="checkbox" id="policy" />
                    <label htmlFor="policy">By Coutinuing, i agree to the terms of use & privacy policy</label>
                </div>
            </div>
        </div>
    )
}