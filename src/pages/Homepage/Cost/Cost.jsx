import React from 'react';
import costImg from '../../../images/cost-img.jpg';
import items from './Items.js'

import styles from "./Cost.module.scss";

const Cost = () => {
    return ( 
    <div className={styles.cost}>
        <div className={styles.title}>
            <h2 className={styles["h2-title"]}>Стоимость сеансов</h2>
        </div>
        <div className={styles.info}>
            <div className={styles.items}>
                {items.map((item, idx) => (
                    <div key={idx} className={styles.item}>
                        <div className={styles["item-name"]}>{item.name}</div>
                        <div className={styles["item-cost"]}>{`${item.cost}р.`}</div>
                    </div>
                ))}
                    
            </div>
            <div className={styles["img-block"]}>
                <img src={costImg} alt="" className={styles.img} />
                <h3 className={styles["h3-title"]}>Подарочный сертификат </h3>
            </div>
        </div>
    </div> );
}
 
export default Cost;