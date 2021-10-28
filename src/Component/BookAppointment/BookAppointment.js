import React from 'react';
import Banner from '../Shared/Banner/Banner';
import './BookAppointment.css';
import bannerImg from "../../images/homeHero.jpg";

const BookAppointment = () => {
    return (
        <section>
            <Banner
                bannerImg={bannerImg}
                bannerTitle="BOOK APPOINTMENT"
            />
            <div className="container">
            <div className="row py-5">
                <div className="col-md-6 bg-dark text-white p-5">
                    <h2>BOOK APPOINTMENT</h2>
                    <p>Fill in your details to book an appointment. Alternatively, you may also call or email us</p>
                    <small>phone: 017126345678</small> <br/>
                    <small>Email: joydippaul72@gmail.com</small>
                </div>
                <div className= "col-md-6 themeBg p-5">
                    <form action="" className="appoint-form">
                        <input type="text" placeholder="Your Name" className="w-100 p-3" />
                        <input type="email" placeholder="Your Email" className="w-100 p-3" /> 
                        <input type="number" placeholder="Your Number" className="w-100 p-3" />
                        <textarea rows="2" placeholder = "Your Message"></textarea> <br/>
                        <button className= "themeBtn">submit</button>
                        </form>
                </div>
            </div>
            </div>
        </section>
    );
};

export default BookAppointment;