import image_1 from "../../image/blog-post-1.jpg"
import image_2 from "../../image/blog-post-2.jpg"
import image_3 from "../../image/blog-post-3.jpg"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour, faComment, faTShirt, faUser, } from "@fortawesome/free-solid-svg-icons"
export const Blog = () => {
    return (
        <div className="blog-page">
            <div className="contact-main">
                <div className="title-main">
                    <h1>Blog</h1>
                    <p>Home <span>/</span> blog</p>
                </div>
            </div>
            <div className="box">
                <div className="product">
                    <img src={image_1} alt="" />
                    <h3>How To Wear Bright Shoes</h3>
                    <ul>
                        <li>
                            <p><FontAwesomeIcon icon={faClockFour} /></p>
                            <p>20, MAR 2020</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faUser} /></p>
                            <p>POSTED BY ADMIN</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faTShirt} /></p>
                            <p>LIFESTYLE, TRAVEL, FASHION</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faComment} /></p>
                            <p>4 COMMENTS</p>
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                        vitae placeat ad architecto nostrum asperiores vel aperiam, veniam
                        eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque
                        veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Odio vitae ab doloremque accusamus sit, eos
                        dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quod, facere.
                    </p>
                    <Link className="btn" to="/blog-single">CONTENUE READING</Link>
                </div>
                <div className="product">
                    <img src={image_2} alt="" />
                    <h3>How To Wear Bright Shoes</h3>
                    <ul>
                        <li>
                            <p><FontAwesomeIcon icon={faClockFour} /></p>
                            <p>20, MAR 2021</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faUser} /></p>
                            <p>POSTED BY ADMIN</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faTShirt} /></p>
                            <p>LIFESTYLE, TRAVEL, FASHION</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faComment} /></p>
                            <p>4 COMMENTS</p>
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                        vitae placeat ad architecto nostrum asperiores vel aperiam, veniam
                        eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque
                        veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Odio vitae ab doloremque accusamus sit, eos
                        dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quod, facere.
                    </p>
                    <Link className="btn" to="/blog-single">CONTENUE READING</Link>
                </div>
                <div className="product">
                    <img src={image_3} alt="" />
                    <h3>How To Wear Bright Shoes</h3>
                    <ul>
                        <li>
                            <p><FontAwesomeIcon icon={faClockFour} /></p>
                            <p>20, MAR 2017</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faUser} /></p>
                            <p>POSTED BY ADMIN</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faTShirt} /></p>
                            <p>LIFESTYLE, TRAVEL, FASHION</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faComment} /></p>
                            <p>4 COMMENTS</p>
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                        vitae placeat ad architecto nostrum asperiores vel aperiam, veniam
                        eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque
                        veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Odio vitae ab doloremque accusamus sit, eos
                        dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quod, facere.
                    </p>
                    <Link className="btn" to="/blog-single">CONTENUE READING</Link>
                </div>
                <div className="product">
                    <img src={image_1} alt="" />
                    <h3>How To Wear Bright Shoes</h3>
                    <ul>
                        <li>
                            <p><FontAwesomeIcon icon={faClockFour} /></p>
                            <p>20, MAR 2025</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faUser} /></p>
                            <p>POSTED BY ADMIN</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faTShirt} /></p>
                            <p>LIFESTYLE, TRAVEL, FASHION</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faComment} /></p>
                            <p>4 COMMENTS</p>
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                        vitae placeat ad architecto nostrum asperiores vel aperiam, veniam
                        eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque
                        veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Odio vitae ab doloremque accusamus sit, eos
                        dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quod, facere.
                    </p>
                    <Link className="btn" to="/blog-single">CONTENUE READING</Link>
                </div>
            </div>
        </div>
    )
}