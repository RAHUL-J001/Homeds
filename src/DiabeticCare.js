import React from "react";
import Product from "./Product.js";
import Add from "./Add.js";
import Footer from "./Footer.js";

function DiabeticCare() {
  return (
    <div style={{ backgroundColor: "#f7f9fd" }}>
      <div className="heading">
        <h1 className="headingTitle">HealthCare Devices</h1>
        <div className="underline"></div>
      </div>
      <div className="add">
        <Add
          image1="images/nutrition.jpg"
          image2="images/nutrition2.jpg"
          image3="images/deviceBanner2.jpg"
        />
      </div>

      <div className="product_row">
        <Product
          id="21"
          title="Ensure Diabetes Care Powder - Chocolate Flavour 200 gm (Refill Pack)"
          price={368}
          rating={5}
          image="images/diabetes.jpg"
        />
        <Product
          id="22"
          title="B-Protin Nutritional Powder Supplement - Chocolate 500 gm
          "
          price={462}
          rating={4}
          image="images/diabetes2.jpg"
        />
      </div>
      <div className="product_row">
        <Product
          id="23"
          title="Accu-Chek Active Glucose Monitor with Free 10 Test Strips
          "
          price={1279}
          rating={5}
          image="images/diabetes3.jpg"
        />
        <Product
          id="24"
          title="Narbada Ayurveda Dia Herb Diabetes Herbal Powder 100 gm
          "
          price={218}
          rating={3}
          image="images/diabetes4.jpg"
        />
        <Product
          id="25"
          title="Pro360 Diabetic Nutritional Powder - Real Badam Flavour 250 gm
          "
          price={316}
          rating={5}
          image="images/diabetes5.jpg"
        />
      </div>
      <Footer />
    </div>
  );
}

export default DiabeticCare;
