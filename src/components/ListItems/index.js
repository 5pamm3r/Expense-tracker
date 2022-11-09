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
  const [listClassName, setListClassName] = React.useState("");
  const [deleteActive, setDeleteActive] = React.useState('')

  const changeColor = () => {
    if (status === "income") {
      return { color: "green" };
    } else {
      return { color: "red" };
    }
  };
  const onClick = () => {
    if (listClassName !== "") {
      setListClassName("");
    } else {
      setListClassName("item-selected");
    }
  };
  const onDelete = () => {
    setDeleteActive('active')
    setTimeout(()=>{
      onRemoveCountCategory();
      onDeleteItems();
    }, 500)
  };
  return (
    <div
      className={`ListItems__container ${deleteActive}`}
      id={id}
      onClick={onClick}
    >
      <div className={`List-item ${listClassName}`}>
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
      <button className={`Delete-button ${!!listClassName && 'Button-visible'}`} onClick={onDelete}>
        X
      </button>
    </div>
  );
}

export default ListItems;
