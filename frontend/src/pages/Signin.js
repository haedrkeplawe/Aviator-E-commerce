import { Link } from "react-router-dom"
import Image from "../image/logo.png"

export const Signin = () => {
    return (
        <div className="login-page">
            <form>
                <img src={Image} alt="" />
                <h3>CREATE YOUR ACCOUNT</h3>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="UserName" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">SIGN IN</button>
                <p>Already hava an account ? <Link to="/login" >Login</Link></p>
            </form>
        </div>
    )
}