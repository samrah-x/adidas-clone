import './header.css';


export default function NavBar () {
    return <>
        <div className="menulinkcontainer">
            <ul>
                <li>
                    <a href="" className="categories">
                        MEN
                    </a>
                </li>
                <li>
                    <a href="" className="categories">
                        WOMEN
                    </a>
                </li>
                <li>
                    <a href="" className="categories">
                        KIDS
                    </a>
                </li>
                <li>
                    <a href="" className="options">
                        BACK TO SCHOOL
                    </a>
                </li>
                <li>
                    <a href="" className="options">
                        SALE
                    </a>
                </li>
                <li>
                    <a href="" className="options">
                        NEW & TRENDING
                    </a>
                </li>
            </ul>
        </div>    
    </>
}