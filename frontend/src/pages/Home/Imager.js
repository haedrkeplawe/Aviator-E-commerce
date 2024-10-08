import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const Imager = () => {
    let number = 0
    let i = 0
    let stop = true
    const goto = (to) => {
        // if (to === "up" && number < 2) {
        //     ++number
        // } else if (to === "down" && number > 0) {
        //     --number
        // } else if (to === "down") {
        //     number = 2
        // } else if (to === "up") {
        //     number = 0
        // }
        // const images = document.getElementById("images")
        // if (number === 0) {
        //     images.innerHTML += `<div class="image hidden" id="one"></div>
        //     <div class="image hidden" id="two"></div>
        //     <div class="image hidden" id="three"></div>
        //     `
        // }
        // if (number === 1) {
        //     images.innerHTML += '<div class="image hidden" id="two"></div>';
        // }
        // if (number === 2) {
        //     images.innerHTML += '<div class="image hidden" id="three"></div>';
        // }
        let imager_containers = document.querySelectorAll(".imager .container")
        let imager_image = document.querySelectorAll(".imager .container .image")
        i++
        if (to === "down") {
            console.log(i);
            imager_image.forEach((image) => {
                if (image.className === "image active") {
                    console.log(i);
                    stop = false
                    image.className = "image hidden"
                    image.style.left = "100%"
                } else if (image.className !== "image active" && stop === false) {
                    image.className = "image active"
                    image.style.left = "0"
                    stop = true
                } else if (i === 3) {
                    i = 0
                    image.className = "image active"
                    image.style.left = "0"
                }
            });
        }
        if (to === "up") {
            imager_image.forEach((image) => {
                if (image.className === "image active") {
                    stop = false
                    image.className = "image hidden"
                    image.style.left = "-100%"
                } else if (image.className !== "image active" && stop === false) {
                    image.className = "image active"
                    image.style.left = "0"
                    stop = true
                } else if (i === 3) {
                    i = 0
                    image.className = "image active"
                    image.style.left = "0"
                }
            });
        }
    }
    return (
        <section className="imager">
            <div>
                <div className="container" >
                    <div className='images' id='images'>
                        <div style={{ left: "0%" }} className="image active" id="one"></div>
                        <div style={{ left: "100%" }} className="image hidden" id="two"></div>
                        <div style={{ left: "100%" }} className="image hidden" id="three"></div>
                    </div>
                    <div className="button">
                        <div className="doun"
                            onClick={() => goto("down")}
                        ><FontAwesomeIcon icon={faChevronLeft} /></div>
                        <div
                            onClick={() => goto("up")}
                            className="up"><FontAwesomeIcon icon={faChevronRight} /></div>
                    </div>
                    <div className="card">
                        <h4>PRODUCTS</h4>
                        <h2>
                            the beauty of nature <br />
                            id hidden in details.
                        </h2>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="next">
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>
        </section>
    )
}

export default Imager