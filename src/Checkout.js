//=============================================================================
/**
 * No Purchased Product - Empty CheckOut Page
 * Purchased Product - Checkout Page
 */
//=============================================================================

import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket?.length === 0 ? (
          <div>
            <h1 className="checkoutLeftEmpty_Title">
              Your Shopping Basket is Empty
            </h1>
            <p className="checkoutLeftEmpty_content">
              Your have no items in your basket . To buy one or more items,
              click "Add to Cart" next to item.
            </p>
          </div>
        ) : (
          <div className="checkoutLeft_SubContainer">
            <div>
              <img
                className="checkoutBanner"
                src="images/checkoutBanner3.jpg"
                alt="add"
              />
            </div>
            <h1 className="checkoutLeft_title">Review Your Orders</h1>
            <div className="checkoutLeft_title_underline"></div>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout_right">{basket.length > 0 && <Subtotal />}</div>
    </div>
  );
}

export default Checkout;
