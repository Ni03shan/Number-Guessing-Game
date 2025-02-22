import React from 'react'
import styles from  './HomePage.module.css'
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
    <div className={styles.mainframe}>
       <img src="src/assets/dices 1.png" alt="" />
       <div className={styles.textdiv}>
        <p className={styles.TagName}>DICE GAME</p>
        <Link to="/PlayGame">
        <button className={styles.button}>Play Now</button>
        </Link>
       </div>
    </div>
    </>
  )
}

export default HomePage