import { Link } from "react-router-dom"
import Promo from "./promo"

export default function Overlay() {
    return <>
    <div className="hero">
        <div className="hero-overlay">
            <Promo/>
            <div className="buttons">
                <button><Link to='/women'>WOMEN →</Link></button>
                <button><Link to='/men'>MEN →</Link></button>
                <button><Link to='/kids'>KIDS →</Link></button>
            </div>
        </div>
        </div>
    </>
}