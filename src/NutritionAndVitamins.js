import React from "react";
import Product from "./Product.js";
import Add from "./Add.js";
import Footer from "./Footer.js";

function NutritionAndVitamins() {
  return (
    <div style={{ backgroundColor: "#f7f9fd" }}>
      <div className="heading">
        <h1 className="headingTitle">Nutrition And Vitamins</h1>
        <div className="underline" style={{ width: 300 }}></div>
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
          id="26"
          title="Horlicks Health & Nutrition Drink, Chocolate, Carton 500 G"
          price={200}
          rating={5}
          image="images/nutrition1.webp"
        />
        <Product
          id="27"
          title="Junior Horlicks (4-6 Years) - Health & Nutrition Drink Pet Jar 500gm"
          price={288}
          rating={5}
          image="images/nutrition2.webp"
        />
      </div>
      <div className="product_row">
        <Product
          id="28"
          title="Protinex Chocolate Nutrition Drink 250 G"
          price={324}
          rating={5}
          image="images/nutrition3.webp"
        />
        <Product
          id="29"
          title="Liveasy Foods Healthy Seed Mix"
          price={191}
          rating={4}
          image="images/nutrition4.webp"
        />
        <Product
          id="30"
          title="Oziva Superfood Greens & Herbs "
          price={999}
          rating={4}
          image="images/nutrition5.webp"
        />
      </div>
      <Footer />
    </div>
  );
}

export default NutritionAndVitamins;
