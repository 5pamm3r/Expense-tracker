import React from "react";
import './Header.css'
import icon from '../../assets/icons/arrow.png';

function Header({total, income, expense }) {
  const date = new Date().toLocaleString('es-ES', {
    month: 'long',
    year: 'numeric'
  })
  React.useEffect(()=>{
    if(total < 0) {
      document.getElementById('totalBalance').style.color = 'red'
    }else {
      document.getElementById('totalBalance').style.color = 'white'
    }
  },[total])
  return (
    <div className="Header">
      <div className="circle-container"></div>
      <div className="circle2-container"></div>
      <div className="Balance__container">
        <span>CURRENT BALANCE</span>
        <span className="Total-balance" id="totalBalance">${parseFloat(total).toFixed(2)}</span>
        <span>{date}</span>
      </div>
      <div className="IncomeExpense__container">
        <div className="Income__container">
          <div className="IncomeImg__container">
            <img src={icon} alt="income" title="Income" />
          </div>
          <span>${parseFloat(income).toFixed(2)}</span>
        </div>
        <div className="Expense__container">
          <div className="ExpenseImg__container">
            <img src={icon}  alt="expense" title="Expense"/>
          </div>
          <span>${parseFloat(expense).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
