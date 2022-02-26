import React from 'react';
import Link from 'next/link';
import styles from "../styles/Home.module.css"

const Twitter = () => {
    return (
        <div className={styles.grid}>
        <a href="https://twitter.com/devkant21" className={styles.card}>
          <h2>Twitter &rarr;</h2>
          
        </a>

        </div>
    )
}

export default Twitter