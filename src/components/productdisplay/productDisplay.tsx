import './productDisplay.css';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  image_offline: string;
  tag: string;
  tab: string[];
  category: string[];
}


export default function ProductDisplay (props: { product?: ProductProps }) {
    const product = props;

    return (
        <div className="productDisplay">
            <div className="displayLeft">
                <div className="displayMainImg">
                    <img src={product.product?.image} alt={product.product?.name}/>
                </div>
            </div>
            <div className="displayRight">
                <h1>{product.product?.name}</h1>
                <h4>{product.product?.category.join(", ")}</h4>
                <div className="price">
                    <p>${product.product?.price}</p>
                </div>
                <div className="sizes">
                    <ul>
                        <li>M 5 / W 6</li>
                        <li>M 5.5 / W 6.5</li>
                        <li>M 6 / W 7</li>
                        <li>M 6.5 / W 7.5</li>
                    </ul>
                </div>
                <button className='add-to-bag'>ADD TO BAG</button>
            </div>
        </div>
    )
}