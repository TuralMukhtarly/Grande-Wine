import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem';
import Button from '../components/Button/Button';
import styles from './css/Cart.module.css';


import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';

function Cart() {
    const dispatch = useDispatch();
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

    const addedBeverages = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearCart());
        }
    };

    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            dispatch(removeCartItem(id));
        }
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };

    const onClickOrder = () => {
        console.log('ВАШ ЗАКАЗ', items);
    };


    return (
        <div className={`${styles.container} ${styles.container__cart}`}>
            { totalCount ? (<div className={styles.cart}>
                <div className={styles.cart__top}>
                    <h2 className={styles.content__title}>Корзина</h2>
                    <div className={styles.cart__clear}>
                        <span onClick={onClearCart}>Очистить корзину</span>
                    </div>
                </div>
                <div className={styles.content__items}>
                    {addedBeverages.map((obj) => (
                        <CartItem
                            key={obj.id}
                            img={obj.imageUrl}
                            id={obj.id}
                            name={obj.name}
                            size={obj.size}
                            text={obj.text}
                            totalPrice={items[obj.id].totalPrice}
                            totalCount={items[obj.id].items.length}
                            onRemove={onRemoveItem}
                            onMinus={onMinusItem}
                            onPlus={onPlusItem}
                        />
                    ))}
                </div>
                <div className={styles.cart__bottom}>
                    <div className={styles.cart__bottom_details}>
                        <span>
                            Всего : <b>{totalCount} шт.</b>
                        </span>
                        <span>
                            Сумма заказа: <b>{totalPrice} руб.</b>
                        </span>
                    </div>
                    <div className={styles.cart__bottom_buttons}>
                        <a href="/" className={styles.button__back_btn}>
                            <Link to="/catalog">
                                <button>Вернуться назад</button>
                            </Link>
                        </a>
                        <Button onClick={onClickOrder} className={styles.pay_btn}>
                            <span>Оплатить сейчас</span>
                        </Button>
                    </div>

                </div>
            </div>) : (
                    <div className={`${styles.cart} ${ styles.cart__empty}`}>
                        <div>
                            <h1>
                                Корзина пустая
                            </h1>
                        </div>
                        <div>
                            <p>
                            Для того, чтобы сделать заказ, перейдите страницу каталога.
                            </p>
                        </div>
                        <div>
                        <Link to="/catalog" className={styles.button__black}>
                            <button><span>Вернуться назад</span></button>
                        </Link>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Cart;
