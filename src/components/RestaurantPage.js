import React, { useEffect } from "react";
import "../css/RestaurantPage.css";
import DeliveryHeader from "./DeliveryHeader";

function RestaurantPage(props) {
    const callApi = async () => {
        const response = await fetch("/api/restaurants");
        const body = await response.json();
      //   if (response.status !== 200) throw Error(body.message);
        return body;
      };
    
      useEffect(() => {
      
    callApi()
      .then(res => 
        //this.setState({ response: res.name })  
      console.log(res)
      )
      .catch(err => console.log(err));

   
  }, []);

  const restaurant = {
    address: "Elliot Road"
  };

  return (
    <div className="restaurantPage_container">
      <DeliveryHeader />
      <div className="restaurantPage_components">
        <img src={props.location.state.image} alt={props.location.state.name} />
        <h2>{props.location.state.name}</h2>
        <p>{restaurant.address}</p>
        <h3 style={{ color: "darkorange" }}>Order Online</h3>
      </div>
    </div>
  );
}

export default RestaurantPage;
