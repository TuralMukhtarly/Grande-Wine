import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import ak from '../img/ak.jpg'
import macalan from '../img/MACALAN.jpg'
import cour from '../img/COURVOSIER.jpg'


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cour}
                        alt="" ></img>
                    <Carousel.Caption>
                        <h3>111</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum aut optio ratione esse rem? Quos iste magnam et, nemo harum fugiat quidem deleniti maxime omnis quia alias, repellendus voluptatibus eligendi?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={macalan}
                        alt="" ></img>
                    <Carousel.Caption>
                        <h3>111</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum aut optio ratione esse rem? Quos iste magnam et, nemo harum fugiat quidem deleniti maxime omnis quia alias, repellendus voluptatibus eligendi?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ak}
                        alt="" ></img>
                    <Carousel.Caption>
                        <h3>111</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum aut optio ratione esse rem? Quos iste magnam et, nemo harum fugiat quidem deleniti maxime omnis quia alias, repellendus voluptatibus eligendi?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
