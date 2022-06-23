import React, {useState} from 'react';
import items from './Items.js'

import styles from "./Reviews.module.scss";

const Reviews = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    const moveDot = index => {
        setSlideIndex(index);
    }

    return ( 
    <div className={styles.reviews}>
        <div className={styles.title}>
            <h2 className={styles["h2-title"]}>Отзывы</h2>
        </div>
        <div className={styles.slider}>
            {items.map((item, idx) => (
                <div key={idx} className={slideIndex === idx + 1 ? `${styles["card"]} ${styles["card-active"]}` : styles["card"]}>
                    <h4 className={styles["card-name"]}>{item.name}</h4>
                    <p  className={styles["card-text"]}>{item.text1}</p>
                    <p className={styles["card-text"]}>{item.text2}</p>
                </div>
            ))}
            <div className={styles.dots}>
            {items.map((item, idx) => (
                <button 
                key={idx} 
                onClick={() => moveDot(idx + 1)}
                className={slideIndex === idx + 1 ? `${styles["dot"]} ${styles["dot-active"]}` :  styles["dot"]}
                ></button>
            ))}    
        </div>
        </div>
        
    </div> );
}
 
export default Reviews;