import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={styles.qutu}>
        <div className={styles.link}>
            <a href="">Blog</a>
            <a href="">FAQs</a>
            <a href="">Contact us</a>
        </div>
        <div className={styles.icon}>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaSkype />
        <FaPinterest />
        </div>
    </div>
  )
}

export default Footer