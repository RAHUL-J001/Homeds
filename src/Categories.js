import React from "react";
import "./Categories.css";

function Categories({ id, image, title, Desc }) {
  return (
    <div className="category">
      <img className="category_image" src={image} alt="" />
      <h2 className="category_title">{title}</h2>
      <p className="category_description">{Desc}</p>
    </div>
  );
}

export default Categories;
