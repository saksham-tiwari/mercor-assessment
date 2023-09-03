import React from 'react'
import styles from "./HeroFooter.module.scss"

const HeroFooter = () => {
  return (
    <div className={styles.HeroFooter}>
        <div className={styles.downloadBtns}>
            <button className='btn btn-1'>
                <img src="/assets/app-store.svg" alt="App Store"></img>
                APP STORE
            </button>
            <button className='btn btn-1'>
                <img src="/assets/play-store.svg" alt="Play Store"></img>
                PLAY STORE
            </button>
        </div>
        <div className={styles.downArrow}>
            <img src="/assets/down-arrow.svg" alt="Twitch"></img>
        </div>
        <div className={styles.policyText}>
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
        </div>
        <div className={styles.socialIcons}>
            <img src="/assets/twitch.svg" alt="Twitch"></img>
            <img src="/assets/twitter.svg" alt="Twitter"></img>
            <img src="/assets/instagram.svg" alt="Instagram"></img>
        </div>
    </div>
  )
}

export default HeroFooter