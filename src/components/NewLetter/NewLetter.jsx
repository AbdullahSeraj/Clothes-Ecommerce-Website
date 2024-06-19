import "./NewLetter.scss"

export default function NewLetter() {
    return (
        <div className="new-letter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className="search">
                <input type="text" placeholder="Enter Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}