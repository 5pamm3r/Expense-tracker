import React from "react";
import "./NewItem.css";

function NewItem({
  onSubmit,
  detail,
  onChangeDetail,
  onChangeCategory,
  categories,
  category,
  price,
  onChangePrice,
  error,
  onIncome,
  onExpense,
}) {
  React.useEffect(() => {
    if (category === "salary") {
      document.getElementById("incomeBtn").disabled = false;
      document.getElementById('expenseBtn').disabled = true;
      document.getElementById('incomeBtn').style.cursor = 'pointer'
      document.getElementById('expenseBtn').style.cursor = 'auto'
      document.getElementById('incomeBtn').style.backgroundColor = '#9f6dfc'
      document.getElementById('expenseBtn').style.backgroundColor = 'transparent'
    } else {
      document.getElementById("incomeBtn").disabled = true;
      document.getElementById('expenseBtn').disabled = false;
      document.getElementById('expenseBtn').style.cursor = 'pointer'
      document.getElementById('incomeBtn').style.cursor = 'auto'
      document.getElementById('incomeBtn').style.backgroundColor = 'transparent';
      document.getElementById('expenseBtn').style.backgroundColor = '#9f6dfc'

    }
  }, [category]);
  return (
    <div className="NewItem__container">
      <form onSubmit={onSubmit}>
        <div className="Inputs__container">
          <input
            className="Detail"
            id="detail"
            placeholder="Description..."
            value={detail}
            onChange={onChangeDetail}
            required
          />
          <select
            className="Category"
            id="category"
            onChange={onChangeCategory}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Select..
            </option>
            <option value={categories[0].value}>{categories[0].value}</option>
            <option value={categories[1].value}>{categories[1].value}</option>
            <option value={categories[2].value}>{categories[2].value}</option>
            <option value={categories[3].value}>{categories[3].value}</option>
            <option value={categories[4].value}>{categories[4].value}</option>
            <option value={categories[5].value}>{categories[5].value}</option>
            <option value={categories[6].value}>{categories[6].value}</option>
            <option disabled>----------------------</option>
            <option className="Salary-option" value="salary">
              Salary
            </option>
          </select>
          <div className="Price__container">
            <span>$</span>
            <input
              id="price"
              placeholder="0"
              type='number'
              value={price}
              onChange={onChangePrice}
              required
            />
          </div>
        </div>
        <div className="SendButtons__container">
          <button
            className="Income-button"
            id="incomeBtn"
            onClick={onIncome}
          >
            Income
          </button>
          <button className="Expense-button" id="expenseBtn" onClick={onExpense}>
            Expense
          </button>
        </div>
      </form>
      {!!error && (
        <p className="Error-category" style={{ color: "red" }}>
          Select category
        </p>
      )}
    </div>
  );
}

export default NewItem;
