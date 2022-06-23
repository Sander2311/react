import React from 'react';
import aboutImg from '../../../images/about-img.jpg';

import styles from "./About.module.scss";

const About = () => {
    return ( 
    <div className={styles.about}>
        <div className={styles.title}>
            <h2 className={styles["h2-title"]}>Об RitmStyle</h2>
        </div>
        <div className={styles.items}>
            <div className={styles["item-row"]}>
                <div className={styles["text-block"]}>
                    <h3 className={styles["title-h3"]}>RitmStyle массаж </h3>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.</p>
                    <p className={styles.text}>Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.</p>
                </div>
                <div className={styles["img-block"]}>
                    <img src={aboutImg} alt="" className={styles.img}/>
                </div>
            </div>
            <div className={styles["item-row"]}>
                <div className={styles["img-block"]}>
                    <img src={aboutImg} alt="" className={styles.img} />
                </div>
                <div className={styles["text-block"]}>
                    <h3 className={styles["title-h3"]}>RitmStyle гидротерапия</h3>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu cras quis ac a non ut viverra turpis eget. Hendrerit quis pulvinar massa ipsum sem. Donec posuere nulla enim non neque etiam. Eros arcu, pulvinar penatibus luctus ridiculus sagittis vel nunc hac. Nisi, diam tincidunt dui viverra. Eget quis ultricies sem nunc risus senectus luctus ultricies. Enim feugiat pharetra pharetra et.</p>
                    <p className={styles.text}>Pulvinar arcu at morbi posuere cursus. Fermentum est sit enim velit ornare molestie. Ipsum nisi id sed tempor elementum. Mi nunc eget pellentesque ipsum. Suspendisse risus a id vel massa tincidunt. Hendrerit blandit in augue vel mi quam magna egestas. Fringilla ac lacus viverra ullamcorper leo, enim vitae id aliquam. Magna sed tristique tellus enim, netus tempor at elit dui. Ullamcorper hendrerit feugiat libero tellus diam egestas dui tellus odio.</p>
                </div>
            </div>
        </div>
    </div> );
}
 
export default About;