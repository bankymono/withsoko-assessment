import React from 'react';
import './Footer.css';
import {RiTruckFill} from 'react-icons/ri'
import {FaAward} from 'react-icons/fa'
import {GiCycle} from 'react-icons/gi'

const Footer = () => {
    return (
        <div className="footer-overall">
            <div className="footer-content">
                <div className="container">
                    <div className="benefits-container">
                        <div className="benefit"><div className="benefit-icon"><RiTruckFill /></div><div>Fast Delivery</div></div>
                        <div className="benefit"><div className="benefit-icon"><FaAward /></div><div>Buyer Protection</div></div>
                        <div className="benefit"><div className="benefit-icon"><GiCycle /></div><div>Customer Support</div></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-last-detail">
                    <div className="store-details">Store Details</div>
                    <div className="footer-store-name">Target</div>
                    <div className="footer-store-address">Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
