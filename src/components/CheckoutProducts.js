import React, { useContext } from "react";
import ShoppingContext from "../data/shopping/shoppingContext";
import './CheckoutProducts.css'

const CheckoutProducts = ({ id, image, title, rating, price, hideButton }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt="" />

      <div className="checkout_product_info">
        <p className="checkout_product">{title}</p>

        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key ={i}>⭐️</p>
            ))}
        </div>
        <p className="checkout_product_price"> <small>$</small>{price}</p>
           {!hideButton && (
        <button on onClick={removeFromBasketHandler}>
          Remove From Basket
        </button>
      )}
      </div>

   
    </div>
  );
};

export default CheckoutProducts;
