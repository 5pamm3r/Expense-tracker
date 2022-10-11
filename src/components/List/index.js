import React from "react";
import './List.css'

function List({items, render, children}) {
  return (
  <div className="List__container">
      <div className="Items__container">
        {items.map(render)}
      </div>
      {children}
  </div>
  );
}

export default List;
