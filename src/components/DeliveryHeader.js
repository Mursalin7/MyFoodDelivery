import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "../css/DeliveryHeader.css";

function DeliveryHeader() {
    const [searchItem, setSearchItem] = useState('')
    return (
        <div className="headerContainer" >
                <h3><Link to="/">Food Hub</Link></h3>
                <div className="searchBox_deliveryHeader">
                <input type="text" className="searchBox" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} placeholder="Search for restaurants or food" />
                </div>
        </div>
    );
}

export default DeliveryHeader;
