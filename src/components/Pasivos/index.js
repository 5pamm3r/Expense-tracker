import React from "react";
import './Pasivos.css'
import incomeIcon from '../../assets/icons/income.png';
import expenseIcon from '../../assets/icons/expense.png'

function Pasivos({ items, children, render, total }) {
  const date = new Date().toLocaleString('es-ES', {
    month: 'long',
    year: 'numeric'
  })
  return (
    <div className="Pasivos">
      <div className="Balance__container">
        <span>CURRENT BALANCE</span>
        <span>${total}</span>
        <span>{date}</span>
      </div>
      <div className="IncomeExpense__container">
        <div className="Income__container">
          <div>
            <img src={incomeIcon} alt="income" title="Income" />
          </div>
          <span>${}</span>
        </div>
        <div className="Expense__container">
          <div>
            <img src={expenseIcon}  alt="expense" title="Expense"/>
          </div>
          <span>${}</span>
        </div>
      </div>
      <p className="Title">Registro de gastos</p>
      <div className="Activos__container">
        {items.map(render)}
      </div>
      {children}
      <p>${total}</p>
    </div>
  );
}

export default Pasivos;
