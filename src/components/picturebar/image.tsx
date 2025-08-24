import './picturebar.css'
import { useState, useEffect } from 'react';
import localImageSuperStar from "../../assets/hero-banner.avif";

export default function Image() {
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

    const superstarLinkOffline = localImageSuperStar;
    // const summerLinkOnline = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/promo_fw25_august_bnr_d_06394406e7.jpg";
    const superstarLinkOnline = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_superstar_originals_fw25_sustain_hp_banner_hero4_asset_d_ee4c0b8155.jpg";

    return <>
        <div className="picture">
            <picture>
                <source srcSet= {isOnline ? superstarLinkOnline : superstarLinkOffline} media="(min-width: 768px)" ></source>
                <img src= {isOnline ? superstarLinkOnline : superstarLinkOffline} 
                onError={(e) => (e.currentTarget.src = superstarLinkOffline)}
                alt="The image features a green Adidas bag with the text &quot;SUMMER SAVINGS&quot; prominently displayed against a blurred background of a body of water, likely a beach or lake." loading="eager" fetchPriority="high"></img>
            </picture>
        </div>
    </>
}