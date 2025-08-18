import Card from "./card";
import './carousel.css';

export default function Carousel() {
    return <>
        <div className="collection-card">
            <section className="teaser-carousel">
                <div className="grid-row"></div>
                <div className="carousel-system">
                    <ul>
                        <Card heading="SAMBA" summary="The cheetah print Samba is back." 
                        img_link="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/orig_fw25_cheetahsamba_tc_d_59908cbf91.jpg" 
                        img_alt="A leopard-print Adidas Samba sneaker with red laces against a dark background."/>
                        <Card heading="TEAMGEIST" summary="Heritage soccer recut for today." 
                        img_link="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_teamgeist_originals_fw25_launch_catlp_hp_navigation_card_teaser_1_d_6d10fc5ef9.jpg" 
                        img_alt="Profile image of Lamine Yamal wearing the Teamgeist collection and black Megaride shoes."/>
                        <Card heading="ADIZERO EVO SL" summary="Feel fast. In all aspects of life." 
                        img_link="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_adizero_evo_sl_running_fw25_sustain_catlp_navigation_card_teaser_1_d_712a147fc9.jpg"                        
                        img_alt="A man wearing a navy blue Adidas tracksuit stands against a dark background, his expression serious as he looks directly at the camera."/>
                        <Card heading="Y-3 TENNIS" summary="As worn by Jessica Pegula." 
                        img_link="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_tennis_x_y3_apparel_us_open_y3_fw25_launch_onsite_pegula_navigation_card_teaser_d_047400bb55.jpg" 
                        img_alt="Jessica Pegula is captured in motion, as if training, wearing pieces from the latest Y-3 Tennis collection."/>
                    </ul>
                </div>
            </section>
        </div>
    </>
}