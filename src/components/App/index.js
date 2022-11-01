import React from "react";
import Header from "../Header";
import ListItems from "../ListItems";
import NewItem from "../NewItem";
import useRegister from "./useRegister";
import CategoryProgress from "../CategoryProgress";
import Graphics from "../Graphics";
import List from "../List";

function App() {
  const {
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
    onIncome,
    onExpense,
    income,
    expense,
    onDeleteItems,
    onRemoveCountCategory
  } = useRegister();
  return (
    <div className="App">
      <Header items={items} total={total} income={income} expense={expense} />
      <List
        items={items}
        render={(item) => (
          <ListItems
            key={Math.floor(Math.random() * 1000000)}
            id={item.id}
            image={item.categoryImg}
            date={item.date}
            detail={item.detail}
            category={item.category}
            price={item.price}
            status={item.status}
            onDeleteItems={()=>onDeleteItems(item.id)}
            onRemoveCountCategory={()=>onRemoveCountCategory(item.category, item.price)}
          />
        )}
      >
        <NewItem
          detail={detail}
          onSubmit={onSubmit}
          onChangeDetail={onChangeDetail}
          onChangeCategory={onChangeCategory}
          categories={categories}
          category={category}
          price={price}
          onChangePrice={onChangePrice}
          error={error}
          onIncome={onIncome}
          onExpense={onExpense}
        />
      </List>
      <Graphics
        categories={categories}
        render={(cat) => {
          if (cat.value !== "salary") {
            return (
              <CategoryProgress
                key={cat.value}
                progressName={cat.value}
                progressValue={(cat.count * 100) / expense || 0}
              />
            );
          }
        }}
      />
    </div>
  );
}

export default App;
