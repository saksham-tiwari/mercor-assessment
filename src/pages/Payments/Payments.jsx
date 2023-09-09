import React from 'react'
import "./styles.scss"

const Payments = () => {
  return (
    <div id="PaymentsSection">
      <div className='objWrapperPayments'>
          <div className='textDiv'>
            <div>
              <h2>
                Payments
              </h2>
              <p>Send and receive money with anyone, donate to an important cause, or tip professionals. Just enter a $cashtag, phone number, or scan their QR code to pay.</p>
            </div>
          <img src="/assets/payments-phone.png" alt="payments-phone" className='paymentsPhone'/>

          </div>
          <img src="/assets/payments-column-1.png" alt="paymentsColumn" className='paymentsColumn paymentsColumn1'/>
          <img src="/assets/payments-column-1.png" alt="paymentsColumn" className='paymentsColumn paymentsColumn2'/>
          <img src="/assets/payments-column-1.png" alt="paymentsColumn" className='paymentsColumn paymentsColumn3'/>
          <img src="/assets/payments-pillar-small.png" alt="payments-pillar-small" className='paymentsPillarSmall'/>
          <img src="/assets/payments-pillar-medium.png" alt="payments-pillar-medium" className='paymentsPillarMedium paymentsPillarMedium1'/>
          <img src="/assets/payments-pillar-medium.png" alt="payments-pillar-medium" className='paymentsPillarMedium paymentsPillarMedium2'/>
          <img src="/assets/payments-pillar-medium.png" alt="payments-pillar-medium" className='paymentsPillarMedium paymentsPillarMedium3'/>
          <img src="/assets/payments-pillar-medium.png" alt="payments-pillar-medium" className='paymentsPillarMedium paymentsPillarMedium4'/>
          <img src="/assets/payments-pillar-large.png" alt="payments-pillar-large" className='paymentsPillarLarge'/>
      </div>
    </div>
  )
}

export default Payments