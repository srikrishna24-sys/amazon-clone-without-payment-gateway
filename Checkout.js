import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const userdisp = (user) => {
    if (user) {
      return user.email.replace("@gmail.com", "");
    } else {
      return " please sign in first 😒";
    }
  };
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://as2.ftcdn.net/v2/jpg/04/50/91/67/1000_F_450916782_ephwoRFhkUdv9sHuOegPgutiADRlz41o.jpg"
        />

        <div>
          <h3>Hello,{userdisp(user)} </h3>
          <h2 className="checkout_title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            /> //basically every item in ur cart is iterated and then a product is created u pass paramter to it
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}
//to basically figure out how ur images/divs will be read about flex here used in checkout.css

export default Checkout;
