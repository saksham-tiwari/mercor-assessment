import React from 'react'
import InvestingFooter from '../../components/InvestingFooter/InvestingFooter'
import "./styles.scss"

const Investing = () => {
  return (
    <div id='InvestingSection'>
        <div className='objWrapperInvesting'>
        <img src="/assets/investing-graph-1.png" alt="investingGraph1" className='investingGraph1'/>
        <img src="/assets/investing-graph-2.png" alt="investingGraph2" className='investingGraph2'/>
        <img src="/assets/investing-graph-3.png" alt="investingGraph3" className='investingGraph3'/>
        <div className='InvestingCentralDiv'>
        <h2>
          Investing
        </h2>
          <div class="InvestingPhonesFlex">
            <div>
              <h3>Stocks</h3>
              <p>Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.</p>
            </div>
            <img src="/assets/investing-bitcoin.png" alt="investingBitcoin" className='investingBitcoin'/>
            <img src="/assets/investing-stocks.png" alt="investingStocks" className='investingStocks'/>
            <div>
            <h3>Bitcoin</h3>
            <p>Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.</p>

            </div>

          </div>
        </div>

        <div className='investingFloor'>
        </div>
        <InvestingFooter/>
        
        </div>
    </div>
  )
}

export default Investing