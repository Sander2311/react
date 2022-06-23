import React from 'react';


import styles from "./Sessions.module.scss";

const Sessions = () => {
    return ( 
    <div className={styles.sessions}>
        <div className={styles.title}>
            <h2 className={styles["h2-title"]}>Сеансы RitmStyle</h2>
        </div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <h3 className={styles["card-title"]}>Стандартный RitmStyle</h3>
            </div>
            <div className={styles.card}>
                <h3 className={styles["card-title"]}>RitmStyle для пар</h3>
            </div>
            <div className={styles.card}>
                <h3 className={styles["card-title"]}>RitmStyle с полным погружением под воду</h3>
            </div>
            <div className={styles.card}>
                <h3 className={styles["card-title"]}>RitmStyle для беременных</h3>
            </div>
            <div className={styles.card}>
                <h3 className={styles["card-title"]}>RitmStyle + красочная подводная фотосессия</h3>
            </div>
        </div>
    </div> );
}
 
export default Sessions;