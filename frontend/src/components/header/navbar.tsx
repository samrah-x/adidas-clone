import { Link } from 'react-router-dom';
import './header.css';

const categories =[
    {
        title: "MEN",  
        route: '/men-shop',  
    },
    {   
        title: "WOMEN",  
        route: '/women-shop',  
    },
    {
        title: "KIDS",  
        route: '/kids-shop',  
    }    
];

const options = [
    "BACK TO SCHOOL", "SALE", "NEW & TRENDING",
];

export default function NavBar () {
    return <>
        <div className="menulinkcontainer">
            <ul>
                {categories.map((category) =>(
                    <li>
                        <Link to={category.route}><a href="" className="categories">{category.title}</a></Link>
                    </li>
                ))}
                {options.map((option) =>(
                    <li>
                        <a href="" className="options">{option}</a>
                    </li>
                ))}
            </ul>
        </div>    
    </>
}