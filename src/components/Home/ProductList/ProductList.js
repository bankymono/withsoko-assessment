import React,{useRef, useContext} from 'react';
import {Link} from 'react-router-dom'
import {BsChevronRight} from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'
import {HiOutlineEmojiSad} from 'react-icons/hi'
import productImg from '../../../images/productImg.jpg'
import './ProductList.css';
import ProductListItem from './ProductListItem/ProductListItem';
import {ProductsContext} from '../../../App'

const products = [
    {
        id:1,
        name:"Kids 2pk Cloth Face Masks",
        price:"UGX 185,000",
        oldPrice:null,
        image:{productImg}
    },
    {
        id:2,
        name:"Norbury Scandinavian",
        price:"UGX 115,000",
        oldPrice:"UGX 150000",
        image:{productImg},
    },
    {
        id:3,
        name:"Kids 2pk Cloth Face Masks",
        price:"UGX 185,000",
        oldPrice:null,
        image:{productImg}
    },
    {
        id:4,
        name:"Kids 2pk Cloth Face Masks",
        price:"UGX 185,000",
        oldPrice:null,
        image:{productImg}
    },
    {
        id:5,
        name:"Kids 2pk Cloth Face Masks",
        price:"UGX 185,000",
        oldPrice:null,
        image:{productImg}
    }
]

const ProductList = (props) => {
    const {goBack, goForward, setGoBack,setGoForward} = useContext(ProductsContext)
    
    console.log('hello', props)

    const aRef = useRef(null)

    const handleClick = (e) =>{
        e.preventDefault();

        setGoForward('users-list-container')
        setGoBack('')
        // divRef.current.classList.remove('users-list-container-slidein')
        // divRef.current.classList.add('users-list-container')
        
       setTimeout(()=>{props.parentProp.history.push(`/${products[0].id}`)},300) 
        
    }

    return (
        <div>
            <div className={`${goBack} ${goForward} container`}>
                <div className="product-page-layout">
                    <section className="section product-category">
                        <ul>
                            <li className="cat-active">Electronics <span>(12)</span></li>
                            <li>Face Masks <span>(12)</span></li>
                            <li>Fresh Food <span>(12)</span></li>
                            <li>Grocery <span>(12)</span></li>
                            <li>Home <span>(12)</span></li>
                            <li>Kids <span>(12)</span></li>
                        </ul>
                        <div className="category-navigator">View all Categories <BsChevronRight/></div>
                    </section>

                    <section className="section product-list">
                        <div className="search-field">
                            <input placeholder="Search for products..."/><button><FiSearch /></button>
                        </div>
                        <div className="category">Electronics <span>12</span></div>
                        <div>
                            {products.map( product => <Link ref={aRef} onClick={handleClick} key={product.id} className="link-to-details" to={`/${product.id}`}><ProductListItem  product={product} /></Link>)} 
                        </div>
                    </section>
                    <section className="section product-bag">
                        <div className="category">Bag <span>12</span></div>
                        <div className="bag-state">
                            <div className="bag-state-emoji">
                                <HiOutlineEmojiSad />
                            </div>
                            <div className="bag-info">
                                <div className="bag-state-info">Its empty here</div>
                                <div className="bag-comment">Start shopping to add items to your bag</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProductList
