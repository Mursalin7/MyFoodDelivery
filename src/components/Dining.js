import React from "react";
//import {Link} from 'react-router';
import "../css/OrderTab.css";
import DeliveryHeader from './DeliveryHeader';

function Dining() {
    return (
        <div className="Ordertab">
            <DeliveryHeader />
            <div className="Ordertab_options">
                <ul>
                    <li>Delivery</li>
                    <li>Dine-In</li>
                </ul>
            </div>
            <h4>Dine-in Restaurants near you</h4>
        </div>
    );
}

export default Dining;
