import React from 'react'
import styles from './Box.module.css'

const Box = () => {
  return (
    <div className={styles.boxess}>
        <div><h1>Best Sellers</h1></div>
        <div className={styles.boxes}>

        <div className={styles.box}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, omnis! </p>
            <h3>$767.9</h3>

        </div>
        <div className={styles.box}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_2.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, omnis! </p>
            <h3>$767.9</h3>
        </div>
        <div className={styles.box}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_3.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, omnis! </p>
            <h3>$767.9</h3>
        </div>
        <div className={styles.box}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_4.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, omnis! </p>
            <h3>$767.9</h3>
        </div>
        <div className={styles.box}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/product_5.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, omnis! </p>
            <h3>$767.9</h3>
        </div>
        </div>
    </div>
  )
}

export default Box