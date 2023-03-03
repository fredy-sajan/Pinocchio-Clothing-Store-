import React from 'react'

// CSS import
import './stylesheet/style.css'

// import assets
import nextIcon from '../../../../../assets/svg/home-section/popular-products-section/next-icon.svg'
import previousIcon from '../../../../../assets/svg/home-section/popular-products-section/previous-icon.svg'
import longSleeves from '../../../../../assets/images/home/popular-products/long-sleeves.jpg'
import tShirt from '../../../../../assets/images/home/popular-products/t-shirts.jpg'
import jeanns from '../../../../../assets/images/home/popular-products/jeans.jpg'
import perfume from '../../../../../assets/images/home/popular-products/perfume.jpg'
import hoddie from '../../../../../assets/images/home/popular-products/hoddies.jpg'




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
                            <div className="img-background">
                                <img src={longSleeves} alt="" />
                                <div className="background-color-grading">
                                    <h1>Long Sleeve</h1>
                                </div>
                            </div>
                        </div>
                        <div className="card extra-cards">
                            <div className="img-background">
                                <img src={tShirt} alt="" />
                                <div className="background-color-grading">
                                    <h1>T-Shirt</h1>
                                </div>
                            </div>
                        </div>
                        <div className="card extra-cards">
                            <div className="img-background">
                                <img src={jeanns} alt="" />
                                <div className="background-color-grading">
                                    <h1>Jeans</h1>
                                </div>
                            </div>
                        </div>
                        <div className="card extra-cards">
                            <div className="img-background">
                                <img src={perfume} alt="" />
                                <div className="background-color-grading">
                                    <h1>Perfume</h1>
                                </div>
                            </div>
                        </div>
                        <div className="card extra-cards left-moving-card">
                            <div className="img-background">
                                <img src={hoddie} alt="" />
                                <div className="background-color-grading">
                                    <h1>Hoddie</h1>
                                </div>
                            </div>
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