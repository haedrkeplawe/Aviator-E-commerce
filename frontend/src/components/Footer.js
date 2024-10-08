import image_1 from "../image/facebook.svg"
import image_2 from "../image/instagram.svg"
import image_3 from "../image/twitter.svg"
import image_4 from "../image/tiktok.svg"

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="icon">
                    <i className="fa-brands fa-facebook-f"><img src={image_1} /></i><i className="fa-brands fa-instagram"><img src={image_2} /></i><i
                        className="fa-brands fa-twitter"><img src={image_3} /></i><i className="fa-brands fa-tiktok"><img src={image_4} /></i>
                </div>
                <div className="copy">
                    Copyright ©2024, Designed & Developed by <span>Haedr.K</span>
                </div>
            </div>
        </footer>
    )
}

