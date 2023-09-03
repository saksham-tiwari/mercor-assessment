import React from 'react'
import CashAppMain from '../components/CashAppMain/CashAppMain'
import Navbar from '../components/Navbar/Navbar'
import "./styles.scss"

const HeroSection = () => {
  return (
    <div id='HeroSection'>
        <Navbar/>
        <CashAppMain/>
    </div>
  )
}

export default HeroSection