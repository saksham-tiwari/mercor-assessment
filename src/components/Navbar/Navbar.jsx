import React, { useEffect, useState } from 'react'
import styles from "./Navbar.module.scss"
import SideNavbar from '../SideNavbar/SideNavbar'
const Navbar = () => {
  const [open,setOpen] = useState(false)

  useEffect(()=>{
    if(open){
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  },[open])

  return (
    <>
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
          
          <div className={styles.hameye}>
            <p className={styles.hamburger} onClick={()=>{setOpen(prev=>!prev)}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
            </p>
            <img src="assets/eye-button.svg" alt="eye-button"></img>
          </div>
          

      </div>
      <SideNavbar open={open} setOpen={setOpen}/>
    </>
  )
}

export default Navbar