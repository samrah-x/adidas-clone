import { useContext } from "react"
import { ShopContext } from "../../context/shopcontext"
import { RxCross2 } from "react-icons/rx";
import './cartitems.css';
import { HiOutlineHeart } from "react-icons/hi";

export default function CartItems () {
    const {products, cartItems, removeFromCart, getTotalCartItems, getTotalCartAmount} = useContext(ShopContext);

    let salestax = getTotalCartAmount() * 0.05;
    let delivery = 4.99;

    return <div className="cart-items">
        <div className="cart-items-format-main">
            <h2>YOUR BAG</h2>
            <p>TOTAL: ({getTotalCartItems()} item(s)) <b>{}</b></p>
            <p>Items in your bag are not reserved - check out now to make them yours.</p>
        </div>
        <div className="cart-body">
            <div className="cart-items-list">
                {products.map((e) => {
                    if(cartItems[e.id]>0) {
                        return <div className="cart-items-format">
                            <img src={e.image} alt={e.name} className="icon"/>
                            <div className="cart-items-details">
                                <p>{e.name}</p>
                                <p>${e.price}</p>
                                <button className="cart-items-quantity">{cartItems[e.id]}</button>
                            </div>
                            <div className="cart-options">
                                <RxCross2 className="remove" size={24} onClick={() => removeFromCart(e.id)} />
                                <HiOutlineHeart className="add-to-wishlist" size={24}/>
                            </div>
                        </div>
                    }
                    else {
                        <p>Your bag is empty.</p>
                    }
                })}
            </div>
            <div className="order-summary">
                <h2>ORDER SUMMARY</h2>
                <ul className="list-summary">
                    <li>
                        <p>{getTotalCartItems()} items</p>
                        <p>${getTotalCartAmount().toFixed(2)}</p>
                    </li>
                    <li>
                        <p>Original Price</p>
                        <p>${getTotalCartAmount().toFixed(2)}</p>                    
                    </li>
                    <li>
                        <p>Sales Tax</p>
                        <p>${salestax.toFixed(2)}</p>                    
                    </li>
                    <li>
                        <p>Delivery</p>
                        <p>${delivery.toFixed(2)}</p>                    
                    </li>
                    <li className="total">
                        <p>Total</p>
                        <p>${(getTotalCartAmount() + salestax + delivery ).toFixed(2)}</p>                    
                    </li>
                </ul>
                <button className="checkout" >
                    <p>CHECKOUT</p> 
                    <p>→</p>
                </button>
            </div>
        </div>
    </div>
}