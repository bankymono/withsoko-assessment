import React from 'react'
import './ConfirmationPage.css'
import EmptyFaceEmoji from '../../images/party-popper.jpg'
import { Link } from 'react-router-dom'

const ConfirmationPage = () => {
    return (
        <div className="bag-overall">
            <div className="container">
                <div className="bag-section">
                    <img className="popper-emoji" src={EmptyFaceEmoji} alt='emoji'/>
                    
                    <div className="bag-section-info">
                        <div className="bag-section-heading confirm-thanks">Thank you!</div>
                        <div className="bag-section-heading confirm-thanks">Your order has been placed successfully</div>
                        <div className="bag-section-comment confirm-comment">You will recieve a confirmation message as soon as the order is accepted.</div>
                        <div className="bag-section-comment">Order Number: John - 271e</div>
                    </div>

                    <div className="bag-call-to-action">
                        <button className="track-order"><Link to="/track-order">Track Order</Link></button>
                        <button className="bag-goback cont"><Link to="/">Continue Shopping</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPage
