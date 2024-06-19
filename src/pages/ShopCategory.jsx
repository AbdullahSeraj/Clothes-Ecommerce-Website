import Item from "../components/Item/Item"
import "./css/ShopCategory.scss"
import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import dropdown_icon from "../Assets/dropdown_icon.png"

export default function ShopCategory(props) {
    const { all_product } = useContext(ShopContext)
    const products = all_product.filter(item => item.category === props.category)

    return (
        <div className="shop-category">
            <img src={props.banner} alt="" />

            <div className="tools">
                <p><strong>Shopping 1 - 12 </strong>out of Products</p>
                <button>Sort By <img src={dropdown_icon} alt="" /></button>
            </div>

            <div className="products">
                {products && products.map((product, i) => {
                    return <Item key={i} item={product} />
                })}
            </div>

            <div className="container-btn">
                <button className="more">Explore More</button>
            </div>
        </div>
    )
}