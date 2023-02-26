import React, { useState } from 'react'

// CSS import
import './style-sheets/style.css'

// all NavBar links imported from '/src/setup/app-json-data-storage' json file
import navLinkNames from '../../../setup/app-json-data-storage/navlinks/navLink'


function NavBar() {

    // States
    const [navbarDropdownAnimationKey, setNavbarDropdownAnimationKey] = useState("dropdown-unactive")
    const [navLinkSelectedIndex, setNavLinkSelectedIndex] = useState("")


    // Mobile menu bar open function ( all animation's done by this class )
    let dropDownMenu = () => {
        setNavbarDropdownAnimationKey((previousValue) => {
            if (previousValue === "dropdown-unactive") {
                return "dropdown-active"

            } else {
                return "dropdown-unactive"
            }
        })
    } // dropDownMenu function end



    // Check Active Button from Navbar Links
    let checkBtnActive = (index) => {
        setNavLinkSelectedIndex(index)
    } //check activeBtn function end

    return (
        <>
            <div className='header-box'>
                <div className="header-contents">
                    <div className={`logo ${navbarDropdownAnimationKey}`}>
                        <h1>Pinocchio Clothing Store </h1>
                    </div>
                    <div className={`mobile-menu-bar dropdown-acitve ${navbarDropdownAnimationKey}`} onClick={dropDownMenu}>
                        <div className={`menubar ${navbarDropdownAnimationKey}`}></div>
                        <div className={`menubar ${navbarDropdownAnimationKey}`}></div>
                    </div>
                    <div className="mobile-nav-links-box">
                        <div className={`background-nav-links  ${navbarDropdownAnimationKey}`}></div>

                        <div className={`drop-down-mobile-menu-bar ${navbarDropdownAnimationKey}`} onClick={dropDownMenu}>
                            <div className={`menubar ${navbarDropdownAnimationKey}`}></div>
                            <div className={`menubar ${navbarDropdownAnimationKey}`}></div>
                        </div>

                        <div className="nav-links">
                            {/* <div className="animation-background "></div> */}

                            <ul className={`${navbarDropdownAnimationKey}`} >
                                {/* All navlinks are geted from  (navLinkNames.json file, inside setup/app-json-data-storage/ ) */}
                                {navLinkNames.map((res, index) => {
                                    return (
                                        <li className={index === navLinkSelectedIndex ? 'activeNavbarLinkBtn' : ''} onClick={() => checkBtnActive(index)} key={res.id}>{res.title}</li>
                                    )
                                })
                                }
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar