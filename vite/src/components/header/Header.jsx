import React from 'react'
import styles from './Header.module.css'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <div className={styles.header}>
        <div> <h2> COLO<span className={styles.shop}>SHOP</span></h2></div>
        
        <div className={styles.navv}>
        <div className={styles.nav}>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Promotion</a>
            <a href="">Pages</a>
            <a href="">Blog</a>
            <a href="">Contact</a>

            
        </div>
        <div className={styles.icons}>
            <FaSearch />
            <FaUser />
            <SlBasket />

            </div>
        </div>
     
        
    </div>
  )
}

export default Header