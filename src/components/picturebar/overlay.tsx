import Promo from "./promo"

export default function Overlay() {
    return <>
    <div className="hero">
        <div className="hero-overlay">
            <Promo/>
            <div className="buttons">
                <button>WOMEN →</button>
                <button>MEN →</button>
                <button>KIDS →</button>
            </div>
        </div>
        </div>
    </>
}