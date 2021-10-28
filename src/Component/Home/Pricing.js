import React from 'react';
import Pricing1 from '../../images/pricing1.jpg';
import Pricing2 from '../../images/pricing2.jpg';
import Pricing3 from '../../images/pricing3.jpg';
import './Home.css';

const PricingCard = [
    { img: Pricing1, title: "STANDARD", button: "+ view details", price: "2800 BDT" },
    { img: Pricing2, title: "PREMIUM", button: "+ view details", price: "3800 BDT" },
    { img: Pricing3, title: "PLATINUM", button: "+ view details", price: "4800 BDT" },
]

const Pricing = () => {
    return (
        <section>
            <h2 className="text-center">Packages</h2>
            <div className="container overflow-hidden">
                <div className="row py-5 g-2">

                    {
                        PricingCard.map((data) => (
                            <div className="col-md-4">
                                <div className="p-3 PricingCard">
                                    <h2>{data.title}</h2>
                                    <h4>{data.price}</h4>
                                    <img src={data.img} alt="" />
                                    <button className = "themeBtn">{data.button}</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </section>
    );
};

export default Pricing;