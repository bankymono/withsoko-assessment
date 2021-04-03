import React, {useState} from 'react'
import './Navigation.css'
import {BiStore} from 'react-icons/bi'
import {IoBagHandleOutline} from 'react-icons/io5'
import {BsCardList} from 'react-icons/bs'
import {BsChevronLeft} from 'react-icons/bs'

const Navigation = () => {
    const [isPresent, setIsPresent] = useState(true);

    return (
        <div className="navigation-overall">
            <div className="brand-intro">
                <div className="container">Store made with <span className="bolden-brand-logo">Sako</span>
                </div>
            </div>
            <div className="container">
                <header className="nav-container">
                        <div className="store">
                            <div className="store-logo"><BiStore /></div>
                            <div className="store-info">
                                <div className="info-name">Target</div>
                                <div className="info-address">Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</div>
                            </div>
                        </div>
                        <ul className="nav-menu">
                            <li className="menu-item"><IoBagHandleOutline className='icon' /><span>Bag</span></li>
                            <li className="menu-item"><BsCardList className='icon'/><span>Orders</span></li>
                        </ul>
                </header>
            </div>
            {isPresent &&(
            <div className="container">
                <div className="sub-nav"><BsChevronLeft className="chevron" /><span className="main-page-nav">Furniture</span></div>
            </div>
            )
            }
        </div>
    )
}

export default Navigation
