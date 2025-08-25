import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { VscHeart } from "react-icons/vsc";
import './header.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import { RxCross2 } from "react-icons/rx";


export default function MenuActions() {
    const {products, cartItems, removeFromCart, getTotalCartItems} = useContext(ShopContext);
    

    return <>
        <div className="auxiliary-menu">
            <div className="input-wrapper">
                <input placeholder="Search" className="search-field"/>
                <div className="search-icon">
                    <CiSearch  size={32}/>
                </div>
            </div>
            <div className="actionItems">
                <Link to='/profile'><CgProfile size={32}/></Link>
                <Link to='/wishlist'><VscHeart size={32}/></Link>
                <div className="drop-down">
                    <Link to='/cart'><HiOutlineShoppingBag className="drop-btn" size={28} /></Link>
                    <div className="cart-count">{getTotalCartItems()}</div>
                    <div className="drop-down-wrapper">
                        {getTotalCartItems() === 0 && (
                            <div className="drop-down-cart">
                                <h4>Your cart is empty.</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
}