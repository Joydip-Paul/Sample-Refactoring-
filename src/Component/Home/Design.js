import React from 'react';
import cardImg1 from '../../images/cardImg1.jpg';
import cardImg2 from '../../images/cardImg22.jpg';
import cardImg3 from '../../images/cardImg33.jpg';
import './Home.css';

const DesignCard = [
    { img: cardImg2, title: "Show us your space", desc: "Take a few photos & videos of your space & tell us about your requirements"},
    { img: cardImg1, title: "Get custom design plans", desc: "Your designer will create a detailed design plan for your space as per your requirements and preferences. You will also receive detailed instructions on how to execute the plan."},
    { img: cardImg3, title: "Implement your design plan", desc: "Take a few photos & videos of your space & tell us about your requirements"},
]

const Design = () => {
    return (
        <section>
            <h1 className="text-center">Online Interior Design in 3 easy steps</h1>
            <div className="container overflow-hidden">
                <div className="row py-5 g-2">
                    
                        {
                            DesignCard.map((data) => (
                                <div className="col-md-4">
                                    <div className="p-3 designCard">
                                        <img src={data.img} alt="" />
                                        <h2>{data.title}</h2>
                                        <p>{data.desc}</p>
                                    </div>
                                </div>
                         ))
                        }
                    
                </div>
            </div>
            
        </section>
    );
};

export default Design;