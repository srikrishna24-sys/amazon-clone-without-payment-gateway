import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleauthentication = () => {
    if (user) {
      auth.signOut();
    }
  }; //signpout feature in firebase, this removes the user from the site
  const giver = (user) => {
    if (user) {
      return "sign out";
    } else {
      return "sign in";
    }
  };
  const guest = (user) => {
    if (user) {
      return user.email;
    } else {
      return "guest";
    }
  };
  console.log(user);
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" ///to link this image to homepage //ROUTING IN APP.JS
        />
      </Link>
      {/*logo */}
      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>{" "}
      {/*search bar*/}
      <div className="header_nav">
        <Link to="/login">
          {/* //sign out and sig nin button */}
          <div onClick={handleauthentication} className="header_option">
            <span className="header_optionlineone">hello {guest(user)} </span>

            <span className="header_optionlinetwo">
              {/* {user == null ? "Sign in" : "Sign out"} */}

              {giver(user)}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">& orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">prime</span>
        </div>
        <Link to="/checkout">
          {" "}
          <div className="headeroption_Basket">
            <ShoppingCartIcon />
            <span className="header_optionlinetwo header_basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header; //press rfce for rendering default template
