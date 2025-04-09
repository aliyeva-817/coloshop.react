import React from 'react'
import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.cardlar}>
        <div className={styles.card1}><button className={styles.btn1}>WOMEN'S</button></div>
        <div className={styles.card2}><button className={styles.btn2}>ACCESORIES'S</button></div>
        <div className={styles.card3}><button className={styles.btn3}>MEN'S</button></div>


    </div>
  )
}

export default Card