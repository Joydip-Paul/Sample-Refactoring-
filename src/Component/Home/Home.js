import React from 'react';
import hero from '../../images/heroBanner.jpg';
import Card from './Card';
import './Home.css';

const Home = () => {
    return (
        <section>
            <div className="hero">
                <img src={hero} alt="" />
                <div className="overlay">
                    <div className="hero-content">
                        <small>HOW IT WORKS</small>
                        <h1>Your daily dose of health <br />in 3 simple steps</h1>
                        <p>It is a long established fact that a reader will be distracted readable content<br /> by the of a page when looking at its layout. </p>
                        <a href="#!" className= "primary-btn2">Be Member</a>
                    </div>
                </div>
            </div>
            <Card />
        </section>
    );
};

export default Home;