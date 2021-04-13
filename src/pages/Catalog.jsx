import React from 'react';
import { Categories, SortPopup, BeveragesBlock, LoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryBy, setSortBy } from '../redux/actions/filters';
import { fetchBeverages } from '../redux/actions/beverages';
import { addBevToCart } from '../redux/actions/cart';
import styles from './css/Catalog.module.css';

const categoryItems = ["Виски", "Коньяк", "Ром", "Шампанское", "Вино", "Водка", "Текила", "Пиво"];
const sortItems =
  [
    { name: "популярности", type: "popular", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавиту", type: "name", order: "asc" }
  ];


function Catalog() {
  const dispatch = useDispatch();

  const items = useSelector(({ beverages }) => beverages.items);
  const isLoaded = useSelector(({ beverages }) => beverages.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchBeverages(sortBy, category));
  }, [category, dispatch, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategoryBy(index))
  }, [dispatch]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch]);

  const HandleAddBevToCart = (obj) =>{
    dispatch(addBevToCart(obj))
  }

  return (
    <div className={styles.container}>
      <div className={styles.content__top}>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryItems} />
        <SortPopup
          activeSortBy={sortBy.type}
          items={sortItems}
          onClickSort={onSelectSortType} />
      </div>
      <h2 className={styles.content__title}>Все напитки</h2>
      <div className={styles.content__items}>
        {isLoaded ?
          items.map((obj) => (<BeveragesBlock onClickAddBev={HandleAddBevToCart} key={obj.id} addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}{...obj} />))
          : Array(12)
            .fill(0)
            .map((_, index) => <LoadingBlock key={index} />)
        }
      </div>
    </div>

  )
}

export default Catalog;
