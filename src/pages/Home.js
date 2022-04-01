import React from 'react'
import { Carousel, Cta, Collection, About } from '../components/index'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Slider />
            <Carousel />
            <Cta />
            <Collection />
            <About />
        </div>
    )
}

export default Home
