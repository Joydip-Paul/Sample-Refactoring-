import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Banner from '../Shared/Banner/Banner';
import bannerImg from "../../images/heroBanner.jpg";

const officeInfo = [
    {
        id: 1,
        icon: faMapMarkerAlt,
        heading: "Address",
        description: "198 West 21th Street,   Suite 721 New York,   NY10010",
    },
    {
        id: 2,
        icon: faMapMarkerAlt,
        heading: "Address",
        description: "198 West 21th Street, Suite 721 New York,  NY10010",
    },
    {
        id: 3,
        icon: faPhoneAlt,
        heading: "Phones",
        description: "Phone: +088 01712334567",
        description2: "Cell: +01752634189",
    },
    {
        id: 4,
        icon: faPhoneAlt,
        heading: "Phones",
        description: "Phone: +088 01712334567",
        description2: "Cell: +01752634189",
    },
    {
        id: 5,
        icon: faEnvelope,
        heading: "Email",
        description: "info@joydip.com",
        description2: "contact@joydip.com",
    },
    {
        id: 6,
        icon: faEnvelope,
        heading: "Address",
        description: "info@joydip.com",
        description2: "contact@joydip.com",
    },
];

const Contact = () => {
    return (
        <section className="content-font ">
            <Banner
                bannerImg={bannerImg}
                bannerTitle="CONTACT"
            />
            <div className="row custom-container border-dark py-5 mx-auto">
                <div className="col-md-6 p-4">
                    <div className="heading-style">
                        <h2>Write Us</h2>
                    </div>
                    <p className="py-4 secondary-color">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque
                        atque nihil quos ex, eius officia eligendi minus sunt a?
                    </p>

                    <form action="" className="contact-form">
                        <input type="text" placeholder="Your Name" className="w-100 p-3" />
                        <input
                            type="email"
                            placeholder="Your Email"
                            name=""
                            id=""
                            className="w-100 my-4 p-3"
                        />
                        <textarea name="" id="" rows="8" className="w-100 p-3">
                            Your Message
                        </textarea>
                        <button className = "themeBtn">submit</button>
                    </form>
                </div>
                <div className="col-md-6 p-4">
                    <div className="heading-style">
                        <h2>Offices</h2>
                    </div>
                    <p className="py-4 secondary-color">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque
                        atque nihil quos ex, eius officia eligendi minus sunt a?
                    </p>

                    <div className="row">
                        {officeInfo.map((info) => (
                            <div className="col-md-6 row py-3">
                                <div className="col-md-3 ">
                                    <FontAwesomeIcon
                                        icon={info.icon}
                                        className="fs-5 primary-color"
                                    />
                                </div>
                                <div className="col-md-9 p-0 ">
                                    <span className="fs-5 fw-bold heading-font lh-1">
                                        {info.heading}
                                    </span>
                                    <div className="py-2 secondary-color">
                                        <p className="">
                                            {info.description} <br /> {info.description2}{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default Contact;