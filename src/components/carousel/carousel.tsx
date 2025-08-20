import { useState, useEffect } from "react";
import Card from "./card";
import './carousel.css';
import { products } from "./products";


export default function Carousel() {
    
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return <>
        <div className="collection-card">
            <section className="teaser-carousel">
                <div className="grid-row"></div>
                <div className="carousel-system">
                    <ul>
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                heading={product.heading}
                                summary={product.summary ?? product.Summary ?? ""}
                                img_link={isOnline? product.img_link! : product.offlineImg! }
                                img_alt={product.img_alt ?? product.tag ?? ""}
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    </>
}