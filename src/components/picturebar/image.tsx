import './picturebar.css'

export default function Image() {
    const summerLink = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/promo_fw25_august_bnr_d_06394406e7.jpg";
    const superstarLink = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_superstar_originals_fw25_sustain_hp_banner_hero4_asset_d_ee4c0b8155.jpg";

    return <>
        <div className="picture">
            <picture>
                <source srcSet= {superstarLink} media="(min-width: 960px)" width="2880" height="1200"></source>
                <source srcSet= {superstarLink} media="(max-width: 767px)" width="750" height="1000"></source>
                <source srcSet= {superstarLink} media="(min-width: 768px)" width="1600" height="1600"></source>
                <img src= {superstarLink} alt="The image features a green Adidas bag with the text &quot;SUMMER SAVINGS&quot; prominently displayed against a blurred background of a body of water, likely a beach or lake." loading="eager" fetchPriority="high"></img>
            </picture>
        </div>
    </>
}