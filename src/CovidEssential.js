import React from "react";
import Product from "./Product.js";
import Add from "./Add.js";
import Footer from "./Footer.js";

function CovidEssential() {
  return (
    <div style={{ backgroundColor: "#f7f9fd" }}>
      <div className="heading">
        <h1 className="headingTitle">Covid Essentials</h1>
        <div className="underline"></div>
      </div>

      <div className="add">
        <Add
          image1="images/covidBanner.jpg"
          image2="images/covidBanner2.jpg"
          image3="images/covidBanner3.jpg"
        />
      </div>

      <div className="product_row">
        <Product
          id="1"
          title="Wildcraft Hypashield W95 Reusable Outdoor Protection Face Mask "
          price={100}
          rating={5}
          image="images/covid1.jpg"
        />
        <Product
          id="2"
          title="Puric InstaSafe Hygiene Hand Sanitizer Gel - Camphor & Citrus 100 ml"
          price={150}
          rating={4}
          image="images/covid4.jpg"
        />
      </div>
      <div className="product_row">
        <Product
          id="3"
          title="Venus VSFTP Pulse Oximeter (C101H1)"
          price={400}
          rating={4}
          image="images/covid5.jpg"
        />
        <Product
          id="4"
          title="Amrutanjan Hand Sanitizer 60 ml
          "
          price={30}
          rating={3}
          image="images/covid3.jpg"
        />
        <Product
          id="5"
          title="Dettol Antiseptic Hand Sanitizer 100 ml"
          price={150}
          rating={5}
          image="https://m.media-amazon.com/images/I/61DuQuJfAlS._SX569_.jpg"
        />
      </div>
      <div className="product_row">
        <Product
          id="6"
          title="Kapiva Wild Tulsi Giloy Juice 1 ltr"
          price={300}
          rating={3}
          image="images/covid6.jpg"
        />
        <Product
          id="7"
          title="Face Shield with Elastic Band"
          price={21}
          rating={4}
          image="images/covid7.jpg"
        />
        <Product
          id="8"
          title="Ciphands Antiseptic Hand Sanitizer 100 ml"
          price={50}
          rating={5}
          image="images/covid8.jpg"
        />
      </div>
      <Footer />
    </div>
  );
}

export default CovidEssential;
