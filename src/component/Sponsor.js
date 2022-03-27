import React from 'react'

import { Translate } from './helper';

import Sponsor1 from '../assets/sponsor-1.png';
import Sponsor2 from '../assets/sponsor-2.png';
import Sponsor3 from '../assets/sponsor-3.png';

export default function Sponsor() {
    return (
        <>
            {/*  Clients Section */}
            <section className="clients-section-two">
                <div className="container-width">
                    <div className="sec-title text-center style-two">
                        <span className="fw-bold title"><Translate title={`Event Sponsors`} /></span>
                        <h2><Translate title={`Partners & Sponsors`} /></h2>
                    </div>

                    {/*  Sponsors Outer */}
                    <div className="sponsors-outer wow fadeInUp">
                        {/* Sponsors*/}
                        <ul className="sponsors">
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Sponsor1} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Sponsor2} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Sponsor3} alt="" /></a></figure></li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* End Clients Section */}
        </>
    )
}
