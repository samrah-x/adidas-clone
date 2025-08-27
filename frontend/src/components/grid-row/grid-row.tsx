import { useContext, useEffect, useState } from "react";
import "./grid-row.css";
import {  HiOutlineHeart } from "react-icons/hi";
import { ShopContext } from "../../context/shopcontext";
// import { products } from "./products";

const tabs = ["New Arrivals", "Best Sellers", "New to Sale"];

export default function GridRow() {
    const {products} = useContext(ShopContext);
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
    

    const [activeTab, setActiveTab] = useState(tabs[0]);

    const visibleProducts = products.filter(
        (product) =>
            Array.isArray(product.tab)
                ? product.tab.includes(activeTab)
                : product.tab === activeTab
    );

	return (
        <div className="carousel-collection">
            <div className="grid-row">
                <div className="tabs">
                    <div className="collection-tabs">
                        {tabs.map((tab) => (
                        <button
                        key={tab}
                        className={`tab${activeTab === tab ? " active": ""}`}
                        onClick={() =>setActiveTab(tab)}>
                            {tab}
                        </button>))}
                    </div>
                    <div className="view-all-container">
                        <a className="view-all" href="">VIEW ALL</a>
                    </div>
                </div>
                <div className="product-list">
                    <ul>
                        {visibleProducts.map((product) => (
                            <li className="grid-element">
                                <div className="product-card" key={product.id}>
                                    <div className="product-image">
                                        <img src={product.image} alt={product.name} />
                                        <HiOutlineHeart width={24} className="wishlist"/>
                                    </div>
                                    <div className="product-info">
                                        <div className="product-price">${product.price}</div>
                                        <div className="product-name">{product.name}</div>
                                        <div className="product-tag">{product.tag}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
	);
}