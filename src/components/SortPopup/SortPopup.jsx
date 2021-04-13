import React, { useState, useRef, useEffect } from 'react';
import styles from '../css/SortPopup.module.css';

const SortPopup = React.memo(({ items, onClickSort, activeSortBy }) => {
    const [visiblePopup, setvisiblePopup] = useState(false);
    const sortRef = useRef();
    const activeName = items.find((obj) => obj.type === activeSortBy).name;


    const toogleVisiblePopup = () => {
        setvisiblePopup(!visiblePopup);
    }

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setvisiblePopup(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, [])

    const onSelectItem = (index) => {
        onClickSort(index);
        setvisiblePopup(false);
    };

    return (
        <div>
            <div ref={sortRef} className={styles.sort}>
                <div className={styles.sort__label}>
                    <b>Сортировка по:</b>
                    <span
                        onClick={toogleVisiblePopup}
                    >{activeName}</span>
                </div>
                {visiblePopup && (
                    <div className={styles.sort__popup}>
                        <ul>
                            {items && (items.map((obj, index) => (
                                <li
                                    onClick={() => onSelectItem(obj)}
                                    className={activeSortBy === obj.type ? "active" : ""}
                                    key={`${obj.type}_${index}`}>
                                    {obj.name}
                                </li>
                            )))}
                        </ul>
                    </div>)}
            </div>
        </div>
    )
})

export default SortPopup;
