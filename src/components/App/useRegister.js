import React from "react";

function useRegister() {
  const categ = [
    {
      value: "market",
      count: 0,
    },
    {
      value: "junk-food",
      count: 0,
    },
    {
      value: "personal",
      count: 0,
    },
    {
      value: "healthy",
      count: 0,
    },
    {
      value: "clothes",
      count: 0,
    },
    {
      value: "entertainment",
      count: 0,
    },
    {
      value: "others",
      count: 0,
    },
  ];
  const [items, setItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [detail, setDetail] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [error, setError] = React.useState(false);
  const [categories, setCategories] = React.useState(categ);

  React.useEffect(() => {
    //mejorar
    setTotal(items.reduce((prev, current) => prev + current.price, 0));
  }, [items]);

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
        price: parseInt(price),
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
      console.log(categories);
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
    setError(false);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
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
    price,
  };
}

export default useRegister;
