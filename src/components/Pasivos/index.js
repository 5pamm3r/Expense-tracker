import React from "react";
import './Pasivos.css'

function Pasivos({ items, children, render, total }) {
  return (
    <div className="Pasivos">
      <p className="Title">Registro de gastos</p>
      <div className="Activos__container">
        <div className="Subtitles__container">
          <span>Date</span>
          <span>Description</span>
          <span>Category</span>
          <span>Price</span>
        </div>
        {items.map(render)}
      </div>
      {children}
      <p>${total}</p>
    </div>
  );
}

export default Pasivos;
