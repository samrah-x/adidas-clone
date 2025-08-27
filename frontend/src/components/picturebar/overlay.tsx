import { Link } from "react-router-dom"
import Promo from "./promo"

export default function Overlay() {
    return <>
    <div className="hero">
        <div className="hero-overlay">
            <Promo/>
            <div className="buttons">
                <button><Link to='/women-shop'>WOMEN →</Link></button>
                <button><Link to='/men-shop'>MEN →</Link></button>
                <button><Link to='/kids-shop'>KIDS →</Link></button>
            </div>
        </div>
        </div>
    </>
}