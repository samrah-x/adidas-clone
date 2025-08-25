import { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import './shopCategory.css';
import { Item } from "../item/item";

interface categoryProp {
    category: string;
}

export default function ShopCategory ({category} : categoryProp) {

    const shopContext = useContext(ShopContext);
    const products = shopContext?.products || [];

    // const [activeTab, setActiveTab] = useState(category);
    
    // useEffect(() => {
    //     setActiveTab(category);
    // }, [category]);

    // const visibleProducts = products.filter(
    //     (product) =>
    //         Array.isArray(product.tab)
    //             ? product.tab.includes(activeTab)
    //             : product.tab === activeTab
    // );
    
    // const visibleProducts = products.filter(
    //     (product) =>product.category.includes(category)
    // );
    

    return (
    <div className="shop-category">
        <ul>
            {products.map((product) => 
            (   
                <li key={product.id}>
                    <Item product={product}/>
                </li>
            )
            )}
        </ul>
    </div>)
}