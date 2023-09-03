import React from 'react'
import styles from "./Navbar.module.scss"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <img src="assets/cashapp-logo.svg" alt="cashapp-logo"></img>
        <ul>
            <li>SIGN IN</li>
            <li>LEGAL</li>
            <li>LICENCES</li>
            <li>SECURITY</li>
            <li>CAREERS</li>
            <li>PRESS</li>
            <li>SUPPORT</li>
            <li>STATUS</li>
            <li>CODEBLOG</li>
        </ul>
        <img src="assets/eye-button.svg" alt="eye-button"></img>

    </div>
  )
}

export default Navbar