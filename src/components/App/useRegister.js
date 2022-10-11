import React from "react";
import { CATEGORIES } from "../Categories";


function useRegister() {
  
  const [items, setItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [detail, setDetail] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [error, setError] = React.useState(false);
  const [categories, setCategories] = React.useState(CATEGORIES);
  const [categoryImg, setCategoryImg] = React.useState('')
  const [income, setIncome] = React.useState(0)
  const [expense, setExpense] = React.useState(0)
  const [statusSelected, setStatusSelected] = React.useState('')

  React.useEffect(() => {
    //mejorar
    totalIncome()
    totalExpense()
    setTotal(income - expense);
  }, [items, income, expense]);

  const date = new Date().toLocaleString("es-ES", {
    // weekday: "short",
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target[1].value !== "DEFAULT") {
      const newArr = [...items];
      newArr.push({
        date: date,
        detail: detail,
        category: category,
        categoryImg: categoryImg,
        price: parseInt(price),
        status: statusSelected
      });
      categories.forEach((el) => {
        if (el.value === category) {
          const index = categories.findIndex(elem=>elem===el);
          const newCat = [...categories];
          newCat[index].count +=  parseInt(price);
          setCategories(newCat);
        }
      });
      setItems(newArr);
      setDetail("");
      setPrice("");
      document.querySelector("#category").value = "DEFAULT";
      setError(false);
    } else {
      setError(true);
    }
  };
  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
    selectCategoryImg(e.target.value)
    setError(false);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const selectCategoryImg = (category) => {
    categories.forEach(e=>{
      if(e.value === category) {
        setCategoryImg(e.image)
      }
    })
  }
  const onIncome = () => {
    setStatusSelected('income')
  }
  const onExpense = () => {
    setStatusSelected('expense')
  }
  const totalIncome = () => {
    let count = 0;
    items.forEach(e=>{
      if(e.status === 'income'){
        count += e.price;
      }
    })
    setIncome(count)
  }
  const totalExpense = () => {
    let count = 0;
    items.forEach(e=>{
      if(e.status === 'expense'){
        count += e.price;
      }
    })
    setExpense(count)
  }
  // const onDelete = (id) => {
  //   const index = items.findIndex(e=>e.)
  // }
  return {
    error,
    onSubmit,
    onChangeDetail,
    onChangeCategory,
    onChangePrice,
    total,
    items,
    date,
    detail,
    categories,
    category,
    price,
    categoryImg,
    onIncome,
    onExpense,
    income,
    expense,
  };
}

export default useRegister;
