import React from "react";
import Product from "./Product.js";
import Add from "./Add.js";
import Footer from "./Footer.js";

function SkinCare() {
  return (
    <div style={{ backgroundColor: "#f7f9fd" }}>
      <div className="heading">
        <h1 className="headingTitle">SkinCare Products</h1>
        <div className="underline" style={{ width: 300 }}></div>
      </div>
      <div className="add">
        <Add
          image1="images/skincare.jpg"
          image2="images/skincare2.jpg"
          image3="images/covidBanner3.jpg"
        />
      </div>

      <div className="product_row">
        <Product
          id="36"
          title="Nivea Cocoa Nourish Body Lotion 400 Ml"
          price={310}
          rating={4}
          image="images/skincare1.webp"
        />
        <Product
          id="37"
          title="
          Lotus Herbals Uv-protect Body Lotion 250 Ml"
          price={219}
          rating={5}
          image="images/skincare2.webp"
        />
        <Product
          id="38"
          title="Natural Wash Avocado Moisturizing Lotion"
          price={150}
          rating={3}
          image="images/skincare3.webp"
        />
      </div>
      <div className="product_row">
        <Product
          id="39"
          title="Nivea Aloe Hydration Body Lotion 400 Ml"
          price={310}
          rating={5}
          image="images/skincare4.webp"
        />
        <Product
          id="40"
          title="Nivea Soft, Light Moisturising Cream - 500ml"
          price={419}
          rating={4}
          image="images/skincare5.webp"
        />
        <Product
          id="41"
          title="Nivea Frangipani & Body Wash - 500 Ml
          "
          price={219}
          rating={4}
          image="images/skincare6.webp"
        />
      </div>
      <Footer />
    </div>
  );
}

export default SkinCare;
