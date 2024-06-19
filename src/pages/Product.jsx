import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext"
import Breadcrums from "../components/Breadcrums/Breadcrums";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts"

import "./css/Product.scss"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"

export default function CategoryDetails() {
    const { id } = useParams()

    const { all_product } = useContext(ShopContext);
    const product = all_product.find(item => item.id == id);
    const productsCat = all_product.filter(item => item.category === product.category)

    const { addToCart } = useContext(ShopContext)

    return (
        <div className="product-page">
            <Breadcrums product={product} />

            <div className="product">
                <div className="left-product">
                    <div className="left-item">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>

                    <div className="right-item">
                        <img src={product.image} alt="" />
                    </div>
                </div>

                <div className="right-product">
                    <h2>{product.name}</h2>

                    <div className="stars">
                        <div className="imgs">
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_dull_icon} alt="" />
                        </div>
                        <span>(122)</span>
                    </div>

                    <div className="price">
                        <span className="old-price">${product.old_price}</span>
                        <span className="new-price">${product.new_price}</span>
                    </div>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, ullam? Officia amet exercitationem culpa reprehenderit incidunt necessitatibus eligendi quos saepe ipsam? Reprehenderit impedit cupiditate numquam. Harum obcaecati exercitationem cumque sed.</p>

                    <h3>Select Size</h3>

                    <div className="sizes">
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>

                    <button onClick={() => addToCart(product.id)}>ADD TO CART</button>

                    <p className="category"><strong>Category:</strong> {product.category}, T-shirt, Crop Top</p>
                    <p className="tags"><strong>Tags:</strong> Modern, Latert</p>
                </div>
            </div>

            <div className="description">
                <div className="spans">
                    <span>Description</span>
                    <span className="reviews">Reviews (122)</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nobis tenetur esse laboriosam exercitationem commodi, tempore itaque, asperiores doloremque neque est possimus sit dolore sunt fugiat nesciunt, perferendis id. Consequatur.
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At culpa consequuntur ullam? Minima, in ad. Iusto labore laborum eos vitae sapiente officia cum earum! Reiciendis sapiente nobis asperiores iste! Adipisci!
                </p>
            </div>

            <RelatedProducts products={productsCat} category={product.category} />
        </div>
    )
}