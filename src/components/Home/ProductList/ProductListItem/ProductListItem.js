import React from 'react'
import productImg from '../../../../images/productImg.jpg'
// import {GrFormAdd} from 'react-icons/gr'
import './ProductListItem.css'

const ProductListItem = ({product}) => {
    return (
        <div className="productListItem-overall">
            <div className="productListItem-detail">
                <img className="product-img" src={productImg} alt='product' />
                <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">{product.price}</div>
                    {product.oldPrice && <div className="old-price">{product.oldPrice}</div>}
                </div>
            </div>
            <button className="product-add"><span className="add-icon">+</span> Add</button>
        </div>
    )
}

export default ProductListItem
