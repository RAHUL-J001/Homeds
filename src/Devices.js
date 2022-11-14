import React from "react";
import Add from "./Add.js";
import Footer from "./Footer.js";
import Product from "./Product.js";

function Devices() {
  return (
    <div style={{ backgroundColor: "#f7f9fd" }}>
      <div className="heading">
        <h1 className="headingTitle">HealthCare Devices</h1>
        <div className="underline"></div>
      </div>
      <div className="add">
        <Add
          image1="images/deviceBanner.png"
          image2="images/deviceBanner2.jpg"
          image3="images/covidBanner3.jpg"
        />
      </div>
      <div className="product_row">
        <Product
          id="16"
          title="Newnik Pulse Oximeter With Audio Visual Alarm (PX701) - Royal Blue "
          price={2190}
          rating={4}
          image="images/device1.jpg"
        />
        <Product
          id="17"
          title="Sahyog Wellness Multi Function  Object Infrared Thermometer "
          price={986}
          rating={5}
          image="images/device3.jpg"
        />
      </div>
      <div className="product_row">
        <Product
          id="18"
          title="Helyxon Oxy 1 Basic Oximeter(with Bluetooth)"
          price={1499}
          rating={5}
          image="images/device2.jpg"
        />
        <Product
          id="19"
          title="Sahyog Wellness Aluminium Digital Thermometer"
          price={110}
          rating={4}
          image="images/device4.jpg"
        />
        <Product
          id="20"
          title="Zebronics Fingertip Pulse Oximeter (ZEB-FPO500)"
          price={1409}
          rating={4}
          image="images/device5.jpg"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Devices;
