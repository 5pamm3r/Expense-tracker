import React from "react";
import "./ItemPasivo.css";

function ItemPasivo({ image, date, detail, category, price }) {
  console.log(image);
  return (
    <div className="Item__container">
      <div className="ItemIcon__container">
        <img src={image} alt="category representation" title={category} />
      </div>
      <div className="Detail__container">
        <span>{detail}</span>
        <span>{date}</span>
      </div>
      <span>{category}</span>
      <span>${price}</span>
    </div>
  );
}

export default ItemPasivo;
