import React from 'react'

// CSS import
import './stylesheet/style.css'

// Assets import
import men from '../../../../../assets/images/home/new-arrivals-section/men.jpg'
import ratingStarOne from '../../../../../assets/svg/home-section/review-section/stars-one.svg'
import nextIcon from '../../../../../assets/svg/home-section/review-section/next-icon.svg'
import previousIcon from '../../../../../assets/svg/home-section/review-section/previous-icon.svg'




function ReviewComponent() {
    return (
        <>
            <div className="review-container">
                <div className="review-texthead">
                    <h1>Testimonial's</h1>
                </div>
                <div className="review-cards">
                    <div className="card">
                        <div className="date-of-review">
                            <p>13 Day's ago</p>
                        </div>
                        <div className="profile-info">
                            <div className="profile-picture">
                                <img src={men} alt="" />
                            </div>
                            <div className="profile-name">
                                <h2>Rihana</h2>
                                <div className="profie-profesion">
                                    <h3>singer, actress, and
                                        businesswoman</h3>
                                </div>
                            </div>
                        </div>
                        <div className="rating-stars">
                            <img src={ratingStarOne} alt="" />
                        </div>
                        <div className="review-text">
                            <p>
                                "I was recently at your store, what a delight to find
                                you!Thank you, not only for your expertise but also for
                                you encouragement in making more conscientious choices!"
                                "I was recently at your store, what a delight to find
                                you!Thank you, not only for your expertise but also for
                                you encouragement in
                            </p>
                        </div>
                    </div>
                </div>
                <div className="next-previous">
                    <div className="next">
                        <img src={previousIcon} alt="" />
                    </div>
                    <div className="previous">
                        <img src={nextIcon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewComponent