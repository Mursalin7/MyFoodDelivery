import React from "react";
import "../css/OrderTab.css";
import DeliveryHeader from './DeliveryHeader';
import RestaurantTile from './RestaurantTile';

function Dining() {
    const restaurants = [{
        name: "Lazeez Biryani",
        image: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
        speciality: "Biryani ,Mughlai",
        averageRate: 150,
        deliveryTime: 31,
        rating: 3.7
    },
    {
        name: "Subway",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUyXKr27UeXv2613cjM0AA5E7PNPTMEXy1g&usqp=CAU",
        speciality: "Healthy Food ,Sandwich ,Salad ,Wraps",
        averageRate: 200,
        deliveryTime: 32,
        rating: 3.9
    },
    {
        name: "Dominos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWtXMQ7aSq0Glf2NeppiZSAB-jtzD58tZhQ&usqp=CAU",
        speciality: "Pizza",
        averageRate: 180,
        deliveryTime: 20,
        rating: 4.1
    }
    ]
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
            <div className="Ordertab_restaurants">
                {restaurants.map((each) => (
                    <RestaurantTile name={each.name}
                        image={each.image}
                        speciality={each.speciality}
                        averageRate={each.averageRate}
                        deliveryTime={each.deliveryTime}
                        rating={each.rating}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dining;
