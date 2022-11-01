import React from "react";
import { CATEGORIES } from "../Categories";


function useRegister() {
  //item local storage
  const itemsLocalStorage = localStorage.getItem('EXPENSE-TRACKER_V1');
  let parsedItem;
  if(!itemsLocalStorage) {
    localStorage.setItem('EXPENSE-TRACKER_V1', JSON.stringify([]))
    parsedItem = []
  } else {
    parsedItem = JSON.parse(itemsLocalStorage)
  }
  const saveItems = (newItem) => {
    const strg = JSON.stringify(newItem)
    localStorage.setItem('EXPENSE-TRACKER_V1', strg)
    setItems(newItem)
  }
  const [items, setItems] = React.useState(parsedItem)

  //category local storage
  const catLocalStorage = localStorage.getItem("EXPENSE-TRACKER-CAT_V1");
  let parsedCategory;
  if (!catLocalStorage) {
    localStorage.setItem("EXPENSE-TRACKER-CAT_V1", JSON.stringify(CATEGORIES));
    parsedCategory = CATEGORIES;
  } else {
    parsedCategory = JSON.parse(catLocalStorage);
  }
  const saveCategories = (newCategory) => {
    const strg = JSON.stringify(newCategory);
    localStorage.setItem("EXPENSE-TRACKER-CAT_V1", strg);
    setCategories(newCategory);
  };
  const [categories, setCategories] = React.useState(parsedCategory);

  const [total, setTotal] = React.useState(0);
  const [detail, setDetail] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [error, setError] = React.useState(false);
  const [categoryImg, setCategoryImg] = React.useState('')
  const [income, setIncome] = React.useState(0)
  const [expense, setExpense] = React.useState(0)
  const [statusSelected, setStatusSelected] = React.useState('')

  React.useEffect(() => {
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
        id: date+detail+price,
        detail: detail,
        category: category,
        categoryImg: categoryImg,
        price: parseFloat(price),
        status: statusSelected
      });
      categories.forEach((el) => {
        if (el.value === category) {
          const index = categories.findIndex(elem=>elem===el);
          const newCat = [...categories];
          newCat[index].count +=  parseFloat(price);
          saveCategories(newCat);
        }
      });
      saveItems(newArr);
      setDetail("");
      setPrice("");
      document.querySelector("#category").value = "DEFAULT";
      setError(false);
    } else {
      setError(true);
    }
  };
  const onDeleteItems = (id) => {
    const index = items.findIndex(e=>e.id === id)
    const allItems = [...items]
    allItems.splice(index, 1)
    saveItems(allItems)
  }
  const onRemoveCountCategory = (categoryName, price) => {
    const index = categories.findIndex(e=>e.value === categoryName)
    const allCategories = [...categories]
    allCategories[index].count = allCategories[index].count - price;
    saveCategories(allCategories)
  }
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
    onDeleteItems,
    onRemoveCountCategory
  };
}

export default useRegister;
