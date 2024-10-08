import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import Products from "../../components/Products"


export const Shop = () => {
    let open_sidebar = "close"
    const clickHandel = (id) => {
        let input_sidebar = document.querySelectorAll(".shop_sidebar .sidebar .input")
        let P_sidebar = document.querySelectorAll(".shop_sidebar .sidebar .input>div p")
        let ULP_sidebar = document.querySelectorAll(".shop_sidebar .sidebar .input ul p")


        if (open_sidebar != "open") {
            input_sidebar[id - 1].className = "input active"
            open_sidebar = "open"
            // console.log(input_sidebar[0].children[1].innerHTML += `<i class="fa-solid fa-angle-up"></i>`);
        } else {
            input_sidebar[id - 1].className = "input"
            open_sidebar = "close"
            // console.log(input_sidebar[0].children[0].children[1].innerHTML = `<i class="fa-solid fa-angle-down"></i>`);
        }

        // P_sidebar.forEach((P) => {
        //     if (P.dataset.id === ULP.dataset.id) {
        //         P.innerHTML = ULP.innerHTML
        //     }
        // })
    }
    return (
        <div className="shop_sidebar">
            <div className="sidebar">
                <div>
                    <h4>SHORT BY</h4>
                    <div className="input"
                        onClick={() => clickHandel(1)}
                    >
                        <div>
                            <p>MAN</p>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        <ul>
                            <p>MAN</p>
                            <p>WOUMAN</p>
                            <p>ACCESSORIES</p>
                            <p>SHOSE</p>
                        </ul>
                    </div>
                </div>
                <div className="cate">
                    <h4>CATEGORIES</h4>
                    <div className="input"
                        onClick={() => clickHandel(2)}
                    >
                        <div>
                            <p>SHOES</p>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        <ul>
                            <p>Brand & Twist</p>
                            <p>Shoe Color</p>
                            <p>Shoe Color</p>
                        </ul>
                    </div>
                    <div className="input"
                        onClick={() => clickHandel(3)}
                    >
                        <div>
                            <p>DUTY WEAR</p>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        <ul>
                            <p>Brand & Twist</p>
                            <p>Shoe Color</p>
                            <p>Shoe Color</p>
                        </ul>
                    </div>
                    <div className="input"
                        onClick={() => clickHandel(4)}
                    >
                        <div>
                            <p>WORKOUT SHOES</p>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        <ul>
                            <p>Brand & Twist</p>
                            <p>Shoe Color</p>
                            <p>Gladian Shoes</p>
                            <p>Swis Shoes</p>
                        </ul>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}