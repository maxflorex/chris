import React from 'react';
import { chrisBw } from '../images/index';

const About = () => {
    return (
        <div className="bg-[url('/src/images/All/cc-deep-blue.jpeg')] py-4 bg-cover ">
            <div className="container mx-auto backdrop-blur-lg">
                    <div className="flex flex-row gap-8">
                        <div>
                            <h2>Subtitle</h2>
                            <h1>Title</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus deleniti nihil dolorum repudiandae asperiores. Sunt!</p>
                            <button className='btn'>Btn</button>
                        </div>
                        <img src={chrisBw} alt="Chris Painting" className='' />
                    </div>
                </div>
            </div>
    );
};

export default About;
