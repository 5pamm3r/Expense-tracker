import React from "react";
import Activos from "../Activos";
import ItemActivo from "../ItemActivo";
import NewItem from "../NewItem";
import Pasivos from "../Pasivos/Pasivos";
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
      <Activos
        items={items}
        total={total}
        render={(item) => (
          <ItemActivo
            key={Math.floor(Math.random() * 1000000)}
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
              progressValue={(cat.count * 100) / total}
            />
          )}
        />
      </Activos>
      <Pasivos />
    </div>
  );
}

export default App;
