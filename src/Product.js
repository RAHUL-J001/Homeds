//=============================================================================
/**
 * Single Product component
 * Handling Add To basket Functionality
 */
//=============================================================================

import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="dettol" />
      <div className="product_info">
        <h1 className="product_name">{title}</h1>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <img src="images/star.svg" alt="star" />
            ))}
        </div>
        <p className="product_price">Best Price* Rs {price}</p>
      </div>
      <button onClick={addToBasket}  className="product_button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
