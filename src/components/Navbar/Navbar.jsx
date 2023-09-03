import React from 'react'
import styles from "./Navbar.module.scss"
import cashappLogo from "../../assets/cashapp-logo.svg"
import eyeButton from "../../assets/eye-button.svg"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <img src={cashappLogo} alt="cashapp-logo"></img>
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
        <img src={eyeButton} alt="eye-button"></img>

    </div>
  )
}

export default Navbar