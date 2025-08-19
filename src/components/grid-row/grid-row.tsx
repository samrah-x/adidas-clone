import "./grid-row.css";
import {  HiOutlineHeart } from "react-icons/hi";

const products = [
	{
		id: 1,
		name: "Samba OG Shoes",
		price: "$110",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/49d73d8eaccb48ee89ee3feb82ce098c_9366/Samba_OG_Shoes_Black_JI2734_00_plp_standard.jpg", 
		tag: "Originals",
	},
	{
		id: 2,
		name: "SL 72 OG Shoes",
		price: "$110",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/6fb12406f5684eeea66762a868b73731_9366/SL_72_OG_Shoes_Brown_JI0189_00_plp_standard.jpg",
		tag: "Originals",
	},
	{
		id: 3,
		name: "SL 72 OG Shoes",
		price: "$110",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/33846cecf729449aad207f6ec8618d4e_9366/SL_72_OG_Shoes_Brown_JR1640_00_plp_standard.jpg",
		tag: "Originals",
	},
	{
		id: 4,
		name: "Adilette Comfort Slides",
		price: "$35",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/Adilette_Comfort_Slides_Black_GZ5891_00_plp_standard.jpg",
		tag: "Sportswear",
	},
	{
		id: 5,
		name: "Originals Trefoil Sweater",
		price: "$150",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/581a995b7edd45ea945f2fc06b214e54_9366/Originals_Trefoil_Sweater_Blue_JX9267_HM1.jpg",
		tag: "Originals",
	},
    {
		id: 6,
		name: "Real Madrid 25/26 Third Jersey Kids",
		price: "$80",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/be8984df72344e1daab2ac69370c7d0c_9366/Real_Madrid_25-26_Third_Jersey_Kids_Blue_JP3930_000_plp_model.jpg",
		tag: "Sportswear",
	},
    {
		id: 7,
		name: "Lite Racer Adapt 7.0 Shoes",
		price: "$70",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/5c8e526a65324e72abda98266d581a7a_9366/Lite_Racer_Adapt_7.0_Shoes_Black_IH3455_00_plp_standard.jpg",
		tag: "Sportswear",
	},
    {
		id: 8,
		name: "Y-3 Adios 9",
		price: "$280",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d8d6a4fbb2734e74baa0595d6236ea4a_9366/Y-3_Adios_9_Yellow_JR6654_00_plp_standard.jpg",
		tag: "Y-3",
	},
    {
		id: 9,
		name: "Unisex Denim Strapback",
		price: "$30",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e199b6a9d43e47e9a7aa4fbf3dd3941b_9366/Unisex_Denim_Strapback_Blue_JK5241_00_plp_standard.jpg",
		tag: "Originals",
	},
    {
		id: 10,
		name: "Liverpool FC 25/26 Long Sleeve Home Jersey",
		price: "$110",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/165dc0b6d26448ce905ff96c05526668_9366/Liverpool_FC_25-26_Long_Sleeve_Home_Jersey_Red_JV6456_000_plp_model.jpg",
		tag: "Performance",
	},
    {
		id: 11,
		name: "Liverpool FC 25/26 Long Sleeve Home Authentic Jersey",
		price: "$160",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e6bf0a568a6b4595a74813c7919276c6_9366/Liverpool_FC_25-26_Long_Sleeve_Home_Authentic_Jersey_Red_JV6445_HM1.jpg",
		tag: "Performance",
	},
    {
		id: 12,
		name: "Liverpool FC 25/26 Home Jersey",
		price: "$100",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/2e9b3d1665f944f09c921c0174b355bf_9366/Liverpool_FC_25-26_Home_Jersey_Red_JV6423_000_plp_model.jpg",
		tag: "Performance",
	},
];

export default function GridRow() {
	return (
        <div className="carousel-collection">
            <div className="grid-row">
                <div className="tabs">
                    <div className="collection-tabs">
                        <button className="tab active">New Arrivals</button>
                        <button className="tab">Best Sellers</button>
                        <button className="tab">New to Sale</button>
                    </div>
                    <div className="view-all-container">
                        <a className="view-all" href="">VIEW ALL</a>
                    </div>
                </div>
                <div className="product-list">
                    <ul>
                        {products.map((product) => (
                            <li className="grid-element">
                                <div className="product-card" key={product.id}>
                                    <div className="product-image">
                                        <img src={product.image} alt={product.name} />
                                        <HiOutlineHeart width={24} className="wishlist"/>
                                    </div>
                                    <div className="product-info">
                                        <div className="product-price">{product.price}</div>
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