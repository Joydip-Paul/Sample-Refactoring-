import React from 'react';
import designNow from '../../images/cardImg1.jpg';
import './Home.css';

const DesignNow = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 designNow">
                    <img src={designNow} alt="" />
                </div>
                <div className="col-md-6 designNow">
                    <h4>Is online interior design right for you?</h4>
                    <p>Have you ever tried handling a home decoration project by yourself, but found it difficult to execute it all on your own? Or you’ve possibly considered hiring a professional to design your space, but been put off by expensive renovation fees, hassle of coordination and the overall extensive timelines.</p>
                    <p>However, the expense, the hassle and the lengthy timelines do not invalidate the fact that you deserve to have a space that is optimised to your lifestyle, your personality and your preferences – a space that reflects you!

                        Hence, at Sheraspace, we bring to you Bangladesh’s first – Online Interior Design Consultation – a complete alternative to traditional interior design services.</p>
                    <p>We believe interior design should be accessible to everyone, not only a handful few. And hence, our packages have been designed specifically keeping ease.</p>
                </div>
            </div>
        </div>
    );
};

export default DesignNow;