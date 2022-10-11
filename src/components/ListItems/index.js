import React from "react";
import "./ListItems.css";

function ListItems({ image, date, detail, category, price, status  }) {
  //Se rompió esto.
  const changeColor =()=> {
    if(status === 'income') {
      return {color:'green'}
    }else {
      return {color:'red'}
    }
  }
  return (
    <div className="ListItems__container">
      <div className="ItemIcon__container">
        <img src={image} alt="category representation" title={category} />
      </div>
      <div className="Detail__container">
        <span>{detail}</span>
        <span>{date}</span>
      </div>
      <span>{category}</span>
      <span style={changeColor()}>${price}</span>
    </div>
  );
}

export default ListItems;
