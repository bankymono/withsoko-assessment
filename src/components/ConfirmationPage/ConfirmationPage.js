import React, {useContext} from 'react'
import './ConfirmationPage.css'
import EmptyFaceEmoji from '../../images/party-popper.jpg'
import { Link } from 'react-router-dom'
import {ProductsContext} from '../../App'

const ConfirmationPage = (props) => {
    const {setGoBack,setGoForward}= useContext(ProductsContext)
    const handleClick = (e) =>{
        e.preventDefault();

        setGoBack('user-list-container-slidein')
        setGoForward('')
        
        props.history.push(`/`) 
        
    }
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
                        <Link className="tracker" to="/track-order"><button className="track-order">Track Order</button></Link>
                        <Link onClick={handleClick} to="/"><button className="bag-goback cont">Continue Shopping</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPage
