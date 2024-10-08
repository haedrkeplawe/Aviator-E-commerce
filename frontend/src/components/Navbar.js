import img_1 from "../image/cart-1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCartShopping, faMagnifyingGlass, faAngleDown,
    faBars,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const Navbar = () => {
    const handelEvent = () => {
        let main_ul = document.querySelector("header nav ul")
        if (main_ul.className === "active") {
            main_ul.className = ""
        } else {
            main_ul.className = "active"
        }

    }
    return (
        <header>
            <div className="aviator">
                <p>0129- 12323-123123</p>
                <h2><a href="#">AVIATO</a></h2>
                <ul>
                    <div className="cart">
                        <li>
                            <FontAwesomeIcon icon={faCartShopping} />
                            Cart
                        </li>
                        <div className="products">
                            <div className="product">
                                <div>
                                    <img src={img_1} alt="" />
                                    <div className="info">
                                        <h5>Ladees Bag</h5>
                                        <h6>1+12500.00</h6>
                                        <p>$1200</p>
                                    </div>
                                </div>
                                <span className="delete">+</span>
                            </div>
                            <div className="product">
                                <div>
                                    <img src="./img/cart-2.jpg" alt="" />
                                    <div className="info">
                                        <h5>Ladees Bag</h5>
                                        <h6>1+12500.00</h6>
                                        <p>$1200</p>
                                    </div>
                                </div>
                                <span className="delete">+</span>
                            </div>
                            <div className="total">
                                <h4>Total</h4>
                                <h5>$1113.00</h5>
                            </div>
                            <div className="buttons">
                                <button>VIEW CART</button>
                                <button>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                    <div className="search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <li>Search</li>
                        <div><input type="text" placeholder="Search" /></div>
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </ul>
            </div>
            <nav>
                <div className="head">
                    <h2>Main Menu</h2>
                    <FontAwesomeIcon
                        onClick={() => handelEvent()}
                        icon={faBars} />
                </div>
                <ul>
                    <li><Link to="/">HOME </Link></li>
                    <div>
                        <li><a>SHOP</a><FontAwesomeIcon icon={faAngleDown} /></li>
                        <div className="ul">
                            <li><Link to="/dashboard">dashboard</Link></li>
                            <li><Link to="/product">product</Link></li>
                            <li><Link to="/shop">shop</Link></li>
                            <li><Link to="/cart">cart</Link></li>
                        </div>
                    </div>
                    <div>
                        <li><a>PAGES</a><FontAwesomeIcon icon={faAngleDown} /></li>
                        <div className="ul">
                            <li><Link to="/blog">blog</Link></li>

                            <li><Link to="/about-us">about-us</Link></li>
                            <li><Link to="/contact">contact</Link></li>
                        </div>
                    </div>
                    <div>
                        <li><a>LOGIN</a><FontAwesomeIcon icon={faAngleDown} /></li>
                        <div className="ul">
                            <li><Link to="/signin">signin</Link></li>
                            <li><Link to="/login">login</Link></li>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

