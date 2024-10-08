import React from 'react'
import image_1 from '../../image/avater-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons"

export const Dashboard = () => {
    const handelTo = (id) => {
        let dashboard_buttons = document.querySelectorAll(".dashboard .buttons button")
        let dashboard_boxs = document.querySelectorAll(".dashboard > div:not(:first-child) ")

        dashboard_buttons.forEach(button => {
            button.classList = ""
        });
        dashboard_buttons[id - 1].classList = "active"
        dashboard_boxs.forEach((box) => {
            if (+box.dataset.id === id) {
                box.style.display = "flex"
            } else {
                box.style.display = "none"
            }

        })
    }
    return (
        <>
            <div className="contact-main">
                <div className="title-main">
                    <h1>Dashboard</h1>
                    <p>Home <span>/</span> my account</p>
                </div>
            </div>
            <div className="dashboard">
                <div className="buttons">
                    <button onClick={e => handelTo(1)} >Dashboard</button>
                    <button onClick={e => handelTo(2)} >Orders</button>
                    <button onClick={e => handelTo(3)} >Address</button>
                    <button onClick={e => handelTo(4)} className="active">Profile Details</button>
                </div>
                <div data-id="1" style={{ display: "none" }} className="welcome">
                    <div className="top">
                        <img src={image_1} alt="" />
                        <div>
                            <h3>Welcome Adam Smith</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
                                iure, est. Sit mollitia est maxime! Eos cupiditate tempore,
                                tempora omnis. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Enim, nihil.
                            </p>
                        </div>
                    </div>
                    <p>Total Orders</p>
                    <div className="order">
                        <div>
                            <h4>Order ID</h4>
                            <p>#252125</p>
                            <p>#252125</p>
                            <p>#252125</p>
                        </div>
                        <div>
                            <h4>Date</h4>
                            <p>Mar 25, 2016</p>
                            <p>Mar 25, 2016</p>
                            <p>Mar 25, 2016</p>
                        </div>
                        <div>
                            <h4>Items</h4>
                            <p>2</p>
                            <p>2</p>
                            <p>2</p>
                        </div>
                        <div>
                            <h4>Total Price</h4>
                            <p>$ 99.00</p>
                            <p>$ 99.00</p>
                            <p>$ 99.00</p>
                        </div>
                    </div>
                </div>
                <div data-id="2" style={{ display: "none" }} className="welcome order">
                    <div className="order">
                        <div>
                            <h4>Order ID</h4>
                            <p>#252125</p>
                            <p>#252125</p>
                            <p>#252125</p>
                        </div>
                        <div>
                            <h4>Date</h4>
                            <p>Mar 25, 2016</p>
                            <p>Mar 25, 2016</p>
                            <p>Mar 25, 2016</p>
                        </div>
                        <div>
                            <h4>Items</h4>
                            <p>2</p>
                            <p>2</p>
                            <p>2</p>
                        </div>
                        <div>
                            <h4>Total Price</h4>
                            <p>$ 99.00</p>
                            <p>$ 99.00</p>
                            <p>$ 99.00</p>
                        </div>
                        <div className="status">
                            <h4>Status</h4>
                            <p style={{ background: "#337ab7" }}>Processing</p>
                            <p style={{ background: "#5cb85c" }}>Completed</p>
                            <p style={{ background: "#d9534f" }}>Canceled</p>
                        </div>
                        <div className="view">
                            <h4></h4>
                            <p>view</p>
                            <p>view</p>
                            <p>view</p>
                        </div>
                    </div>
                </div>
                <div data-id="3" style={{ display: "none" }} className="welcome address">
                    <div className="order">
                        <div>
                            <h4>Company</h4>
                            <p>Nokia</p>
                            <p>Samsung</p>
                            <p>Motorola</p>
                        </div>
                        <div>
                            <h4>Name</h4>
                            <p>Adam Smith</p>
                            <p>Adam Smith</p>
                            <p>Adam Smith</p>
                        </div>
                        <div>
                            <h4>Address</h4>
                            <p>9/4 C Babor Road, Mohammad Pur, Dhaka</p>
                            <p>9/4 C Babor Road, Mohammad Pur, Dhaka</p>
                            <p>9/4 C Babor Road, Mohammad Pur, Dhaka</p>
                        </div>
                        <div>
                            <h4>Country</h4>
                            <p>Bangladesh</p>
                            <p>Bangladesh</p>
                            <p>Bangladesh</p>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <p>+884 5452 6452</p>
                            <p>+884 5452 6452</p>
                            <p>+884 5452 6452</p>
                        </div>
                        <div className="view">
                            <h4></h4>
                            <p>
                                <FontAwesomeIcon icon={faPencil} />
                                <FontAwesomeIcon icon={faTrashCan} />
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPencil} />
                                <FontAwesomeIcon icon={faTrashCan} />
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPencil} />
                                <FontAwesomeIcon icon={faTrashCan} />
                            </p>
                        </div>
                    </div>
                </div>
                <div data-id="4" className="profile"  >
                    <img src={image_1} alt="" />
                    <div className="info">
                        <div>
                            <h3>Full Name:</h3>
                            <p>Johanna Doe</p>
                        </div>
                        <div>
                            <h3>Country:</h3>
                            <p>USA</p>
                        </div>
                        <div>
                            <h3>Email:</h3>
                            <p>mail@gmail.com</p>
                        </div>
                        <div>
                            <h3>Phone:</h3>
                            <p>+880123123</p>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

