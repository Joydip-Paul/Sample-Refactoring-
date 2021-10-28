import React from 'react';
import './Banner.css';

const Banner = ({ bannerTitle, bannerImg, link, link2 }) => {
    return (
        <div className="position-relative banner-area">
            <img src={bannerImg} alt="" className="bannerImg" />
            <div className="overlay">
                <div className="content2">
                    <h1>{bannerTitle}</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;