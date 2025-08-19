import Card from "./card";
import './carousel.css';

const products = [
	{
		id: 1,
		heading: "SAMBA",
		Summary: "The cheetah print Samba is back.",
		image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/49d73d8eaccb48ee89ee3feb82ce098c_9366/Samba_OG_Shoes_Black_JI2734_00_plp_standard.jpg", 
		tag: "A leopard-print Adidas Samba sneaker with red laces against a dark background.",
	},
	{
		id: 2,
		heading: "TEAMGEIST", 
        summary: "Heritage soccer recut for today.",
        img_link: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_teamgeist_originals_fw25_launch_catlp_hp_navigation_card_teaser_1_d_6d10fc5ef9.jpg",
        img_alt: "Profile image of Lamine Yamal wearing the Teamgeist collection and black Megaride shoes.",
	},
	{
		id: 3,
		heading: "ADIZERO EVO SL", 
        summary: "Feel fast. In all aspects of life.",
        img_link: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_adizero_evo_sl_running_fw25_sustain_catlp_navigation_card_teaser_1_d_712a147fc9.jpg",
        img_alt: "A man wearing a navy blue Adidas tracksuit stands against a dark background, his expression serious as he looks directly at the camera.",
	},
	{
		id: 4,
		heading: "Y-3 TENNIS", 
        summary:"As worn by Jessica Pegula.", 
        img_link: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_tennis_x_y3_apparel_us_open_y3_fw25_launch_onsite_pegula_navigation_card_teaser_d_047400bb55.jpg", 
        img_alt: "Jessica Pegula is captured in motion, as if training, wearing pieces from the latest Y-3 Tennis collection.",
	},
];


export default function Carousel() {
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
                                img_link={product.img_link ?? product.image ?? ""}
                                img_alt={product.img_alt ?? product.tag ?? ""}
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    </>
}