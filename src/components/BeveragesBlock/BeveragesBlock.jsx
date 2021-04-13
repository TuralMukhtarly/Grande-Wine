import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../css/Beverages.module.css';
import Button from '../Button/Button';


function BeveragesBlock({ id, name, imageUrl, price, sizes, text, onClickAddBev, addedCart, addedCount }) {
    const availableType = [0.5, 0.7, 1];

    // const [activeSize, setActiveSize] = React.useState(0);

    const [activeType, setActiveType] = useState(0);


    const onSelectItem = (index) => {
        setActiveType(index);
    }


    const onAddBev = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            text,
            size: availableType[activeType],
        };
        onClickAddBev(obj);
    };


    return (
        <div className={styles.container_beverages} >
            <div className={styles.beverages_block}>
                <img
                    className={styles.beverages_block__image}
                    src={imageUrl}
                    alt="Bevarages"
                />
                <h4 className={styles.beverages_block__title}>{name}</h4>
                <div className={styles.beverages_block__text}>
                    <span>
                        {text}
                    </span>
                </div>
                {/* <div className={styles.beverages_block__div}>
                    <div className={styles.beverages_block__selector}>
                        <ul>
                            {sizes.map((size, index) => (
                                <li
                                    key={`${name}_${index}`}
                                    onClick={() => onSelectItem(index)}
                                    className={classNames({
                                        active: activeType === index,
                                    })} >{size}л.</li>
                            ))}
                        </ul>
                    </div>
                </div> */}
                <div className={styles.beverages_block__bottom}>
                    <div className={styles.beverages_block__price}>{price} руб.</div>
                    <Button onClick={onAddBev} className={`${styles.button} ${styles.button__outline} ${styles.button__add}`}>
                        <span>Добавить <b>{addedCount}</b></span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BeveragesBlock;
