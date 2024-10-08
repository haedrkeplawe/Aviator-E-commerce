import { Link } from "react-router-dom"
import Image from "../image/logo.png"

export const Login = () => {
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
                <button type="submit">LOGIN</button>
                <p>New in this site ? <Link to="/signin" >Create New Account</Link></p>
            </form>
        </div>
    )
}