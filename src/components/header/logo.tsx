import { SiAdidas } from "react-icons/si";
import './header.css';
import { Link } from "react-router-dom";


export default function Logo () {
    return <>
        <a href="" className="logo">
            <Link to='/'><SiAdidas className="logo-icon"/></Link>
        </a>
    </>
}