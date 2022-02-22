import React from 'react';

import BackgroundMainBanner from '../assets/green-hydrogen-indonesia/background-main-banner.png';
import BackgroundBanner1 from '../assets/green-hydrogen-indonesia/background-banner-1.png';
import BackgroundBanner2 from '../assets/green-hydrogen-indonesia/background-banner-2.png';
import IconMainBanner from '../assets/green-hydrogen-indonesia/icon-main-banner.png';
import IconBanner1 from '../assets/green-hydrogen-indonesia/icon-banner-1.png';

import LatestNews from '../component/LatestNews';
import MultipleBannder from '../component/MultipleBannder';
import Sponsor from '../component/Sponsor';

export default function GreenHydrogenIndonesia() {
    return (
        <>
            {/*  Fluid Section One */}
            <section className="fluid-section-one" style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <div className="outer-box clearfix">
                    {/*  Content Column */}
                    <div className="content-column">
                        <div className="inner-column">
                            <div>
                                <p className='fw-bold primary-color text-size-10 text-size-lg-15'>GREEN HYDROGEN</p>
                                <p className='fw-bold text-size-20 text-size-lg-25'>IN INDONESIA</p>
                                <p>The industrial sector in Indonesia is supposed to draw a map of its energy process to choose the
                                    more effective and efficient energy using blue hydrogen or green hydrogen; this still becomes
                                    homework for the Indonesian industry. Until now, a feasibility study on this matter is still
                                    being prepared. </p>
                            </div>
                        </div>
                    </div>
                    {/*  Content Column */}
                    <div className="content-column ps-lg-5">
                        <div className="inner-column">
                            <div>
                                <img src={IconMainBanner} alt="" className='h-100 mw-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Fluid Section One */}

            <section className='d-flex flex-wrap justify-content-center vh-100 p-3 p-lg-5' style={{ background: `url(${BackgroundBanner1}) no-repeat`, backgroundSize: 'cover' }}>
                <div className='col-12 col-lg-4 d-flex flex-column justify-content-center p-5'>
                    <p className='fw-bold text-size-10 text-size-lg-15'>TARGET</p>
                    <p>Energy Mix in 2020 is 11,2% and is targeted to reach 28% in 2030.
                        2020 reach 64.36 MTCO2e of GHG emission reduction, plan 2030 reach 314 MTCO2e of GHG emission reduction</p>
                    <p className='fw-bold text-size-10 text-size-lg-15'>IN INDONESIA</p>
                </div>
                <div className='col-12 col-lg-8 d-flex flex-column justify-content-center'>
                    <img src={IconBanner1} alt="" className='mh-100 mw-100' />
                </div>
            </section>

            <MultipleBannder />
            <MultipleBannder />
            <MultipleBannder />

            <LatestNews />

            <Sponsor />
        </>
    );
}
