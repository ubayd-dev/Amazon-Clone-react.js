import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingContext from "../data/shopping/shoppingContext";
import CheckoutProducts from "./CheckoutProducts";
import "./Payment.css";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout
          <Link to="/checkout">{basket?.length} items</Link>
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Cape Town, SA</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
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

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
                  </div>
                  <div className="payment_details">{ }</div>
              </div>
              
      </div>
    </div>
  );
};

export default Payment;
