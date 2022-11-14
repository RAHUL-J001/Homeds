import React from "react";
import Categories from "./Categories";
import "./Home.css";
import Footer from "./Footer";

import DealsOfDay from "./DealsOfDay";
import { Link } from "react-router-dom";
function Home() {
    return (
           <div className="home">
      <div className="home_Banner">
        <div className="home_bannerContent">
          <h1>Virtual Healthcare For You</h1>
          <div className="underline"></div>
          <p>
            HOMEDS provides progressive, and affordable healthcare products fast
            and hassle-free, avoid the annoyance of queuing up at your local
            pharmacy.
          </p>
        </div>
        <div className="home_bannerImage">
          <img className="bannerImage" src="images/banner.svg" alt="banner" />
        </div>
      </div>
      <div id="category" className="secondContainer">
        <h1 className="secondContainerTitle">Shop By Category</h1>
        <div className="underline"></div>
        <p className="secondContainerDesc">
          We provide to you the best choiches for you. Get everything you need
          at Homeds.com to take care of your health right from high-quality,
          affordable, authentic prescription medicines and pharmaceuticals
          products.
        </p>
      </div>
      <div class="category_container">
        <div className="category_row">
          <div className="covidEssential">
            <Link to="/covidEssential" style={{ textDecoration: "none" }}>
              <Categories
                id="1"
                title="Covid Essential"
                image="https://www.netmeds.com/images/category/3055/thumb/covid-essentials_0.jpg"
                // image="http://images.squarespace-cdn.com/content/v1/5ca3b2217980b3338106d9bf/1601281040329-8N9JB5K86CQAB1F7N6L1/orca+and+mask.png"
                Desc="Shop for wide collection of Covid essential products and equipments"
              />
            </Link>
          </div>
          <div className="devices">
            <Link to="/devices" style={{ textDecoration: "none" }}>
              <Categories
                id="2"
                title="HealthCare Devices"
                image="https://www.netmeds.com/images/category/665/thumb/devices_0.jpg"
                // image="https://www.bewell-connect.com/wp-content/uploads/2020/11/iot-bwc-960x720.jpg"
                Desc="Choose from huge variety of  Healthcare Devices from India's trusted pharmacy"
              />
            </Link>
          </div>
          <div className="nutritionAndVitamins">
            <Link to="/nutritionAndVitamins" style={{ textDecoration: "none" }}>
              <Categories
                id="3"
                title="Nutrition & Fitness"
                image="https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-2-1605157039.jpg?dim=240x0&dpr=1.5&q=100"
                // image="https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/237523/azani-active-nutrition-multivitamins-supplement-for-men-180-tablets_1_display_1619673651_91a4997d.jpg"
                Desc="Buy 100% genuine Nutrition & Vitamins Supplements Online at Best Prices"
              />
            </Link>
          </div>
        </div>

        <div className="category_row">
          <div className="orderMedicineOnline">
            <Link to="/orderMedicineOnline" style={{ textDecoration: "none" }}>
              <Categories
                id="1"
                title="Order Medicine"
                image="https://www.netmeds.com/images/product-v1/600x600/934397/dr_batras_homeo_immunity_medicine_oral_drops_30_ml_0_0.jpg"
                // image="http://images.squarespace-cdn.com/content/v1/5ca3b2217980b3338106d9bf/1601281040329-8N9JB5K86CQAB1F7N6L1/orca+and+mask.png"
                Desc="Order high-quality medicines online from the comfort of your home ."
                // Desc="Shop for wide collection of Covid essential products and equipments"
              />
            </Link>
          </div>
          <div className="skinCare">
            <Link to="/skinCare" style={{ textDecoration: "none" }}>
              <Categories
                id="2"
                title="Skin Care"
                image="https://www.netmeds.com/images/category/569/thumb/skin-care_2.jpg"
                // image="https://www.bewell-connect.com/wp-content/uploads/2020/11/iot-bwc-960x720.jpg"
                Desc="Choose from huge variety of  Healthcare Devices from India's trusted pharmacy"
              />
            </Link>
          </div>
          <div className="diabeticCare">
            <Link to="/diabeticCare" style={{ textDecoration: "none" }}>
              <Categories
                id="3"
                title="Diabetic Care"
                image="https://www.netmeds.com/images/product-v1/600x600/14373/sugar_free_natura_sweet_200_drops_10_ml_0_3.jpg
                "
                // image="https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/237523/azani-active-nutrition-multivitamins-supplement-for-men-180-tablets_1_display_1619673651_91a4997d.jpg"
                Desc="Buy 100% genuine Vitamins & Health Supplements Online at Best Prices"
              />
            </Link>
          </div>
        </div>
      </div>
      <DealsOfDay />
      <Footer />
      </div>

    )
}

export default Home
