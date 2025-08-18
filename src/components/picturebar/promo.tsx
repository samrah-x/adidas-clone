import './picturebar.css';

export default function Promo() {

    const summerHeading = "EXTRA 30% OFF";
    const summerSummary = <><span>30% off full price and sale with code SUMMER until 8/21.</span><br/>
                        <span>Exclusions apply.</span></>

    const superStarHeading = "SUPERSTAR";
    const superStarSummary = <span>Because icons wear the original icon.</span>;

    return <>
        <div className="promo">
                <div className="heading">
                    <h2>{superStarHeading}</h2>
                </div>
                <div className="banner-summary">
                    <p>
                        {/* <span> */}
                            {superStarSummary}
                        {/* </span> */}
                    </p>
                </div>
            </div>
    </>
}