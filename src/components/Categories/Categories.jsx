import React from 'react';
import styles from '../css/Categories.module.css';


const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }){
    return (
        <div className={styles.categories}>
            <ul>
                <li className={activeCategory === null ? "active" : ""}
                    onClick={() => onClickCategory(null)}
                >
                    Все
                </li>

                {items && items.map((name, index) => (
                    <li
                        className={activeCategory === index ? "active" : ""}
                        onClick={() => onClickCategory(index)}
                        key={`${name}_${index}`}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
})



export default Categories;
