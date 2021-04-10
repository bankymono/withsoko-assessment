import React, {useEffect, useState} from 'react';
import './ProductDetail.css';
import BigProdImg from '../../../images/productImageBig.jpg';
import smallProdImg from '../../../images/productImg.jpg';
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Footer from '../../Footer/Footer';

const otherProds = [
    {   
        id:1,
        name:"Holiday Print",
        description:"flannel sheet"
    },
    {   
        id:2,
        name:"Holiday Print",
        description:"flannel sheet"
    },
    {   
        id:3,
        name:"Holiday Print",
        description:"flannel sheet"
    },
    {   
        id:4,
        name:"Holiday Print",
        description:"flannel sheet"
    },
    {   
        id:5,
        name:"Holiday Print",
        description:"flannel sheet"
    },
    {   
        id:6,
        name:"Holiday Print",
        description:"flannel sheet"
    },
    {   
        id:7,
        name:"Holiday Print",
        description:"flannel sheet"
    },
    {   
        id:8,
        name:"Holiday Print",
        description:"flannel sheet"
    },
    {   
        id:9,
        name:"Holiday Print",
        description:"flannel sheet"
    },
    {   
        id:10,
        name:"Holiday Print",
        description:"flannel sheet"
    },
]

const ProductDetail = ({setIsCategory}) => {
    const [displayDiscount, setDisplayDiscount] = useState(true)

    useEffect(()=>{
        setIsCategory(true)

        return ()=>{
            setIsCategory(false)
        }
    },[])

    return (
        <>
        <div className="container">
            <div className="product-detail-overall">
                <div className="product-detail-info">
                    <div className="product-detail-img-container">
                        <img className="product-detail-img" src={BigProdImg} alt='product' />
                        <div className="img-pagination"><div className="img-active"></div><div></div><div></div><div></div></div>
                    </div>
                    <div className="product-detail-description">
                        <div>
                            <div className="product-detail-heading">Norbury Scandinavian Wood Leg Ottoman</div>
                            <div className="product-detail-about">Sold as a piece, wooden upholstered ottoman lends a laid-back appeal to your indoor
                                space. Comes with soft padding for extra comfort and support. Solid wooden and metal frames
                                ensures durable, long-lasting use. Great as a footrest or extra seat when entertaining guests.
                            </div>
                        </div>

                        <div className="product-detail-price">
                            <div>UGX 118,400 <span className="discount-box">-20%</span></div>
                            {displayDiscount && <div className='discounted-price'>184,000</div>}
                        </div>
                        
                        <div className="product-detail-count">
                            <div><button>-</button><span>1</span><button>+</button></div>
                        </div>  

                        <div className="call-to-action">
                            <button className="add-to-bag">Add To Bag</button><Link to="/purchase"><button className="buy-now">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="product-related">
                    <div className="heading">
                        <div>Related Products</div>
                        <div className="other-product-pagination"><div className="left-chev"><BsChevronLeft className="icon" /></div><div><BsChevronRight className="icon" /></div></div>
                    </div>
                    <div className="prod-grid">
                        {otherProds.map(prod => (<div  key = {prod.id} className="grid-item">
                            <img src={smallProdImg} alt='product'/>
                            <div>
                                <div>{prod.name}</div>
                                <div>{prod.description}</div>
                            </div>
                        </div>))}

                    </div>
                </div>
            </div>

        </div>
        <Footer />
        </>
    )
}

export default ProductDetail
