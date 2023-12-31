import React from 'react'
import "./styles.scss"

const Boost = () => {
  return (
    <div id='BoostSection'>
        <div className='objWrapperBoost'>
        <div className='boostTextBlock'>
          <div class="textBlock">
            <h2>Cash Card & Boost</h2>
            <p>The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.</p>
          </div>
          <img src="/assets/boost-phone.png" alt="BoostPhone" className='BoostPhone'/>
        </div>
          <img src="/assets/boost-stairs-1.png" alt="BoostStairs" className='BoostStairs1'/>
          <img src="/assets/boost-stairs-2.png" alt="BoostStairs" className='BoostStairs2'/>
          <img src="/assets/boost-hand.png" alt="BoostHand" className='BoostHand'/>
          <img src="/assets/boost-card.png" alt="BoostCard" className='BoostCard'/>
          <img src="/assets/boost-shoe.png" alt="BoostShoe" className='BoostShoe'/>
          <img src="/assets/boost-coffee.png" alt="BoostCoffee" className='BoostCoffee'/>
          <img src="/assets/boost-burger.png" alt="BoostBurger" className='BoostBurger'/>

        </div>
    </div>
  )
}

export default Boost