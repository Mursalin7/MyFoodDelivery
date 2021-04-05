import React,{useEffect} from "react";
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
                src="https://happilyunprocessed.com/wp-content/uploads/2018/03/Juicest-Burger-Ever-720x1009.jpg"
                alt="Burger"
              />
              <p className="paletCaption">Order Online</p>
            </div>
          </Link>
          <Link to="/dinein">
            <div>
              <img
                className="paletImage"
                src="https://i1.wp.com/mauivang.com/wp-content/uploads/2018/10/eating-out.jpg?fit=2048%2C1152&ssl=1"
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
