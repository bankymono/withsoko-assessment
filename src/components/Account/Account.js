import React from 'react'
import {BsCardList} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {IoListCircleOutline} from 'react-icons/io5'
import {GrTarget} from 'react-icons/gr';
import {BiStore} from 'react-icons/bi';
import {GoPrimitiveDot} from 'react-icons/go'
import {Link} from 'react-router-dom'

import './Account.css'

const Account = () => {
    return (
        <div className="account-overall"> 
            <div className="container">
                <div className="account-card">
                    <div className="left-of-card">
                        <Link to="/account"><div className="left-card-item"><div><BsCardList /></div><div>my order</div></div></Link>
                        <Link to="/address"><div className="left-card-item"><div><HiOutlineLocationMarker /></div><div>my address</div></div></Link>
                    </div>
                    <div className="right-of-card">
                        <div className="sub-header">
                            <div>Showing all orders</div>
                            <button><IoListCircleOutline /><span>Filters</span></button>
                        </div>
                        <div className="sub-card-container">
                            <div>
                                <div className="card-item">
                                    <div className="card-item-logo"><GrTarget /></div>
                                    <div className="card-item-info">
                                        <div className="card-item-name">Target</div>
                                    </div>
                                </div>
                                <div className="card-order-container">
                                    <div className="card-order">
                                        <div className="card-order-name">Order #12333</div>
                                        <div className="card-order-num">3 Items</div>
                                    </div>
                                    <div className="card-order">
                                        <div className="card-order-name">UGX 12.700</div>
                                        <div className="card-order-num">25/02/2021 01.55pm</div>
                                    </div>
                                </div>
                                <div className="card-status"><span><GoPrimitiveDot /></span><span>Shipped</span></div>
                            </div>
                            <div>
                                <div className="card-item">
                                    <div className="card-item-logo"><BiStore /></div>
                                    <div className="card-item-info">
                                        <div className="card-item-name">Another store</div>
                                    </div>
                                </div>
                                <div className="card-order-container">
                                    <div className="card-order">
                                        <div className="card-order-name">Order #1233396</div>
                                        <div className="card-order-num">1 Items</div>
                                    </div>
                                    <div className="card-order">
                                        <div className="card-order-name">UGX 12.700</div>
                                        <div className="card-order-num">25/02/2021 01.55pm</div>
                                    </div>
                                </div>
                                <div className="card-status"><span><GoPrimitiveDot /></span><span>Delivered</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
