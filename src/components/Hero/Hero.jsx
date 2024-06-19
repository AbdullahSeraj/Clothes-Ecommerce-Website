import "./Hero.scss"
import hero_img from '../../Assets/hero_image.png'
import arrow_icon from '../../Assets/arrow.png'

export default function Hero() {

    return (
        <div className="hero">
            <div className="hero-left">
                <p>New Arrivals only</p>
                <h1>
                    new<br />
                    collections<br />
                    for everyone
                </h1>

                <button>Latest collection<img src={arrow_icon} alt="" /></button>
            </div>

            <div className="hero-right">
                <img src={hero_img} alt="" height={'600px'} />
            </div>
        </div>
    )
}