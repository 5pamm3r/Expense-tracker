import React from "react";
import "./NewItem.css";

function NewItem({ onSubmit, date, detail, onChangeDetail, onChangeCategory, categories, price, onChangePrice, error }) {
  return (
    <div className="NewItem__container">
      <form onSubmit={onSubmit}>
        <div className="Date__container">
          <span id="date">{date}</span>
        </div>
        <input
          className="Detail"
          id="detail"
          placeholder="Type here..."
          value={detail}
          onChange={onChangeDetail}
          required
        />
        <select
          className="Category"
          id="category"
          onChange={onChangeCategory}
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>Select..</option>
          <option value={categories[0].value}>{categories[0].value}</option>
          <option value={categories[1].value}>{categories[1].value}</option>
          <option value={categories[2].value}>{categories[2].value}</option>
          <option value={categories[3].value}>{categories[3].value}</option>
          <option value={categories[4].value}>{categories[4].value}</option>
          <option value={categories[5].value}>{categories[5].value}</option>
          <option value={categories[6].value}>{categories[6].value}</option>
        </select>
        <div className="Price__container">
          <span>$</span>
          <input
            id="price"
            placeholder="0"
            value={price}
            onChange={onChangePrice}
            required
          />
        </div>
        <button>Save</button>
      </form>
      {!!error && <p className="Error-category" style={{color: 'red'}}>Select category</p>}
    </div> 
  );
}

export default NewItem;
