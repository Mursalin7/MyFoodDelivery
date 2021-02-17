import React, { useState } from "react";
import "../css/Header.css";

function Header() {
    const [searchItem, setSearchItem] = useState('')
    return (
        <div className="header" style={{ backgroundImage: `url("https://healthyceleb.com/wp-content/uploads/2014/01/Fast-Food-Diet.jpg")`, filter: 'brightness(70%)' }}  >
            <div className="header_elements">
                <h3>Welcome to Food Hub </h3>
                <p>Discover the best foods in here!</p>
                <input type="text" className="searchBox" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} placeholder="Search for restaurants or food" />
            </div>
        </div>
    );
}

export default Header;
