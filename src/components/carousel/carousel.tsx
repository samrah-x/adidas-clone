import { useState, useEffect } from "react";
import Card from "./card";
import './carousel.css';
import { collection } from "./collection";


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
                        {collection.map((item) => (
                            <Card
                                key={item.id}
                                heading={item.heading}
                                summary={item.summary ?? item.Summary ?? ""}
                                img_link={isOnline? item.img_link! : item.offlineImg! }
                                img_alt={item.img_alt ?? item.tag ?? ""}
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    </>
}