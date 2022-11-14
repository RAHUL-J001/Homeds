import React from "react";
import Product from "./Product.js";
import Add from "./Add.js";
import Footer from "./Footer.js";

function OrderMedicineOnline() {
  return (
    <div style={{ backgroundColor: "#f7f9fd" }}>
      <div className="heading">
        <h1 className="headingTitle">Order Medicine</h1>
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
          id="31"
          title="Dulcoflex 5mg Tablet, Constipation Laxative, 1 Strip-10 Tablet"
          price={190}
          rating={5}
          image="images/medicine3.webp"
        />
        <Product
          id="32"
          title="Cremaffin Constipation Relief Liquid - Mixed Fruit 225ml
          "
          price={156}
          rating={4}
          image="images/medicine2.webp"
        />
      </div>
      <div className="product_row">
        <Product
          id="33"
          title="Ecosprin 75MG strip of 14 Tablets"
          price={119}
          rating={4}
          image="images/medicine1.webp"
        />

        <Product
          id="34"
          title="Healthvit Magneed  Supplement Tablets
          "
          price={420}
          rating={4}
          image="images/medicine4.webp"
        />
        <Product
          id="35"
          title="Digene Gel Acidity - 450ml Mint Flavour"
          price={158}
          rating={5}
          image="images/medicine5.webp"
        />
      </div>
      <Footer />
    </div>
  );
}

export default OrderMedicineOnline;
