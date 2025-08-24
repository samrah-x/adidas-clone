import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { VscHeart } from "react-icons/vsc";
import './header.css';
import { Link } from "react-router-dom";


export default function MenuActions() {
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
                    <div className="cart-count">0</div>
                    <div className="drop-down-wrapper">
                        <div className="drop-down-cart">
                            <h4>Your Cart is Empty</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}