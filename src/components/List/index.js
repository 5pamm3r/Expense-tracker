import React from "react";
import './List.css'

function List({items, render, children, activeCategory}) {
  return (
  <div className={`List__container ${!!activeCategory?'active':'disabled'}`}>
      <div className="Items__container">
        {items.map(render)}
      </div>
      {children}
  </div>
  );
}

export default List;
