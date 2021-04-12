import React, { useState } from "react";
import "../css/Header.css";

function Header() {
    const [searchItem, setSearchItem] = useState('')
    return (
        <div className="header" style={{ backgroundImage: `url("https://cdn-prod.medicalnewstoday.com/content/images/articles/314/314819/delicious-buffet-foods.jpg")`, filter: 'brightness(65%)' }}  >
            <div className="header_elements">
                <h3 className="headerText">Welcome to Food Hub</h3>
                <p>Discover the best foods in here!</p>
                <input type="text" className="searchBox" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} placeholder="Search for restaurants or food" />
            </div>
        </div>
    );
}

export default Header;
