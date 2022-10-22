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
  const [className, setClassName] = React.useState('')

  const changeColor = () => {
    if (status === "income") {
      return { color: "green" };
    } else {
      return { color: "red" };
    }
  };
  const onClick = () => {
    if(className !== ''){
      setClassName('')
    } else {
      setClassName('item-selected')
    }
    // onDeleteItems();
    // onRemoveCountCategory();
  };
  return (
    <div className={`ListItems__container ${className}`} id={id} onClick={onClick}>
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
  );
}

export default ListItems;
