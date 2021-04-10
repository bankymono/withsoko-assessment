import React from 'react'
import './Bag.css'
import EmptyFaceEmoji from '../../images/empty-face-emoji.svg'
import { Link } from 'react-router-dom'

const Bag = () => {
    return (
        <div className="bag-overall">
            <div className="container">
                <div className="bag-section">
                    <img className="bag-section-emoji" src={EmptyFaceEmoji} alt='emoji'/>
                    
                    <div className="bag-section-info">
                        <div className="bag-section-heading">Its empty here</div>
                        <div className="bag-section-comment">Start shopping to add items to your bag</div>
                    </div>

                    <div className="bag-call-to-action">
                        <button className="bag-goback"><Link to="/">Back to Homepage</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bag
