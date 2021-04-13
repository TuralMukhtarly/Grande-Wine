import React from 'react';
import styles from '../css/CartItem.module.css';

import Button from '../Button/Button';

const CartItem = ({ id, img, name, size, text, totalPrice, totalCount, onRemove, onMinus, onPlus }) => {
  console.log(img);

  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__item_img}>
        <img
          
          src={img}
        />
      </div>
      <div className={styles.cart__item_info}>
        <h3>{name}</h3>
        <p>{text}</p>
        {/* <p>
          {size} л.
        </p> */}
        <b>{totalCount} шт.</b>
      </div>
      <div className={styles.cart__item_price}>
        <b>{totalPrice} руб.</b>
      </div>
      <div className={styles.cart__item_count}>
        <button className={styles.button__circle} onClick={handleMinusItem}>-</button>
        <button className={styles.button__circle} onClick={handlePlusItem}>+</button>
      </div>

      <div className={styles.cart__item_remove}>
        <Button onClick={handleRemoveClick} className={styles.button_remove}>
        Удалить из корзины
        </Button>
      </div>
    </div >
  );
};

export default CartItem;