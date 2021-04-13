import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import icon_profile from "../../img/icon_profile.png";
import icon_cart from "../../img/icon_cart.png";

import email from "../../img/icon_email.png";
import time from "../../img/icon_clock.png";
import number from "../../img/icon_phone.png";
import styles from '../css/Header.module.css';
import { Button } from "../index";


function Header() {
    const { totalPrice, totalCount } = useSelector(({ cart }) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount,
    }))

    return (
        <div className={styles.header}>
            <div className={styles.header__head}>
            <Link to="/auth">
                        <Button className={styles.button_page}>
                            <span><img width="48" src={icon_profile} alt="profile"/></span>
                        </Button>
                    </Link>
                    <Link to="/cart">
                        <Button className={styles.button_page}>
                            <span><img width="48" src={icon_cart} alt="cart"/> {totalPrice} Br. {totalCount} шт. </span>
                        </Button>
                    </Link>
            </div>
            <div className={styles.container}>
                <Link to="/">
                    <div className={styles.header__logo}>
                        <div><img width="140" src={logo} alt="Grande wine" /></div>
                    </div>
                </Link>
                <div className={styles.header__cart}>
                <Link to="/">
                        <Button className={styles.button_page}>
                            <span>Главная</span>
                        </Button>
                    </Link>
                    <Link to="/catalog">
                        <Button className={styles.button_page}>
                            <span>Каталог</span>
                        </Button>
                    </Link>
                    <Link to="/presents">
                        <Button className={styles.button_page}>
                            <span>Подарки</span>
                        </Button>
                    </Link>
                    <Link to="/company">
                        <Button className={styles.button_page}>
                            <span>О Компании</span>
                        </Button>
                    </Link>
                    <Link to="/contacts">
                        <Button className={styles.button_page}>
                            <span>Контакты</span>
                        </Button>
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}

export default Header;