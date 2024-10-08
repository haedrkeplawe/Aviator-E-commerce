import image_1 from "../image/download_4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFax, faLocationDot, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons"

export const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-main">
                <div className="title-main">
                    <h1>Contact Us</h1>
                    <p>Home <span>/</span> contact</p>
                </div>
            </div>
            <div className="contact-us">
                <form action="">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Your Password" />
                    <input type="text" placeholder="Subject" />
                    <input type="text" placeholder="Meesage" />
                    <button>SUBMIT</button>
                </form>
                <div className="right">
                    <div className="image">
                        <img src={image_1} alt="" />
                    </div>
                    <div className="icon_1">
                        <div>




                            <FontAwesomeIcon icon={faLocationDot} />
                            <h5>Khaja Road, Bayzid, Chittagong, Bangladesh</h5>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                            <h5>Phone: +880-31-000-000</h5>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faFax} />
                            <h5>Fax: +880-31-000-000</h5>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faVoicemail} />
                            <h5>Email: hello@example.com</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}