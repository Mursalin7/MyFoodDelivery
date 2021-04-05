import React from "react";
import "../css/RestaurantPage.css";
import DeliveryHeader from "./DeliveryHeader";

function RestaurantPage(props) {
    const restaurant = {
        image: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
        address: "Elliot Road"
    }
    return (
        <div className="restaurantPage_container">
            <DeliveryHeader />
            <div className="restaurantPage_components">
                <img src={restaurant.image} alt={props.location.state.name} />
                <h2>{props.location.state.name}</h2>
                <p>{restaurant.address}</p>
                <h3 style={{ color: 'darkorange' }}>Order Online</h3>
            </div>
        </div>
    );
}

export default RestaurantPage;
