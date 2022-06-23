import React from 'react';
import menu from './Menu.js';
import logo from '../../../images/logo.svg';
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";



const Header = () => {
    return ( 
    <div className={styles.header}>
        <div className={styles.logo}>
            <img src={logo} alt="" className={styles["logo-img"]} />
        </div>
        <nav className={styles.nav}>
            <ul className={styles["nav-list"]}>
                {menu.map((item, idx) => (
                    <li key={idx} className={styles["nav-list-item"]}>
                        <Link to={item.link} className={styles["link"]} >{item.name}</Link>
                    </li> 
                ))}
            </ul>
        </nav>
        <div className={styles["btn-block"]}>
            <button className={styles.btn}>Записаться на сеанс</button>
        </div>
        

    </div> );
}
 
export default Header;

