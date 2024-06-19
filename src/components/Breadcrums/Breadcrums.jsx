import breadcrum_arrow from "../../Assets/breadcrum_arrow.png"
import "./Breadcrums.scss"

export default function Breadcrums(props) {
    const { product } = props

    return (
        <div className="breadcrums">
            Home <img src={breadcrum_arrow} alt="" /> Shop <img src={breadcrum_arrow} alt="" /> {product.category}
            <img src={breadcrum_arrow} alt="" /> <span>{product.name}</span>
        </div>
    )
}