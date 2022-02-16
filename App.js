import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Payment from "./payment";

//remember importing routes

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //runs only once when component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS-", authUser);
      if (authUser) {
        //if user logs in or was previously logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        }); //this goes to data link layer and change user
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login /> {/*routes have to above home route for them to work*/}
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
//the default route must be at bottom otherwise it wont pick it up
