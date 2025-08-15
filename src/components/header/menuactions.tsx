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
                    <CiSearch size={32}/>
                </div>
            </div>
            <div className="actionItems">
            <CgProfile size={32}/>
            <VscHeart size={32}/>
            <SlBag  size={32} />
            </div>
        </div>
    </>
}