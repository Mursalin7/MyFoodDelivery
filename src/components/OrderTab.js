import React from "react";
import "../css/OrderTab.css";
import DeliveryHeader from './DeliveryHeader';
import RestaurantTile from './RestaurantTile';

function OrderTab() {
    const restaurants = [{
        name: "Lazeez Biryani",
        image: "https://i1.wp.com/mauivang.com/wp-content/uploads/2018/10/eating-out.jpg?fit=2048%2C1152&ssl=1",
        speciality: "Biryani,Mughlai",
        averageRate: 150,
        deliveryTime: 31,
        rating: 3.7
    },
    {
        name: "Subway",
        image: "https://happilyunprocessed.com/wp-content/uploads/2018/03/Juicest-Burger-Ever-720x1009.jpg",
        speciality: "Healthy Food,Sandwich,Salad,Wraps",
        averageRate: 200,
        deliveryTime: 32,
        rating: 3.9
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
