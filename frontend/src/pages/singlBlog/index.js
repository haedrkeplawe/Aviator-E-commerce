import image_01 from "../../image/facebook.svg"
import image_02 from "../../image/instagram.svg"
import image_03 from "../../image/twitter.svg"
import image_04 from "../../image/tiktok.svg"
import image_1 from "../../image/blog-post-1.jpg"
import image_2 from "../../image/avater-1.jpg"
import image_3 from "../../image/avater-4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour, faComment, faTShirt, faUser, } from "@fortawesome/free-solid-svg-icons"
export const SinglBlog = () => {
    return (
        <div className="blog-singel-page">
            <div className="contact-main">
                <div className="title-main">
                    <h1>Blog</h1>
                    <p>Home <span>/</span> blog</p>
                </div>
            </div>
            <div className="product">
                <img src={image_1} alt="" />
                <h3>How To Wear Bright Shoes</h3>
                <ul>
                    <li>
                        <p><FontAwesomeIcon icon={faUser} /> </p>
                        <p>20, MAR 2017</p>
                    </li>
                    <li>
                        <p><FontAwesomeIcon icon={faUser} /> </p>
                        <p>POSTED BY ADMIN</p>
                    </li>
                    <li>
                        <p><FontAwesomeIcon icon={faUser} /> </p>
                        <p>LIFESTYLE, TRAVEL, FASHION</p>
                    </li>
                    <li>
                        <p><FontAwesomeIcon icon={faUser} /> </p>
                        <p>4 COMMENTS</p>
                    </li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae
                    placeat ad architecto nostrum asperiores vel aperiam, veniam eum
                    nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam
                    fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odio vitae ab doloremque accusamus sit, eos dolorum officiis a
                    perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quod, facere.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores
                    vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto
                    quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit,
                    eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Quod, facere.Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Velit vitae placeat ad architecto
                    nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam,
                    adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque
                    accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere.Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae
                    placeat ad architecto nostrum asperiores vel aperiam, veniam eum
                    nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam
                    fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odio vitae ab doloremque accusamus sit, eos dolorum officiis a
                    perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quod, facere.
                </p>
                <div className="share">
                    <h5>SHARE THIS POST</h5>
                    <ul>
                        <img src={image_01} />
                        <img src={image_02} />
                        <img src={image_03} />
                        <img src={image_04} />
                    </ul>
                </div>
                <div className="comments">
                    <h5>10 COMMENT</h5>
                    <div className="comment">
                        <img src={image_2} alt="" />
                        <div className="info">
                            <h5>JONATHON ANDREW</h5>
                            <h6><p>July 02, 2015, at 11:34 Reply</p></h6>
                            <h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quisque at magna ut ante eleifend eleifend.
                                </p>
                            </h5>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={image_3} alt="" />
                        <div className="info">
                            <h5>JONATHON ANDREW</h5>
                            <h6><p>July 02, 2015, at 11:34 Reply</p></h6>
                            <h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quisque at magna ut ante eleifend eleifend.
                                </p>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="leave">
                    <h5>LEAVE YOU COMMENTS</h5>
                    <form>
                        <div>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <input type="text" placeholder="Website" />
                        <textarea cols="30" rows="10" placeholder="Comment"></textarea>
                        <button type="submit">SEND COMMENT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}