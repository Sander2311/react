import React from 'react';


import styles from "./MainTitle.module.scss";

const MainTitle = () => {
    return ( 
    <div className={styles["main-title"]}>
        <div className={styles["text-block"]}>
            <h3 className={styles["title-h3"]}>Укрепление здоровья</h3>
            <h1 className={styles["title-h1"]}>Акватерапия RitmStyle</h1>
        </div>
    </div> );
}
 
export default MainTitle;