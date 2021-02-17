import React from "react";
//import {Link} from 'react-router';
import "../css/RestaurantTile.css";

function RestaurantTile({name,image,speciality,averageRate,deliveryTime,rating}) {
    return (
        <div className="restaurantTile_container">
            <div className="restaurantTile_imageContainer"><img src={image} alt={name}/></div>
            <h4>{name}</h4>
            <p>{rating}</p>
            <p>{speciality}</p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                <span>{averageRate} per person </span><span>{deliveryTime} min</span></div>
        </div>
    );
}

export default RestaurantTile;
