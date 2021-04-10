import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Purchase.css';
import Modal from 'react-modal';
import {GrClose} from 'react-icons/gr';
import {BiPlus} from 'react-icons/bi';
import {FaCheck} from 'react-icons/fa';

const Purchase = () => {
    const [disabled,setDisabled] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [isVerified, setIsVerified] = useState(true)
    const [addressSelected, setAddressSelected] = useState(true)
    const [displayDiscount, setDisplayDiscount] = useState(true)
    const [editModalIsOpen, setEditModalIsOpen] = useState(false)

    const handleChange = (e) =>{
        setPhoneNumber(e.target.value)
    }

    useEffect(()=>{

        if(phoneNumber.length > 3){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }, [phoneNumber])

    return (
        <div className="purchase-overall">
            <div className="container">
                <div className="purchase-container">
                    <div className="purchase-left-block">
                        <div className="timeline active">
                            {isVerified? <div className="firstdiv"><FaCheck /></div> :<div className="firstdiv">1</div> }
                            <div className="heading">Account</div>
                            <div className="comment">To place your order, log in by entering your 10 digit mobile number</div>
                            <div className="form-field">
                                <label>Mobile Number</label>
                                <div>
                                    <input onChange={handleChange} value={phoneNumber} type="text" placeholder="Enter mobile Number" />
                                    <button style={disabled?null:{backgroundColor:"#fbc823"}} disabled={disabled} onClick={()=>setEditModalIsOpen(true)}>Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="timeline active">
                            {addressSelected? <div className="firstdiv"><FaCheck /></div> :<div className="firstdiv">2</div> }
                            <div className="heading">Delivery address</div>

                            <div className="comment">
                                {isVerified?
                                        <div className="sub-address-container">
                                        <div>
                                            <div className="card-item">
                                                <div className="card-item-info">
                                                    <div className="card-item-name">Sherry Karah</div>
                                                </div>
                                            </div>
                                            <div className="card-order-container">
                                                <div className="card-order">
                                                    <div className="card-order-num">Quench Ville,Plot 12 Nkrumah Rd Kampala Uganda</div>
                                                    <div className="card-order-name">+08012237383</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={()=>setEditModalIsOpen(true)} className="new-addr-button">
                                            <div><BiPlus /></div><div>Add New Address</div>
                                        </div>
                                    </div>
                                :
                                <div>Select your delivery address from existing one or add new one.</div>
                            }
                            </div>
                        </div>
                        <div className="timeline active">
                            {addressSelected? <div className="firstdiv"><FaCheck /></div> :<div className="firstdiv">3</div> }
                            <div className="heading">Payment</div>
                            <div className="comment">Select your payment method</div>
                            {
                                addressSelected ? 
                                    <div className="order-container">
                                        <div><input type="radio" checked readOnly /><div>Cash on delivery</div></div>
                                        <Link to="/confirm"><button className="order-button">Place Order</button></Link>
                                    </div> 
                                : null
                            }
                        </div>
                    </div>
                    <div className="purchase-right-block">
                        <div className="first-prod-container">
                            <div><div>Bag</div><div className="badge">0</div></div>
                            <button>Clear Bag</button>
                        </div>
                        <div className="second-prod-container">
                            <div className="prod-tobe-purchased">
                                <div>
                                    <div className="product-detail-heading heading">Norbury Scandinavian</div>
                                    <div className="product-detail-about sub-heading">Per piece</div>
                                </div>

                                <div  className='prod-name-and-count'>
                                    <div className="product-detail-price">
                                        <div>UGX 118,400</div>
                                        {displayDiscount && <div className='discounted-price'>184,000</div>}
                                    </div>
                                    
                                    <div>
                                        <div className="product-detail-count">
                                            <div><button>-</button><span>1</span><button>+</button></div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <div className="prod-tobe-purchased">
                                <div>
                                    <div className="product-detail-heading heading">Norbury Scandinavian</div>
                                    <div className="product-detail-about sub-heading">Per piece</div>
                                </div>

                                <div  className='prod-name-and-count'>
                                    <div className="product-detail-price">
                                        <div>UGX 118,400</div>
                                        {displayDiscount && <div className='discounted-price'>184,000</div>}
                                    </div>
                                    
                                    <div>
                                        <div className="product-detail-count">
                                            <div><button>-</button><span>1</span><button>+</button></div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
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
                </div>
            </div>
            <Modal 
                isOpen={editModalIsOpen} 
                onRequestClose={()=>setEditModalIsOpen(false)}
                style={
                    {
                        overlay:{
                            backgroundColor:'rgba(104, 104, 105, 0.668)',
                            // background:'transparent'
                        },
                        content:{
                            top:'50%',
                            transform:'translateY(-50%)',
                            width:'30%',
                            height:'40%',
                            margin:'0 auto',
                            padding:0,
                        }
                    }
                }
                >
                <div className="addr-modal-header purchase-header">
                    <h2 >Verify your number</h2>
                    <button onClick={()=> setEditModalIsOpen(false)}><GrClose /></button>
                </div>
                <div className="address-input">
                    <div className="modal-form-field purchase-modal">
                        <div>Please enter verification code sent via sms to  +256 76 633</div>

                        <div className="purchase-input">
                            <input type='number' placeholder="0" />
                            <input placeholder="0" />
                            <input placeholder="0" />
                            <input placeholder="0" />
                        </div>

                        <button>Resend Code</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Purchase
