import React from 'react'
import styles from './Blog.module.css'
const Blog = () => {
  return (
    <div className={styles.qutularr}>
        <div><h1 className={styles.yazi}>Latest Blogs</h1></div>
        <div className={styles.qutular}>
        <div className={styles.qutu1}></div>
        <div className={styles.qutu2}></div>
        <div className={styles.qutu3}></div>
        </div>
    </div>
  )
}

export default Blog