import React from 'react'
import styles from "./CashApp.module.scss"

const CashAppMain = () => {
  return (
    <div className={styles.cashApp}>
        <img src='/assets/phone.png' alt="phone" style={{zIndex:"2"}}></img>
        <p>CASH</p>
        <p style={{zIndex:"2"}}>APP</p>
    </div>
  )
}

export default CashAppMain