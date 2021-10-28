import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const TopFooter = () => {
    return (
        <section className="primary-bg animateGo">
            <div className="container">
                <div className="subFooter">
                    <h3 className="my-auto">Ready to start designing?</h3>
                    <div className="my-auto">
                        <Link to="/book-appointment">
                            <button className="themeBtn">Book Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopFooter;