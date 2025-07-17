import { useContext } from "react";
import React from "react";
import ShoppingContext from "../data/shopping/shoppingContext";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import SubTotal from "./SubTotal";

const Checkout = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  console.log("Basket contents:", basket);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProducts
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
