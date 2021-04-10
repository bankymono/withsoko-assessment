import React from 'react'
import Footer from '../Footer/Footer'
import ProductList from './ProductList/ProductList'

const Home = (props) => {
    console.log('home', props)
    return (
        <div>
            <ProductList parentProp={props} />
            <Footer />
        </div>
    )
}

export default Home
