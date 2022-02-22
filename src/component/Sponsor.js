import React from 'react'

import Gold1 from '../images/clients/gold-1.png';
import Gold2 from '../images/clients/gold-2.png';
import Gold3 from '../images/clients/gold-3.png';
import Gold4 from '../images/clients/gold-4.png';
import Gold5 from '../images/clients/gold-5.png';
import Platinum1 from '../images/clients/platinum-1.png';
import Platinum2 from '../images/clients/platinum-2.png';
import Silver1 from '../images/clients/silver-1.png';
import Silver2 from '../images/clients/silver-2.png';
import Silver3 from '../images/clients/silver-3.png';

export default function Sponsor() {
    return (
        <>
            {/*  Clients Section */}
            <section className="clients-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center style-two">
                        <span className="title">Event Sponsors</span>
                        <h2>Partners & Sponsors</h2>
                    </div>

                    {/*  Sponsors Outer */}
                    <div className="sponsors-outer wow fadeInUp">
                        <div className="title-box"><h3>Platinum Sponsors</h3></div>
                        {/* Sponsors */}
                        <ul className="sponsors">
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Platinum1} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Platinum2} alt="" /></a></figure></li>
                        </ul>
                    </div>

                    {/*  Sponsors Outer */}
                    <div className="sponsors-outer wow fadeInUp">
                        <div className="title-box"><h3>Gold Sponsors</h3></div>
                        {/* Sponsors Carousel*/}
                        <ul className="sponsor-carousel owl-carousel owl-theme">
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Gold1} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Gold2} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Gold3} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Gold4} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Gold5} alt="" /></a></figure></li>
                        </ul>
                    </div>

                    {/*  Sponsors Outer */}
                    <div className="sponsors-outer wow fadeInUp">
                        <div className="title-box"><h3>Silver Sponsors</h3></div>
                        {/* Sponsors*/}
                        <ul className="sponsors">
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Silver1} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Silver2} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Silver3} alt="" /></a></figure></li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* End Clients Section */}
        </>
    )
}
