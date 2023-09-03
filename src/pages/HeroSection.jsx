import React from 'react'
import CashAppMain from '../components/CashAppMain/CashAppMain'
import Navbar from '../components/Navbar/Navbar'
import "./styles.scss"
import HeroFooter from '../components/HeroFooter/HeroFooter'

const HeroSection = () => {
  return (
    <div id='HeroSection'>
        <div className='objWrapper'>
          <img src="/assets/intro-cube.png" alt="introCube" className='introCube'/>
          <img src="/assets/intro-stairs.png" alt="introStairs" className='introStairs'/>
          <img src="/assets/intro-cubes.png" alt="introCubes" className='introCubes'/>
          <img src="/assets/intro-pillar.png" alt="introPillar" className='introPillar'/>
          <Navbar/>
          <CashAppMain/>
          <HeroFooter/>
        </div>
    </div>
  )
}

export default HeroSection