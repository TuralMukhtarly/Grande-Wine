import React, { Component } from 'react'
import CarouselBox from './CarouselBox'
import styles from './css/HomePage.module.css';

export default class HomePage extends Component {
    render() {
        return (
                <div className={styles.carousel_block}>
                    <CarouselBox/>
                </div>
        )
    }
}
