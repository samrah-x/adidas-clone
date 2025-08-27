import { Link } from "react-router-dom";
import './item.css';
import { useEffect, useState } from "react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  // image_offline: string;
  tag: string;
  tab: string[];
  category: string[];
}

export const Item = ({ product }: { product: ProductProps }) => {
    // const [isOnline, setIsOnline] = useState(navigator.onLine);
                
    // useEffect(() => {
    //     const handleOnline = () => setIsOnline(true);
    //     const handleOffline = () => setIsOnline(false);

    //     window.addEventListener("online", handleOnline);
    //     window.addEventListener("offline", handleOffline);

    //     return () => {
    //         window.removeEventListener("online", handleOnline);
    //         window.removeEventListener("offline", handleOffline);
    //     };
    // }, []);

  return (
    <div className="item">
        <div className="product-image">
            <Link to={`/product/${product.id}`}>
              {/* <img src={isOnline? product.image : product.image_offline} alt={product.name}/> */}
              <img src={product.image } alt={product.name}/>
            </Link>
        </div>
        <div className="product-info">
            <div className="product-price">${product.price}</div>
            <div className="product-name">{product.name}</div>
            <div className="product-tag">{product.tag}</div>        
        </div>
    </div>
  );
};