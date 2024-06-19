import exclusive_image from "../../Assets/exclusive_image.png"
import './Offer.scss'

export default function Offer() {
    return (
        <div className="offer">
            <div className="left-offer">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>Only on best sellers products</p>
                <button>Check New</button>
            </div>

            <div className="right-offer">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}