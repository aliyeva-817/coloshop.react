import React from 'react'
import styles from './Container.module.css'

const Container = ({item}) => {
  return (
    <div className={styles.card}>
        <img src={item.image} alt="" />
        <span>{item.title}</span>
        <h3 className={styles.price}>${item.price}</h3>
    </div>
  )
}

export default Container