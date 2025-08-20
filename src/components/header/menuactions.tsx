import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { SlBag } from "react-icons/sl";
import { VscHeart } from "react-icons/vsc";
import './header.css';


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
                <CgProfile size={32}/>
                <VscHeart size={32}/>
                <div className="drop-down">
                    <SlBag className="drop-btn" size={28} />
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