import { useContext } from "react"
import { ShopContext } from "../../context/shopcontext"
import { useParams } from "react-router-dom";
import ProductDisplay from "../productdisplay/productDisplay";

export default function Product() {
    const shopContext = useContext(ShopContext);
    const all_products = shopContext?.products || [];

    const {productId} = useParams();
    const a_product = all_products.find((e)=> e.id === Number(productId));

    return(
        <div>
            <ProductDisplay product={a_product}></ProductDisplay>
        </div>
    )
}