import React, { useState, useEffect } from 'react'

// CSS import
import './style-sheets/style.css'

// import assets file from '/src/assets/svg/home-section'
import vectorTwoBackground from '../../../../../assets/svg/home-section/Vector-six.jpg'
import vectorTwoBackgroundPcScreen from '../../../../../assets/svg/home-section/Vector-six-pc-screen.jpg'


// import icon's
import { MdOutlineLocationOn } from 'react-icons/md'
import { VscDebugStackframeDot } from 'react-icons/vsc'

function WelcomeComponent() {
  const [openCloseState, setOpenCloseState] = useState('')

  let date = new Date()
  let time = '23'

  useEffect(() => openCloseFunction)

  let openCloseFunction = () => {
    if (time > 9 && time < 21) {
      setOpenCloseState("Opened")
    } else {
      setOpenCloseState("Closed")
    }

  }


  console.log(openCloseState)


  // window.addEventListener('load',openCloseFunction)

  return (
    <>
      <div className="home-container">

        <div className="welcome-home-section">

          <div className="background-vectors">

            <div className="vector-one">
              {/* This div is used for background of the welcome content section */}
            </div>
            <div className="vector-two">
              <img src={vectorTwoBackground} alt="" />
            </div>
            <div className="vector-two-pc-screen">
              <img src={vectorTwoBackgroundPcScreen} alt="" />
            </div>
            <div className="vector-three">
              {/* This div used in front image, to get a darker background */}
            </div>


            <div class="custom-shape-divider-top-1677526532">
              <svg fill='red' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
              </svg>
            </div>

            <div className="overflow-fix">
              <div class="custom-shape-divider-bottom-1677531999">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                </svg>
              </div>
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
                <VscDebugStackframeDot className='open-close-status-icon' />
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