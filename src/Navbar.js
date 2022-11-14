//=============================================================================
/**
 * Navbar (Desktop/Mobile View and Toggle Functionality)
 * Handling SignOut Functionality
 */
//=============================================================================

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [{ basket, user }] = useStateValue();
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo " src="images/logo18.png" alt="" />
      </Link>
      <div class="searchAndOptions" id={toggleNavbar ? "hidden" : ""}>
        <div className="header_Search">
          <span className="header_SearchIcon">
            <img src="images/search.svg" alt="" />
          </span>
          <input
            type="text"
            placeholder="Looking For Something..."
            class="header_SearchInput"
          />
        </div>
        <div className="links">
          <div className="header_nav">
            <Link to={!user && "/Login"} className="header_link">
              <div onClick={handleAuthentication} className="header_option">
                <span className="header_optionOne">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
            <p> {user?.email}</p>
          </div>

          <a href="#category" className="header_link">
            <div className="header_option">
              <div className="header_optionTwo">Categories</div>
            </div>
          </a>
          <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
              <img className="header_Cart " src="images/cart.svg" alt="" />
              <span className="basketCount">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <button
        onClick={() => setToggleNavbar(!toggleNavbar)}
        className="hamburger"
      >
        <MenuIcon />
      </button>
    </nav>
  );
}

export default Header;
