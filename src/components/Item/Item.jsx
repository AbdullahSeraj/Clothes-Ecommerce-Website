import { Link } from "react-router-dom";
import "./Item.scss"

export default function Item(props) {

    const item = props.item;

    return (
        <Link to={`/products/${item.id}`} onClick={window.scrollTo(0, 0)}>
            <div className="item">
                <div className="container-img">
                    <img src={item.image} alt="" />
                </div>
                <p>{item.name}</p>
                <div className="price">
                    <span className="new-price">${item.new_price}</span>
                    <span className="old-price">${item.old_price}</span>
                </div>
            </div>
        </Link>
    )
}