import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import image_1 from "../image/download_7.jpg"
import image_2 from "../image/download_8.jpg"
import image_3 from "../image/download_9.jpg"
import image_4 from "../image/download_10.jpg"
import image_5 from "../image/download_11.jpg"
import image_6 from "../image/download_12.jpg"
import image_7 from "../image/download_13.jpg"
import image_8 from "../image/download_14.jpg"
import image_9 from "../image/download_15.jpg"

const Products = () => {
    return (
        <div className="products">
            <h3 className="main-title">TRENDY PRODUCTS</h3>
            <div className="container">
                <div className="product">
                    <div className="image sale">
                        <div className="box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <img src={image_1} alt="" />
                    </div>
                    <div className="info">
                        <h4>Rainbow Shoes</h4>
                        <p>$200</p>
                    </div>
                </div>
                <div className="product">
                    <div className="image">
                        <div className="box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <img src={image_2} alt="" />
                    </div>
                    <div className="info">
                        <h4>Reef Boardsport</h4>
                        <p>$200</p>
                    </div>
                </div>
                <div className="product">
                    <div className="image">
                        <div className="box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <img src={image_3} alt="" />
                    </div>
                    <div className="info">
                        <h4>Strayhorn SP</h4>
                        <p>$230</p>
                    </div>
                </div>
                <div className="product">
                    <div className="image">
                        <div className="box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <img src={image_4} alt="" />
                    </div>
                    <div className="info">
                        <h4>Bradley Mid</h4>
                        <p>$200</p>
                    </div>
                </div>
                <div className="product">
                    <div className="image">
                        <div className="box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <img src={image_5} alt="" />
                    </div>
                    <div className="info">
                        <h4>Rainbow Shoes</h4>
                        <p>$200</p>
                    </div>
                </div>
                <div className="product">
                    <div className="image">
                        <div className="box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <img src={image_6} alt="" />
                    </div>
                    <div className="info">
                        <h4>Rainbow Shoes</h4>
                        <p>$200</p>
                    </div>
                </div>
                <div className="product">
                    <div className="image sale">
                        <div className="box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <img src={image_7} alt="" />
                    </div>
                    <div className="info">
                        <h4>Rainbow Shoes</h4>
                        <p>$200</p>
                    </div>
                </div>
                <div className="product">
                    <div className="image">
                        <div className="box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <img src={image_8} alt="" />
                    </div>
                    <div className="info">
                        <h4>Rainbow Shoes</h4>
                        <p>$200</p>
                    </div>
                </div>
                <div className="product">
                    <div className="image">
                        <div className="box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <img src={image_9} alt="" />
                    </div>
                    <div className="info">
                        <h4>Rainbow Shoes</h4>
                        <p>$200</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products