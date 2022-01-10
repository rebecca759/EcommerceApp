import Category from '../components/Category'
import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Slider/>
            <Category/>
            <Products />
            <Footer />
        </div>
    )
}

export default Home
