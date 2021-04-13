import React from 'react'
import styles from '../css/Footer.module.css';
import logo from "../../img/logo.png"
import number from "../../img/icon_phone.png"
import email from "../../img/icon_email.png"
import adress from "../../img/icon_adress.png"
import plus18 from '../../img/plus_18.png'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.footer__head}>
                    <img width="140" height="140" src={logo} alt="Grande wine" />
                    <ul>
                        <li> <img src={number} alt="" />+375333333753</li>
                        <li> <img src={email} alt="" />grande_wine@mail.ru</li>
                        <li> <img src={adress} alt="" />г.Гродно ул.Кабяка 23a/4</li>
                    </ul>
                </div>
                <div className={styles.footer__end}>
                    <div className={styles.footer__end__block}>
                        <img width="48" src={plus18} alt="Plus 18" />
                    </div>
                    <h3>Чрезмерное употребление алкоголя вредит вашему здоровью</h3>
                </div>

            </div>
        </div>
    )
}

export default Footer;
