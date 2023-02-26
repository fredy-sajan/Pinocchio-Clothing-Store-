import React from 'react'

// CSS import
import './style-sheets/style.css'

// import assets file from '/src/assets/svg/home-section'
import vectorOneBackground from '../../../../../assets/svg/home-section/Vector-five.svg'
import vectorTwoBackground from '../../../../../assets/svg/home-section/Vector-six.svg'
import vectorThreeBackground from '../../../../../assets/svg/home-section/Vector-seven.svg'
import vectorUnderDesign from '../../../../../assets/svg/home-section/under-design.svg'
import overflowFix from '../../../../../assets/svg/home-section/overflow-fix.svg'

// import icon's
import { MdOutlineLocationOn } from 'react-icons/md'
import { VscDebugStackframeDot } from 'react-icons/vsc'

function WelcomeComponent() {
  return (
    <>
      <div className="home-container">

        <div className="welcome-home-section">

          <div className="background-vectors">

            <div className="vector-one">
              <img src={vectorOneBackground} alt="" />
            </div>
            <div className="vector-two">
              <img src={vectorTwoBackground} alt="" />
            </div>
            <div className="vector-three">
              <img src={vectorThreeBackground} alt="" />
            </div>
            <div className="vector-under-design">
              <img src={vectorUnderDesign} alt="" />
            </div>
            <div className="overflow-fix">
              <img src={overflowFix} alt="" />
            </div>
          </div>

          <div className="text-contents">

            <div className="welcome-head-text">
              <div className="welcome-head-text-decorating-line-upper-one"></div>
              <div className="welcome-head-text-decorating-line-upper-two"></div>
              <div className="welcome-head-text-decorating-line-upper-three"></div>
              <h1>The shoping start's here</h1>
              <div className="welcome-head-text-decorating-line-lower-one"></div>
              <div className="welcome-head-text-decorating-line-lower-two"></div>
              <div className="welcome-head-text-decorating-line-lower-three"></div>
            </div>

            <div className="company-name">
              <h2>Pinocchio Clothing Store Inc. </h2>
            </div>

            <div className="company-locaton">
              <div className="location-icon">
                <MdOutlineLocationOn style={{ fontSize: "24px", color: "#D0D0D0" }} />
              </div>
              <div className="location-text">
                <h3>La, California, US .</h3>
              </div>
              <div className="shop-open-close-status">
                <VscDebugStackframeDot className='open-close-status-icon'/>
                <span>Opened</span>
              </div>
            </div>

            <div className="offers-contact-btn">
              <div className="offers-btn">
                <span>Offer's</span>
              </div>
              <div className="contact-btn">
                <span>Contact</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default WelcomeComponent