import React from 'react'
import styles from "./SideNavbar.module.scss"

const SideNavbar = (props) => {
  return (
    <div className={`${styles.SideNavbar} ${props.open?'mobileNavOpen':'mobileNavClose'}`}>
      <p className={styles.cross} onClick={()=>{props.setOpen(false)}}>&times;</p>
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
    </div>
  )
}

export default SideNavbar