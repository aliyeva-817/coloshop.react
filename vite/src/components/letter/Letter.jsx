import React from 'react'
import styles from './Letter.module.css'


const Letter = () => {
  return (
    <div className={styles.box}>
        <div className={styles.yazi}>
            <h2>Newsletter</h2>
            <p className={styles.yazi2}>Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <div className={styles.mail}>
            <input className={styles.inp} type="e-mail" name="" id="" placeholder='Your e-mail' />
            <button className={styles.btn}>Subscribe</button>
        </div>
    </div>
  )
}

export default Letter