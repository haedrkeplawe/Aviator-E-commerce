import image_1 from "../../image/download_15.jpg"
import image_2 from "../../image/cart-1.jpg"
import image_3 from "../../image/download_12.jpg"

export const Cart = () => {
    return (
        <div className="cart-page">
            <div className="contact-main">
                <div className="title-main">
                    <h1>Cart</h1>
                    <p>Home <span>/</span> cart</p>
                </div>
            </div>
            <section className="item">
                <ul>
                    <li className="head">
                        <span>Item Name</span><span>Item Price</span><span>Actions</span>
                    </li>
                    <li>
                        <span><img src={image_1} alt="" />
                            <span>Sunglass</span></span>
                        <span>$200.00</span><span className="remove">Remove</span>
                    </li>
                    <li>
                        <span><img src={image_2} alt="" /> <span>Airspace</span></span>
                        <span>$200.00</span><span className="remove">Remove</span>
                    </li>
                    <li>
                        <span>
                            <img src={image_3} alt="" />
                            <span>Bingo</span></span>
                        <span>$200.00</span>
                        <span className="remove">Remove</span>
                    </li>
                </ul>
            </section>
        </div>
    )
}