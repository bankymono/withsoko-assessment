import React, {useState,useContext} from 'react';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';
import './Navigation.css';
import {BiStore} from 'react-icons/bi';
import {IoBagHandleOutline} from 'react-icons/io5';
import {IoPersonOutline} from 'react-icons/io5';
import {BsChevronLeft} from 'react-icons/bs';
import {ProductsContext} from '../../App'

const Navigation = (props) => {
    const {isCategory} = props
    console.log('nav', props)
    const {setGoBack,setGoForward}= useContext(ProductsContext)                
    // const [isPresent, setIsPresent] = useState(true);
    const [isloggedIn, setIsLoggedIn] = useState(false);

    const handleClick = (e) =>{
        e.preventDefault();

        setGoBack('user-list-container-slidein')
        setGoForward('')
        
        props.history.push(`/`) 
        
    }

    return (
        <div className="navigation-overall">
            <div className="brand-intro">
                <div className="container">Store made with <span className="bolden-brand-logo">Soko</span>
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
                            <li className="menu-item"><Link className="menu-link" to="/bag"><IoBagHandleOutline className='icon' /><span>Bag</span></Link></li>
                            <li className="menu-item"><Link className="menu-link" to="/account"><IoPersonOutline className='icon'/><span>Account</span></Link></li>
                        </ul>
                </header>
            </div>
            <div className="container">
                <div className="sub-nav-container">
                    {isCategory &&(
                        <Link onClick={handleClick} className="link-in-nav" to="/"><div className="sub-nav"><BsChevronLeft className="chevron" /><span className="main-page-nav">Furniture</span></div></Link>
                    )
                    }

                    {isloggedIn &&(
                        <button className="logout-button">Logout</button>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navigation)
