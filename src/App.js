import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Login from "./Login.js";

import CovidEssential from "./CovidEssential";
import Devices from "./Devices";
import OrderMedicineOnline from "./OrderMedicinesOnline";
import SkinCare from "./SkinCare";
import NutritionAndVitamins from "./NutritionAndVitamins";
import DiabeticCare from "./DiabeticCare";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";



function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
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
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/covidEssential">
            <Navbar />
            <CovidEssential />
          </Route>
          <Route path="/devices">
            <Navbar />
            <Devices />
          </Route>
          <Route path="/orderMedicineOnline">
            <Navbar />
            <OrderMedicineOnline />
          </Route>
          <Route path="/nutritionAndVitamins">
            <Navbar />
            <NutritionAndVitamins />
          </Route>
          <Route path="/skinCare">
            <Navbar />
            <SkinCare />
          </Route>
          <Route path="/diabeticCare">
            <Navbar />
            <DiabeticCare />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
