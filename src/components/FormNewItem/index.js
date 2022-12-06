import React from "react";
import "./FormNewItem.css";

function FormNewItem({
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
  const [expenseActive, setExpenseActive] = React.useState(false);
  const [incomeActive, setIncomeActive] = React.useState(false);

  React.useEffect(() => {
    if (category === "salary") {
      setIncomeActive(true);
      setExpenseActive(false);
      document.getElementById("incomeBtn").disabled = false;
      document.getElementById("expenseBtn").disabled = true;
    } else {
      setExpenseActive(true);
      setIncomeActive(false);
      document.getElementById("incomeBtn").disabled = true;
      document.getElementById("expenseBtn").disabled = false;
    }
  }, [category]);
  return (
    <div className="FormNewItem__container">
      <p>Add new item</p>
      <form onSubmit={onSubmit}>
        <div className="Inputs__container">
          <input
            className="Description"
            id="description"
            placeholder="Description..."
            value={detail}
            onChange={onChangeDetail}
            autoFocus
            required
          />
          <input
            id="price"
            className="Count"
            placeholder="$0"
            type="number"
            value={price}
            onChange={onChangePrice}
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
            <option value={categories[7].value}>{categories[7].value}</option>
            <option disabled>----------------------</option>
            <option className="Salary-option" value="salary">
              Salary
            </option>
          </select>
          {!!error && (
            <p className="Error-category">
              Select category
            </p>
          )}
        </div>
        <div className="SendButtons__container">
          <button
            className={`Income-button ${incomeActive}`}
            id="incomeBtn"
            onClick={onIncome}
          >
            Income
          </button>
          <button
            className={`Expense-button ${expenseActive}`}
            id="expenseBtn"
            onClick={onExpense}
          >
            Expense
          </button>
        </div>
      </form>

      <div className="Dark-background"></div>
    </div>
  );
}

export default FormNewItem;
