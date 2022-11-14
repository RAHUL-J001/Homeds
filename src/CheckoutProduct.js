//=============================================================================
/**
 * CheckOut Page - Product Properties
 * Remove From Cart Functionality
 */
//=============================================================================

import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(id, title, image, price, rating);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">Rs {price}</p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <img src="images/star.svg" alt="star" />
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkoutProduct_button">
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
