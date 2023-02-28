import React from 'react'
import './style-sheets/style.css'

// assets import
import rectangleBoxDesign from '../../../assets/svg/footer/rectangle-design-footer.svg'
// import underVector from '../../../assets/svg/footer/wave-haikei.svg'


function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-vector-contents">

                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path fill='black' d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                    </svg>

                    <div className="background-div-top-footer"></div>

                    <div className="background-div-black-color-footer-bottom"></div>
                    <div className="background-div-bottom-footer"></div>
                </div>

                <div className="footer-text-contents">
                    <div className="welcome-head-text">
                        {/* this div are head text design, ( not designed yet, may be future) */}
                        <div className="welcome-head-text-decorating-line-upper-one"></div>
                        <div className="welcome-head-text-decorating-line-upper-two"></div>
                        <div className="welcome-head-text-decorating-line-upper-three"></div>

                        <h1>The shoping start's here</h1>

                        {/* this div are head text design, ( not designed yet, may be future) */}
                        <div className="welcome-head-text-decorating-line-lower-one"></div>
                        <div className="welcome-head-text-decorating-line-lower-two"></div>
                        <div className="welcome-head-text-decorating-line-lower-three"></div>
                    </div>

                    <div className="company-name">
                        <h2>Pinocchio Clothing Store Inc. </h2>
                    </div>
                </div>

                <div className="under-svg">
                    <div class="custom-shape-divider-top-1677526532">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>

                <div className="footer-links">

                    <div className="main-footer-links">

                        <div className="first-line">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="second-line">
                            <ul>
                                <li>Offers</li>
                                <li>Products</li>
                                <li>New Arrivals</li>
                            </ul>
                        </div>

                    </div>

                    <div className="second-main-footer-links">

                        <div className="second-important-links">
                            <div className="first-important-line">
                                <ul>
                                    <li>Latest launch</li>
                                    <li>Popular product's</li>
                                </ul>
                            </div>
                            <div className="second-important-line">
                                <ul>
                                    <li>Customer’s review</li>
                                    <li>Brand’s we provide</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="copyright">
                        <p>Copyright © 2023 Pinocchio Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer