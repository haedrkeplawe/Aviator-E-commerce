import React from 'react'
import image_1 from "../../image/download_4.jpg"
import image_2 from "../../image/download_5.jpg"
import image_3 from "../../image/download_6.jpg"

const catugory = () => {
    return (
        <section className="catugory">
            <h3 className="main-title">PRODUCT CATEGORY</h3>
            <div className="container">
                <div className="one">
                    <div>
                        <div className="unet">
                            <div className="info">
                                <h3>Clothes Sales</h3>
                                <p>Shop New Season Clothing</p>
                            </div>
                            <img src={image_1} alt="" />
                        </div>
                        <div className="unet">
                            <div className="info">
                                <h3>Smart Casuals</h3>
                                <p>Get Wide Range Selection</p>
                            </div>
                            <img src={image_2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="two">
                    <div style={{ position: "relative" }} >
                        <div className="info">
                            <h3>Jewellery</h3>
                            <p>Special Design Comes First</p>
                        </div>
                        <img src={image_3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default catugory