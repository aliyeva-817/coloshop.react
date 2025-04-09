import React from 'react'
import styles from './Section.module.css'
import { FaTruck } from "react-icons/fa";
import { SiCachet } from "react-icons/si";
import { MdOutlineAutorenew } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Section = () => {
  return (
    <div className={styles.qutular}>
        <div className={styles.qutu}>
            <div className={styles.ikon}><FaTruck /></div>
            <div className={styles.yazi}>
                <h4>free shipping</h4>
                <p>Suffered Alteration in Some Form</p>
            </div>
        </div>

        <div className={styles.qutu}>
            <div className={styles.ikon}><SiCachet /></div>
            <div className={styles.yazi}>
                <h4>cach on delivery</h4>
                <p>The Internet Tend To Repeat</p>
            </div>
        </div>

        <div className={styles.qutu}>
            <div className={styles.ikon}><MdOutlineAutorenew /></div>
            <div className={styles.yazi}>
                <h4>45 days return</h4>
                <p>Making it Look Like Readable</p>
            </div>
        </div>

        <div className={styles.qutu}>
            <div className={styles.ikon}><FaRegClock /></div>
            <div className={styles.yazi}>
                <h4>opening all week</h4>
                <p>8AM - 09PM</p>
            </div>
        </div>
    </div>
  )
}

export default Section