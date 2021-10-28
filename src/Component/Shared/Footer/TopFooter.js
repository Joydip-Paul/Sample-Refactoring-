import React from 'react';
import './Footer.css';

const TopFooter = () => {
    return (
        <section className="primary-bg animateGo">
            <div className="container">
                <div className="subFooter">
                    <h3 className="my-auto">Ready to start designing?</h3>
                    <div className="my-auto">
                        <button className="themeBtn">Book Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopFooter;