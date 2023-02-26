import React from 'react'
import './style-sheets/style.css'

// import assets
import prevoiusIcon from '../../../../../assets/svg/home-section/new-arrivals/next-icon.svg'
import nextIcon from '../../../../../assets/svg/home-section/new-arrivals/previous-icon.svg'
// images
import men from '../../../../../assets/images/home/new-arrivals-section/men.jpg'
import women from '../../../../../assets/images/home/new-arrivals-section/women.jpg'


function NewArrivalsComponent() {
    console.log("mewArrival done")
    return (
        <>
            <div className='new-arrivals-container'>

                <div className="card-container">
                    <div className="card-container-head-div">

                        {/* now not showing this UI, setup for past work */}
                        {/* <div className="card-conrainer-head-text-board-hanger-line">
                            <div className="hanger-line hanger-line-first"></div>
                            <div className="hanger-line hanger-line-second"></div>
                        </div> */}

                        <div className="card-container-text-head">
                            <h1>New Arrival's</h1>
                        </div>
                    </div>

                    <div className="card-container-new-arrivals">
                        <div className="cards">
                            <div className="card">
                                <div className="image-card">
                                    <img src={women} alt="" />
                                    <div className="new-arrival-name">
                                        <h1>Women</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-card">
                                    <img src={men} alt="" />
                                    <div className="new-arrival-name">
                                        <h1>Men</h1>
                                    </div>
                                </div>
                            </div>
                
                        </div>

                        <div className="controlls-and-see-all-new-arrival-card">
                            <div className="next-icon">
                                <img src={nextIcon} alt="" />
                            </div>
                            <div className="previous-icon">
                                <img src={prevoiusIcon} alt="" />
                            </div>
                            <div className="see-all-cards">
                                <span>See All</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default NewArrivalsComponent