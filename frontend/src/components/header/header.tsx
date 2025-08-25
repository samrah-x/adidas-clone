import './header.css';
import NavBar from "./navbar";
import Helpbar from "./helpbar";
import Logo from "./logo";
import MenuActions from "./menuactions";
import { useEffect, useState } from "react";

export default function Header () {
    const [hidden, setHidden] = useState(false);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setHidden(true); // hide header
            } else if (window.scrollY < lastScrollY) {
                setHidden(false); // show header
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <>
    <div className={`header ${hidden ? "hidden" : ""}`}>
        <Helpbar/>
        <div className="header-bottom">
            <Logo/>
            <NavBar/>
            <MenuActions/>
        </div>

    </div>
    </>
}
