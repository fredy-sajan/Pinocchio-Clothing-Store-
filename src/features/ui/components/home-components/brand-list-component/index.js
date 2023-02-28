import React from 'react'
import './stylesheet/style.css'

// Import asset's
import firstBrandLineNames from '../../../../../assets/svg/home-section/brands-section/firstbrands.svg'
import secondBrandLineNames from '../../../../../assets/svg/home-section/brands-section/secondbrands.svg'
import thirdBrandLineNames from '../../../../../assets/svg/home-section/brands-section/thirdbrands.svg'

import firstBrandLineNamesForPcScreen from '../../../../../assets/svg/home-section/brands-section/firstbrands-pc-screen.svg'
import secondBrandLineNamesForPcScreen from '../../../../../assets/svg/home-section/brands-section/secondbrands-pc-screen.svg'
import thirdBrandLineNamesForPcScreen from '../../../../../assets/svg/home-section/brands-section/thirdbrands-pc-screen.svg'



function BrandsInside() {
  return (
    <>
      <div className="brands-inside-section">
        <div className="brands-inside-text-head">
          <h1>Brand's Inside</h1>
        </div>
        <div className="brands-inside-names">
          <div className="mobile-screen">
            <img src={firstBrandLineNames} alt="" />
            <img src={secondBrandLineNames} alt="" />
            <img src={thirdBrandLineNames} alt="" />
          </div>
          <div className="pc-screen">
            <img src={firstBrandLineNamesForPcScreen} alt="" />
            <img src={secondBrandLineNamesForPcScreen} alt="" />
            <img src={thirdBrandLineNamesForPcScreen} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BrandsInside