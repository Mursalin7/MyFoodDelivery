import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../css/Home.css";

function Home() {  
  return (
    <div>
      <Header />
      <div className="home">
        <div className="palet">
          <Link to="/delivery">
            <div>
              <img
                className="paletImage"
                caption="Order Online"
                src="../burger.jpg"
                alt="Burger"
              />
              <p className="paletCaption">Order Online</p>
            </div>
          </Link>
          <Link to="/dinein">
            <div>
              <img
                className="paletImage"
                src="../dining.jpg"
                alt="DineIn"
              />
              <p className="paletCaption">Dine Out</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
