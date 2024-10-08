import image_1 from "../image/about.jpg"
import image_2 from "../image/awards-logo.png"
import image_3 from "../image/team-1.jpg"
import image_4 from "../image/team-2.jpg"
import image_5 from "../image/team-3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export const About = () => {
    return (
        <>
            <div className="contact-main">
                <div className="title-main">
                    <h1>About Us</h1>
                    <p>Home <span>/</span> about us</p>
                </div>
            </div>
            <div className="about-us">
                <div className="about">
                    <img src={image_1} alt="" />
                    <div className="info">
                        <h1>About Our Shop</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius enim,
                            accusantium repellat ex autem numquam iure officiis facere vitae
                            itaque.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam qui
                            vel cupiditate exercitationem, ea fuga est velit nulla culpa modi
                            quis iste tempora non, suscipit repellendus labore voluptatem dicta
                            amet?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam qui
                            vel cupiditate exercitationem, ea fuga est velit nulla culpa modi
                            quis iste tempora non, suscipit repellendus labore voluptatem dicta
                            amet?
                        </p>
                        <button>DOWNLOAD COMPANY PROFILE</button>
                    </div>
                </div>
                <div className="spons">
                    <img src={image_2} alt="" />
                    <img src={image_2} alt="" />
                    <img src={image_2} alt="" />
                    <img src={image_2} alt="" />
                </div>
                <div className="teams">
                    <h4>TEAM MEMBERS</h4>
                    <div className="mumbers">
                        <div>
                            <img src={image_3} alt="" />
                            <h5>Adipisci Velit</h5>
                            <p>Developer</p>
                        </div>
                        <div>
                            <img src={image_4} alt="" />
                            <h5>Adipisci Velit</h5>
                            <p>Developer</p>
                        </div>
                        <div>
                            <img src={image_5} alt="" />
                            <h5>Adipisci Velit</h5>
                            <p>Developer</p>
                        </div>
                        <div>
                            <img src={image_3} alt="" />
                            <h5>Adipisci Velit</h5>
                            <p>Developer</p>
                        </div>
                    </div>
                </div>
                <div className="video">
                    <div>
                        <h2>Video presentation</h2>
                        <FontAwesomeIcon icon={faPlay} />
                        <i className="fa-solid fa-play"></i>
                    </div>
                </div>
            </div>
        </>
    )
}