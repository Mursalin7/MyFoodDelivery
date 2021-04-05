import React from "react";
import "../css/OrderTab.css";
import DeliveryHeader from './DeliveryHeader';
import RestaurantTile from './RestaurantTile';

function OrderTab() {
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
    },
    {
        name: "Bobs fry away",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190416-air-fryer-wings-137-1556204553.jpg?crop=0.6668421052631579xw:1xh;center,top&resize=480:*",
        speciality: "Wings",
        averageRate: 100,
        deliveryTime: 40,
        rating: 4.0
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
            <h4>Delivering Restaurants near you</h4>
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

export default OrderTab;
