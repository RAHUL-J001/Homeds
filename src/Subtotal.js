//=============================================================================
/**
 * SubTotal Component of CheckOut page
 */
//=============================================================================

import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h4 className="subtotal_title">
              Subtotal ({basket.length} items):
            </h4>
            <p className="no_of_item">
              <strong>{value}</strong>
            </p>
            <p className="subtotal_gift">
              <input type="checkbox" /> Have a redeem code?
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs "}
      />
      <button className="proceedButton">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
