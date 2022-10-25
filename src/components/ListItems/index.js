import React from "react";
import "./ListItems.css";

function ListItems({
  image,
  date,
  detail,
  category,
  price,
  status,
  id,
  onDeleteItems,
  onRemoveCountCategory,
}) {
  const [className, setClassName] = React.useState("");

  const changeColor = () => {
    if (status === "income") {
      return { color: "green" };
    } else {
      return { color: "red" };
    }
  };
  const onClick = () => {
    if (className !== "") {
      setClassName("");
    } else {
      setClassName("item-selected");
    }
  };
  const onDelete = () => {
    //no funciona bien el delete. Borra otra cosa.
    onRemoveCountCategory();
    onDeleteItems();
  };
  return (
    <div
      className='ListItems__container'
      id={id}
      onClick={onClick}
    >
      <div className={`List-item ${className}`}>
        <div className="ItemIcon__container">
          <img src={image} alt="category representation" title={category} />
        </div>
        <div className="Date__container">
          <span>{category}</span>
          <span>{date}</span>
        </div>
        <span>{detail}</span>
        <span style={changeColor()}>${parseFloat(price).toFixed(2)}</span>
      </div>
      <button className={`Delete-button ${!!className && 'Button-visible'}`} onClick={onDelete}>
        X
      </button>
    </div>
  );
}

export default ListItems;
