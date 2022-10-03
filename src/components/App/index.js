import React from "react";
import Pasivos from '../Pasivos'
import ItemPasivo from "../ItemPasivo";
import NewItem from "../NewItem";
import useRegister from "./useRegister";
import CategoryProgress from "../CategoryProgress";
import Graphics from "../Graphics";

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
    price,
  } = useRegister();
  return (
    <div className="App">
      <Pasivos
        items={items}
        total={total}
        render={(item) => (
          <ItemPasivo
            key={Math.floor(Math.random() * 1000000)}
            image={item.categoryImg}
            date={item.date}
            detail={item.detail}
            category={item.category}
            price={item.price}
          />
        )}
      >
        <NewItem
          date={date}
          detail={detail}
          onSubmit={onSubmit}
          onChangeDetail={onChangeDetail}
          onChangeCategory={onChangeCategory}
          categories={categories}
          price={price}
          onChangePrice={onChangePrice}
          error={error}
        />
        <Graphics
          categories={categories}
          render={(cat) => (
            <CategoryProgress
              key={cat.value}
              progressName={cat.value}
              progressValue={(cat.count * 100) / total || 0}
            />
          )}
        />
      </Pasivos>
    </div>
  );
}

export default App;
