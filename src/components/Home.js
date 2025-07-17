import React from "react";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/51UluP63qVL._SX3000_.jpg"
          alt="Hero Image"
        />
        <Products/>
      </div>
    </div>
  );
};

export default Home;
