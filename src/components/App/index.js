import React from "react";
import Header from "../Header";
import ListItems from "../ListItems";
import useRegister from "./useRegister";
import CategoryProgress from "../CategoryProgress";
import Graphics from "../Graphics";
import List from "../List";
import FormNewItem from "../FormNewItem";
import Modal from "../Modal";
import TabBar from "../TabBar";
import './App.css'

function App() {
  const {
    error,
    onSubmit,
    onChangeDetail,
    onChangeCategory,
    onChangePrice,
    total,
    items,
    detail,
    categories,
    category,
    price,
    onIncome,
    onExpense,
    income,
    expense,
    onDeleteItems,
    onRemoveCountCategory,
    openItemModal,
    setOpenItemModal,
    activeCategory,
    setActiveCategory,
    showGraphics,
    setShowGraphics,
  } = useRegister();
  return (
    <div className="App">
      <Header items={items} total={total} income={income} expense={expense} />
      <List
        items={items}
        activeCategory={activeCategory}
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
            onDeleteItems={() => onDeleteItems(item.id)}
            onRemoveCountCategory={() =>
              onRemoveCountCategory(item.category, item.price)
            }
          />
        )}
      ></List>
      <Graphics
        categories={categories}
        showGraphics={showGraphics}
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
      {/* <NewItemButton setOpenItemModal={setOpenItemModal} /> */}
      {
        <TabBar
          setOpenItemModal={setOpenItemModal}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          showGraphics={showGraphics}
          setShowGraphics={setShowGraphics}
        />
      }
      {!!openItemModal && (
        <Modal setOpenItemModal={setOpenItemModal}>
          <FormNewItem
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
        </Modal>
      )}
    </div>
  );
}

export default App;
