import { useContext, useState } from "react"
import { ShopContext } from "../Context/ShopContext"

import "./css/Cart.scss"

export default function Cart() {
    const { all_product, cartItems, addToCart, removeFromCart, getTotal } = useContext(ShopContext);

    return (
        <div className="cart">
            <div className="container-table">
                <table>
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all_product.map((item, i) => {

                            if (cartItems[item.id] > 0) {
                                return <tr key={i}>
                                    <td><img src={item.image} alt="" /></td>
                                    <td><p>{item.name}</p></td>
                                    <td><strong className="text-center">$ {item.new_price}</strong></td>
                                    <td><input className="text-center" type="text" value={cartItems[item.id]} onChange={() => item.id} /></td>
                                    <td><span className="text-center">$ {item.new_price * cartItems[item.id]}</span></td>
                                    <td><button className="text-center" onClick={() => removeFromCart(item.id)}>X</button></td>
                                </tr>
                            }
                        })}
                    </tbody>
                </table>
            </div>

            <div className="container-cart">
                <div className="cart-totals">
                    <h2>Cart Totals</h2>
                    <div className="list">
                        <p>Subtotal</p>
                        <span>${getTotal()}</span>
                    </div>

                    <div className="list">
                        <p>Shopping</p>
                        <span>{getTotal() >= 100 ? "Free" : "$19"}</span>
                    </div>

                    <div className="list">
                        <p>Total</p>
                        <span>${getTotal() >= 100 ? getTotal() : getTotal() + 19}</span>
                    </div>

                    <button>PROCEED TO CHECKOUT</button>
                </div>

                <div className="code">
                    <p>If you have a promo code. Enter it here</p>
                    <div className="input">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}