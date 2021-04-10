import React, { useState } from 'react';
import {BsCardList} from 'react-icons/bs';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {IoListCircleOutline} from 'react-icons/io5';
import {GrTarget} from 'react-icons/gr';
import {BiStore} from 'react-icons/bi';
import {GoPrimitiveDot} from 'react-icons/go';
import {BiPlus} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import {GrClose} from 'react-icons/gr'
import Modal from 'react-modal';

import './Address.css'

Modal.setAppElement('#root')
const Address = () => {
    const [editModalIsOpen, setEditModalIsOpen] = useState(false)
    const [addModalIsOpen, setAddModalIsOpen] = useState(false)
    return (
        <div className="account-overall"> 
            <div className="container">
                <div className="account-card">
                <div className="left-of-card">
                        <Link to="/account"><div className="left-card-item"><div><BsCardList /></div><div>my order</div></div></Link>
                        <Link to="/address"><div className="left-card-item"><div><HiOutlineLocationMarker /></div><div>my address</div></div></Link>
                    </div>
                    <div className="right-of-card">
                        
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
                                <div className="card-status"><button onClick={() => setEditModalIsOpen(true)}>Edit</button><button className='delete'>Delete</button></div>
                            </div>
                            <div onClick={()=>setEditModalIsOpen(true)} className="new-addr-button">
                                <div><BiPlus /></div><div>Add New Address</div>
                            </div>
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
                            width:'40%',
                            margin:'0 auto',
                            padding:0
                        }
                    }
                }
                >
                <div className="addr-modal-header">
                    <h2 >Edit Address</h2>
                    <button onClick={()=> setEditModalIsOpen(false)}><GrClose /></button>
                </div>
                <p className="address-input">
                    <div className="modal-form-field">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div className="modal-form-field">
                        <label>Mobile Number</label>
                        <input type="number" />
                    </div>
                    <div className="modal-form-field">
                        <label>City</label>
                        <input type="text" />
                    </div>
                    <div className="modal-form-field">
                        <label>Address</label>
                        <input type="text" />
                    </div>
                    <button onClick={()=>setEditModalIsOpen(false)}>Edit Address</button>
                </p>
            </Modal>
        </div>
    )
}

export default Address
