const quick_links = ["help", "orders and returns", "gift cards", "join adiClub"];

export default function Helpbar() {
    return <>
        <nav className="customer_information">
            <ul className="header_top">
                {quick_links.map((link) => (
                    <li>
                        <a href="">{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </>
}