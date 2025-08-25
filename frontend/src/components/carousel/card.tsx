import './carousel.css';


interface CardProp {
    heading: string;
    summary: string;
    img_link: string;
    img_alt: string;
}

export default function Card ({heading, summary, img_link, img_alt}: CardProp) {
    return<>
    <div className='card-wrapper'>
        <li className="card">
            <a href="">
                <div className="card-content">
                    <div className="card-media">
                        <div className="fillImage">
                            <picture>
                                <img src={img_link} alt={img_alt} loading="lazy" fetchPriority="auto"></img>
                            </picture>
                        </div>
                    </div>
                    <div className="card-details">
                        <div className="card-heading">
                            <span className="heading-title">
                                <h4>{heading}</h4>
                            </span>
                            <p className="heading-summary">{summary}</p>
                        </div>
                        <div className="card-footer">
                            <button className='shop-now-link' type="button">
                                <p>SHOP NOW</p>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    </div>
    </>
}