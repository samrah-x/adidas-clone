import './header.css';

const categories =[
    "MEN", "WOMEN", "KIDS", 
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
                        <a href="" className="categories">{category}</a>
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