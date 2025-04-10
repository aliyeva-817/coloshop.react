import React from 'react'
import styles from './Deal.module.css'
const Deal = () => {
  return (
    <section className={styles.deal}>
    <div className={styles.container1}>
      <div className={styles.imageContainer}>
        <img
          src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png"
          alt="Deal of the Week"
          className={styles.dealImage}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Deal of the Week</h2>
        
        <div className={styles.timer}>
          <div><span>02</span><small>Days</small></div>
          <div><span>12</span><small>Hours</small></div>
          <div><span>45</span><small>Minutes</small></div>
          <div><span>10</span><small>Seconds</small></div>
        </div>
        <button className={styles.shopbtn}>Shop Now</button>
      </div>
    </div>
  </section>
    
  )
}

export default Deal