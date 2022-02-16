import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { auth } from "./Firebase";
import "./Login.css";

//using use state is the logical part
function Login() {
  const history = useHistory(); //change url programatically basically reroute in browser history
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = (e) => {
    e.preventDefault(); //prevents refreshing in react
    //firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  }; //with this users are stored in firebase database
  const register = (e) => {
    e.preventDefault(); //prevents refreshing in react
    console.log("bitch");
    //firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //if it sucessfully creates new user then auth obj is created
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message)); //registering
  };
  return (
    <div className="Login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {/* here basically whenever we type email it gets stored to email variable read about useState  */}
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signinbutton"
          >
            Sign In
          </button>
          {/* will show in *****/}
        </form>
        <p>
          we wont guarantee any privacy once u accept our terms and conditions
          <p> please do not misuse this application</p>
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
