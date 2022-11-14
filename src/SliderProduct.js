//=============================================================================
/**
 * Deals Of the Day SubItem ANd Add Sliders
 * Add to Basket functionality : For Slider Products
 */
//=============================================================================

import React from "react";
import "./SliderProduct.css";
import { useStateValue } from "./StateProvider";

function SliderProduct({ id, title, image, price, rating }) {
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
    <div>
      <div className="slideProduct">
        <img src={image} alt="dettol" />
        <div className="slideProduct_info">
          <h1 className="slideProduct_name">{title}</h1>
          <div className="slideProduct_rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <img src="images/star.svg" alt="star" />
              ))}
          </div>
          <p className="slideProduct_price">Best Price* Rs {price}</p>
        </div>
        <button  onClick={addToBasket} className="slideProduct_button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SliderProduct;
