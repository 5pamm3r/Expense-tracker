import React from "react";
import './Activos.css'

function Activos({ items, children, render, total }) {
  return (
    <div className="Activos">
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

export default Activos;
