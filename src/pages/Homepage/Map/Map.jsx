import React from 'react';
import addressIcon from '../../../images/address-icon.svg';
import metroIcon from '../../../images/metro-icon.svg';
import registrationIcon from '../../../images/registration-icon.svg';

import styles from "./Map.module.scss";

const Map = () => {
    return ( 
    <div className={styles.map}>
        <div className={styles.items}>
            <div className={styles.item}></div>
            <div className={styles.item}>
                <h2 className={styles["h2-title"]}>Бассейн WorkClass</h2>
                <div className={styles["address-block"]}>
                    <img src={addressIcon} alt="" className={styles["address-img"]} />
                    <div className={styles.address}>Невский 140</div>
                </div>
                <div className={styles["metro-block"]}>
                    <img src={metroIcon} alt="" className={styles["metro-img"]} />
                    <div className={styles.metro}>м. Спасская</div>
                </div>
                <div className={styles["registration-block"]}>
                    <img src={registrationIcon} alt="" className={styles["registration-img"]} />
                    <div className={styles.registration}>Запись по договоренности</div>
                </div>
                <button className={styles.btn}>Записаться на сеанс</button>
            </div>
            <div className={styles.item}>
            <h2 className={styles["h2-title"]}>Бассейн "На Гороховой"</h2>
                <div className={styles["address-block"]}>
                    <img src={addressIcon} alt="" className={styles["address-img"]} />
                    <div className={styles.address}>3-й проезд Иванова</div>
                </div>
                <div className={styles["metro-block"]}>
                    <img src={metroIcon} alt="" className={styles["metro-img"]} />
                    <div className={styles.metro}>м. Крестовский остров</div>
                </div>
                <div className={styles["registration-block"]}>
                    <img src={registrationIcon} alt="" className={styles["registration-img"]} />
                    <div className={styles.registration}>Запись по договоренности</div>
                </div>
                <button className={styles.btn}>Записаться на сеанс</button>
            </div>
        </div>
    </div> );
}
 
export default Map;