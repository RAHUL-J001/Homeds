import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="aboutSection">
        <h1>HOMEDS</h1>
        <p>
          Homeds provides progressive, and affordable healthcare products,
          accessible on mobile and online for everyone
        </p>
        <p>©Homeds PVT LTD 2021. All rights reserved</p>
      </div>
      <div className="company">
        <h2>Company</h2>
        <h3>About</h3>
        <h3>Testimonials</h3>
        <h3>Find Medicine</h3>
        <h3>Apps</h3>
      </div>
      <div className="region">
        <h2>Region</h2>

        <h3>New Delhi</h3>
        <h3>Mumbai</h3>
        <h3>Chennai</h3>
        <h3>Kolkata</h3>
      </div>
      <div className="help">
        <h2>Help</h2>

        <h3>Help center</h3>
        <h3>Instructions</h3>
        <h3>Contact support</h3>
        <h3>How it works</h3>
      </div>
    </div>
  );
}

export default Footer;
