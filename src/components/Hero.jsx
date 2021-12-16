import React from 'react';
import { HeroSection, Navigation } from '../global/Styled';
import { ccLogo } from '../images/index';
import './img.css'

const Hero = () => {
    return (
        <HeroSection>
            <Navigation>
                <div className="container mx-auto">
                    <h1 className='font-light'>The art of</h1>
                    <img src={ccLogo} alt="logo" className='w-1/2 mx-auto ccHero' id='chris'/>
                </div>
            </Navigation>
        </HeroSection>
    );
};

export default Hero;
