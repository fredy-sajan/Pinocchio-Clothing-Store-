import React from 'react'

// CSS import
import './stylesheet/style.css'

// import assets
import nextIcon from '../../../../../assets/svg/home-section/popular-products-section/next-icon.svg'
import previousIcon from '../../../../../assets/svg/home-section/popular-products-section/previous-icon.svg'

function PopularProductsComponent() {
    return (
        <>
            <div className="popular-products-container">
                <div className="popular-products-contents">
                    <div className="popular-products-head-text">
                        <h1>`Popular Product's</h1>
                    </div>
                    <div className="popular-products-cards">
                        <div className="card">

                        </div>
                        <div className="card extra-cards">

                        </div>
                        <div className="card extra-cards">

                        </div>
                        <div className="card extra-cards">

                        </div>
                        <div className="card extra-cards left-moving-card">

                        </div>
                        {/* <div className="card extra-cards">
                            
                        </div> */}
                    </div>
                    <div className="next-previous">
                        <div className="next">
                            <img src={previousIcon} alt="" />
                        </div>
                        <div className="previous">
                            <img src={nextIcon} alt="" />
                        </div>
                        <div className="see-all">
                            <p>See all</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularProductsComponent