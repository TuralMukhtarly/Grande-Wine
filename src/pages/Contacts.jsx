import React from 'react'
import MapContainer from './Map/MapContainer'
import number from "../img/icon_phone.png"
import email from "../img/icon_email.png"
import clock from "../img/icon_clock.png"

import styles from './css/Contacts.module.css';


function Contacts() {
    return (
        <div className={styles.container_contacts}>
            <div>
                <h1>Наш Адрес</h1>
                <span>
                    Магазин расположен по адресу проспект Клецкова 15А,
                    в здании ресторана "Туран".
                    Запарковать машину можно на парковке Турана.
            </span>
            </div>
            <div className={styles.contacts__item}>
                <div className={styles.contacts__block}>
                    <div><img src={number} alt="" /><br /> Контактный номер: +375333333753</div>
                    <div><img src={email} alt="" /><br /> Email: grande_wine@mail.ru</div>
                    <div><img src={clock} alt="" /><br /> Ежедневно с 11 до 22-х часов</div>
                </div>

                <div className={styles.map_block}><MapContainer /></div>

                <div>
                    <span>Для получения заказа в магазине, необходимо оформить заявку по телефону или через корзину сайта
                    и получить от менеджеров магазина подтверждение наличия.
                        </span>
                </div>
            </div>



        </div>
    )
}

export default Contacts
