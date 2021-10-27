import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';

const TeamData = [
    { title: "Refactoring", desc: "You are a Lead Web developer at Omni AI Limited and you are approached by one of our customers to develop mock up website. ", link: "/home" },
    { title: "Refactoring", desc: "You are a Lead Web developer at Omni AI Limited and you are approached by one of our customers to develop mock up website. ", link: "/home" },
    { title: "Refactoring", desc: "You are a Lead Web developer at Omni AI Limited and you are approached by one of our customers to develop mock up website. ", link: "/home" },
    { title: "Refactoring", desc: "You are a Lead Web developer at Omni AI Limited and you are approached by one of our customers to develop mock up website. ", link: "/home" },
    { title: "Refactoring", desc: "You are a Lead Web developer at Omni AI Limited and you are approached by one of our customers to develop mock up website. ", link: "/home" },
    { title: "Refactoring", desc: "You are a Lead Web developer at Omni AI Limited and you are approached by one of our customers to develop mock up website. ", link: "/home" },

]

const Card = () => {
    return (
        <div className="container pb-5">
            <div className="py-5">
                <div className="about-title">
                    <h2>Sample Refactoring
                    </h2>
                </div>

                <div className="row gy-3 justify-content-center">
                    {
                        TeamData.map((data) => (
                            <div className="col-xl-4 col-md-6">
                                <div className="card team-card">
                                    <span className="font-bold fs-2">{data.title}</span>
                                    <p>{data.desc}</p>
                                    <a href={data.link} target="_blank">View Details <FontAwesomeIcon className="primary-color" icon={faArrowRight} /></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;