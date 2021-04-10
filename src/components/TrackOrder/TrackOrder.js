import React from 'react'
import './TrackOrder.css'
import {GrTarget} from 'react-icons/gr'
import {IoCheckmarkCircleSharp} from 'react-icons/io5'
import EmptyFaceEmoji from '../../images/party-popper.jpg'
import { Link } from 'react-router-dom'
import productImg from '../../images/productImg.jpg'

const TrackOrder = () => {
    return (
        <div className="bag-overall">
            <div className="container">
                <div className="track-order-section">
                    <div className="tracker card-item">
                        <div className="card-item-log"><GrTarget className="tracker-icon"/></div>
                        <div className="tracker card-item-info">
                            <div className="tracker card-item-name">Target</div>
                            <div className="tracker card-item-comment">25/02/2021, 01:55 PM | 3 Items | UGX 1,600</div>
                        </div>
                    </div>
                    <div className="tracker card-item">
                        <div className="card-item-log"><IoCheckmarkCircleSharp className="tracker-icon active" /></div>
                        <div className="tracker card-item-info">
                            <div className="tracker card-item-name">Order Confirmed</div>
                            <div className="tracker card-item-comment">25/02/2021, 01:55 PM </div>
                        </div>
                    </div>
                    <div className="tracker card-item">
                        <div className="card-item-log"><IoCheckmarkCircleSharp className="tracker-icon active" /></div>
                        <div className="tracker card-item-info">
                            <div className="tracker card-item-name">Shipped</div>
                            <div className="tracker card-item-comment">25/02/2021, 01:55 PM | 3 Items | UGX 1,600</div>
                        </div>
                    </div>
                    <div className="tracker card-item">
                        <div className="card-item-log"><IoCheckmarkCircleSharp className="tracker-icon" /></div>
                        <div className="tracker card-item-info">
                            <div className="tracker card-item-name">Delivered</div>
                            <div className="tracker card-item-comment">25/02/2021, 01:55 PM | 3 Items | UGX 1,600</div>
                        </div>
                    </div>
                    <div className="prodList-tracker">
                        <div className="item-no">3 Items</div>
                        <div className="productListItem-overall tracking">
                            <div className="productListItem-detail">
                                <img className="product-img" src={productImg} alt='product' />
                                <div className="product-info">
                                    <div className="product-name tracking-list">product.name</div>
                                    <div className="product-price tracking-list-size"><div>Size : Medium</div><div className="prod-color">color<div></div></div></div>
                                    <div className="product-price tracking-list-val">X2</div>
                                    {/* {product.oldPrice && <div className="old-price">"product.oldPrice"</div>} */}
                                </div>
                            </div>
                            <div className="product-price tracking">UGX 8700</div>
                        </div>
                        <div className="productListItem-overall tracking">
                            <div className="productListItem-detail">
                                <img className="product-img" src={productImg} alt='product' />
                                <div className="product-info">
                                    <div className="product-name tracking-list">product.name</div>
                                    <div className="product-price tracking-list-size"><div>Size : Medium</div><div className="prod-color">color<div></div></div></div>
                                    <div className="product-price tracking-list-val">X2</div>
                                    {/* {product.oldPrice && <div className="old-price">"product.oldPrice"</div>} */}
                                </div>
                            </div>
                            <div className="product-price tracking">UGX 8700</div>
                        </div>
                    </div>
                    <div className="prodList-tracker">
                        <div className="third-prod-container">
                                <div className="card-order-container">
                                    <div className="card-order ">
                                        <div className="card-order-name subtotal">Subtotal</div>
                                        <div className="card-order-num">Delivery</div>
                                    </div>
                                    <div className="card-order">
                                        <div className="card-order-name  subtotal">UGX 12.700</div>
                                        <div className="card-order-num">25/02/2021 01.55pm</div>
                                    </div>
                                </div>
                            </div>
                            <div className="fourth-prod-container">
                                <div className="card-order-container">
                                        <div className="card-order ">
                                            <div className="card-order-name">Total</div>
                                            <div className="card-order-num tax-detail">Inclusive of all taxes</div>
                                        </div>
                                        <div className="card-order">
                                            <div className="card-order-name">UGX 12.700</div>
                                        </div>
                                </div>
                            </div>
                            <div className="fifth-prod-container">
                                <div>You are about to save UGX 27,400 on this order</div>
                            </div>
                        </div>
                        <div className="prodList-last-cont">
                            <div className="summary">
                                <div className="heading">Your Delivery Detals</div>
                                <div className="name">Shrey Karah</div>
                                <div className="type-of-purchase">Cash on Delivery</div>
                                <div className="tel">+2349922202</div>
                                <div className="addr">Quench Ville, plot 12 Nkrumah Rd Kampala, Uganda</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default TrackOrder
