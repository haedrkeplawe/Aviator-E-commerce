import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import pruduct_1 from "../../image/product-1.jpg"
import pruduct_2 from "../../image/product-2.jpg"
import pruduct_3 from "../../image/product-3.jpg"
import pruduct_4 from "../../image/product-4.jpg"
import pruduct_5 from "../../image/product-5.jpg"
import pruduct_6 from "../../image/product-6.jpg"
import avater_1 from "../../image/avater-1.jpg"
import avater_4 from "../../image/avater-4.jpg"
import download_9 from "../../image/download_9.jpg"
import download_12 from "../../image/download_12.jpg"
import download_13 from "../../image/download_13.jpg"

export const Product = () => {
    let product_position = 0
    let product_position_1 = 0
    let product_to = "right"
    const [size, setSize] = useState("s")
    const [quantity, setQuantity] = useState(1)

    const goto = (nump) => {
        let product_top = document.querySelector(".product-page .eclipse .top>div")
        let product_doun = document.querySelectorAll(".product-page .eclipse .doun span")

        function position(product_position) {
            product_doun.forEach(ele => {
                ele.className = ""
            })
            product_doun[product_position_1].className = "active"
            product_top.style.left = `${product_position}%`
        }
        product_position = -nump * 100
        product_position_1 = nump
        position(product_position)
    }

    const LeftAndRight = (type) => {
        let product_top = document.querySelector(".product-page .eclipse .top>div")
        let product_doun = document.querySelectorAll(".product-page .eclipse .doun span")

        if (+product_position < 0 && type === "left") {
            product_position += 100
            product_position_1--
            position(product_position)
        }
        if (-500 < +product_position && type === "right") {
            product_position -= 100
            product_position_1++
            position(product_position)
        }

        function position(product_position) {
            product_doun.forEach(ele => {
                ele.className = ""
            })
            product_doun[product_position_1].className = "active"
            product_top.style.left = `${product_position}%`
        }
        position(product_position)
    }
    const handelCheck = (type) => {
        setSize(type)
    }
    return (
        <div className="product-page">
            <div className="head">
                <div className="left">
                    Home
                    <p>/</p>
                    Shop
                    <p>/</p>
                    Single Product
                </div>
                <div className="right">
                    <span><i></i>next</span>
                    <p>/</p>
                    <span>preview <i></i></span>
                </div>
            </div>
            <div className="eclipse">
                <div className="image">
                    <div className="top">
                        <div>
                            <img src={pruduct_1} alt="" />
                            <img src={pruduct_2} alt="" />
                            <img src={pruduct_3} alt="" />
                            <img src={pruduct_4} alt="" />
                            <img src={pruduct_5} alt="" />
                            <img src={pruduct_6} alt="" />
                        </div>
                        <div className="button">
                            <span onClick={() => { LeftAndRight("left") }}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </span>
                            <span onClick={() => { LeftAndRight("right") }}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                        </div>
                    </div>
                    <div className="doun">
                        <span onClick={() => goto(0)}
                        ><img src={pruduct_1} alt=""
                            /></span>
                        <span onClick={() => goto(1)}
                        ><img src={pruduct_2} alt=""
                            /></span>
                        <span onClick={() => goto(2)}
                        ><img src={pruduct_3} alt=""
                            /></span>
                        <span onClick={() => goto(3)}
                        ><img src={pruduct_4} alt=""
                            /></span>
                        <span onClick={() => goto(4)}
                        ><img src={pruduct_5} alt=""
                            /></span>
                        <span onClick={() => goto(5)}
                        ><img src={pruduct_6} alt=""
                            /></span>
                    </div>
                </div>
                <div className="info">
                    <h2>Eclipse Crossbody</h2>
                    <p>$300</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                        <br />
                        ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a
                        <br />
                        consequatur beatae nostrum, earum consequuntur? Eveniet consequatur
                        <br />
                        ipsum dicta recusandae. <br />
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
                        <br />
                        velit, sunt temporibus, nulla accusamus similique sapiente tempora,
                        <br />
                        at atque cumque assumenda minus asperiores est esse sequi dolore
                        <br />
                        magnam. Debitis, explicabo.
                    </p>
                    <div className="color">
                        <h5>color:</h5>
                        <div>
                            <span style={{ background: "#8da1cd" }}></span>
                            <span style={{ background: "black" }} ></span>
                            <span style={{ background: "#e6e2d6" }} ></span>
                        </div>
                    </div>
                    <div className="size">
                        <h5>Size:</h5>
                        <div className="input">
                            <p>{size}</p>
                            <span><FontAwesomeIcon icon={faAngleDown} /> </span>
                            <ul>

                                <li onClick={() => { handelCheck("s") }}>S</li>
                                <li onClick={() => { handelCheck("m") }}>M</li>
                                <li onClick={() => { handelCheck("l") }}>L</li>
                                <li onClick={() => { handelCheck("xl") }}>XL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="quantity">
                        <h5>Quantity:</h5>
                        <span onClick={() => setQuantity(quantity - 1)}>-</span>
                        <div className="input">{quantity}</div>
                        <span onClick={() => setQuantity(quantity + 1)}>+</span>
                    </div>
                    <div className="categories">
                        <h5>Categories:</h5>
                        <span>Products</span>
                        <span>Soap</span>
                    </div>
                    <button>ADD TO CART</button>
                </div>
            </div>
            <div className="reviews">
                <div className="buttons">
                    <button>Details</button>
                    <button>Reviews(3)</button>
                </div>
                <div className="description">
                    <h4>Product Description</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum. Sed ut per
                        spici
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
                        delectus quidem repudiandae veniam distinctio repellendus magni
                        pariatur molestiae asperiores animi, eos quod iusto hic doloremque
                        iste a, nisi iure at unde molestias enim fugit, nulla voluptatibus.
                        Deserunt voluptate tempora aut illum harum, deleniti laborum animi
                        neque, praesentium explicabo, debitis ipsa?
                    </p>
                </div>
                <div className="review">
                    <div>
                        <img src={avater_1} alt="" />
                        <div className="info">
                            <h6>JONATHON ANDREW</h6>
                            <p>July 02, 2015, at 11:34 <i>+</i> Reply</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                at magna ut ante eleifend eleifend.Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Quod laborum minima, reprehenderit
                                laboriosam officiis praesentium? Impedit minus provident
                                assumenda quae.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={avater_4} alt="" />
                        <div className="info">
                            <h6>JONATHON ANDREW</h6>
                            <p>July 02, 2015, at 11:34 <i>+</i> Reply</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                at magna ut ante eleifend eleifend.Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Quod laborum minima, reprehenderit
                                laboriosam officiis praesentium? Impedit minus provident
                                assumenda quae.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={avater_1} alt="" />
                        <div className="info">
                            <h6>JONATHON ANDREW</h6>
                            <p>July 02, 2015, at 11:34 <i>+</i> Reply</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                at magna ut ante eleifend eleifend.Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Quod laborum minima, reprehenderit
                                laboriosam officiis praesentium? Impedit minus provident
                                assumenda quae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products">
                <h3 className="main-title">TRENDY PRODUCTS</h3>
                <div className="container">
                    <div className="product">
                        <div className="image">
                            <div className="box">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <i className="fa-solid fa-heart"></i>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <img src={download_9} alt="" />
                        </div>
                        <div className="info">
                            <h4>Strayhorn SP</h4>
                            <p>$230</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image">
                            <div className="box">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <i className="fa-solid fa-heart"></i>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <img src={download_12} alt="" />
                        </div>
                        <div className="info">
                            <h4>Rainbow Shoes</h4>
                            <p>$200</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="image sale">
                            <div className="box">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <i className="fa-solid fa-heart"></i>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <img src={download_13} alt="" />
                        </div>
                        <div className="info">
                            <h4>Rainbow Shoes</h4>
                            <p>$200</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}