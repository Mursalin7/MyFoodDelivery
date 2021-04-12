import React from "react";
import {Link} from 'react-router-dom';
import "../css/RestaurantTile.css";

function RestaurantTile({name,image,speciality,averageRate,deliveryTime,rating}) {
    return (
        <Link to={{
            pathname:`/delivery/${name}`,
            state:{name,image}
        }} >
        <div className="restaurantTile_container">
            <div className="restaurantTile_imageContainer"><img src={image} alt={name}/></div>
            <h4>{name}</h4>
            <p className="restaurantTile_rating">{rating}</p>
            <p className="restaurantTile_speciality">{speciality}</p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',color: 'gray'}}>
                <span  style={{ flex:1}}>{averageRate} per person </span><span>{deliveryTime} min</span></div>
        </div>
        </Link>
    );
}

export default RestaurantTile;
