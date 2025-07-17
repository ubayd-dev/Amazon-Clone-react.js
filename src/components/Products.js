import React from "react";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="Transparant Crystal Gamepad for NS Switch Controller Wireless BT Game Controller Gamepad Joystick for Switch PS3 PS4 Android PC"
          image="https://m.media-amazon.com/images/I/51yXtxE3irL._SR480,440_.jpg"
          rating={4}
          price={449}
        />
        <Product
          id="2"
          title="SteelSeries Arctis Nova 1 Multi-Platform Premium Wired Gaming Headset, Black"
          image="https://m.media-amazon.com/images/I/31cm2q1bCFL._SR480,440_.jpg"
          rating={4}
          price={1199}
        />
      </div>
      <div className="products_row">
            <Product
          id="3"
          title="Playseat Trophy - Red"
          image="https://m.media-amazon.com/images/I/51JhA-bbGYL._AC_SX679_.jpg"
          rating={4}
          price={14321}
        />
             <Product
          id="4"
          title="Nintendo Switch 2"
          image="https://m.media-amazon.com/images/I/717JrHodikL._AC_SX342_SY445_.jpg"
          rating={4}
          price={12}
        />
             <Product
          id="5"
          title="JVC LT-43N7115 UHD 4K 43-Inch Smart LED Television"
          image="https://m.media-amazon.com/images/I/71t9rltuv0L._AC_SX300_SY300_.jpg"
          rating={3}
          price={3999}
        />
      </div>
      <div className="products_row">
              <Product
          id="6"
          title="JVC LT-43N7115 UHD 4K 43-Inch Smart LED Television"
          image="https://m.media-amazon.com/images/I/71t9rltuv0L._AC_SX300_SY300_.jpg"
          rating={3}
          price={3999}
        />
      </div>

    </>


  );
};

export default Products;
