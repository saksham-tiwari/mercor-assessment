import React from 'react'
import styles from "./CashApp.module.scss"

const CashAppMain = () => {
  return (
    <div className={styles.cashApp}>
        <img src='/assets/phone.png' alt="phone" style={{zIndex:"2"}}></img>
        <p style={{zIndex:"1"}}>CASH</p>
        <p style={{zIndex:"3"}}>APP</p>
    </div>
  )
}

export default CashAppMain