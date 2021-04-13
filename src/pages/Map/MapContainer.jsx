import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'
import styles from '../../components/css/Footer.module.css'

class MapContainer extends React.Component {
    render() {
        return (
            <YMaps>
                <div className={styles.map__block}>
                    <Map defaultState={{ center: [53.644577, 23.858868], zoom: 18 }} width={1000} />
                </div>
            </YMaps>
        );
    }
}


export default MapContainer;
