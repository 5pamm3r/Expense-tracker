import React from "react";
import marketIcon from '../../assets/icons/market.png';
import junkfoodIcon from '../../assets/icons/junkfood.png';
import personalIcon from '../../assets/icons/personal.png';
import healthyIcon from '../../assets/icons/healthy.png';
import clothesIcon from '../../assets/icons/clothes.png';
import entertainmentIcon from '../../assets/icons/entertainment.png';
import othersIcon from '../../assets/icons/others.png';

function useRegister() {
  const categ = [
    {
      value: "market",
      count: 0,
      image: marketIcon,
    },
    {
      value: "junk-food",
      count: 0,
      image: junkfoodIcon,
    },
    {
      value: "personal",
      count: 0,
      image: personalIcon,
    },
    {
      value: "healthy",
      count: 0,
      image: healthyIcon,
    },
    {
      value: "clothes",
      count: 0,
      image: clothesIcon,
    },
    {
      value: "entertainment",
      count: 0,
      image: entertainmentIcon,
    },
    {
      value: "others",
      count: 0,
      image: othersIcon,
    },
  ];
  const [items, setItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [detail, setDetail] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [error, setError] = React.useState(false);
  const [categories, setCategories] = React.useState(categ);
  const [categoryImg, setCategoryImg] = React.useState('')

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
        categoryImg: categoryImg,
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
    price,
    categoryImg
  };
}

export default useRegister;
