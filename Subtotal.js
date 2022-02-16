import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getbaskettotal } from "./reducer";
import { useHistory } from "react-router-dom";
let price = 0;

function Subtotal() {
  const history = useHistory(); //gives browser history
  const [{ basket }, dispatch] = useStateValue();
  //   for (let i = 0; i < basket.length; i++) {
  //     price += parseInt(basket[i]["price"]);
  //   }//simple way of doin better way make a fucntion in reducer.js

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbaskettotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
