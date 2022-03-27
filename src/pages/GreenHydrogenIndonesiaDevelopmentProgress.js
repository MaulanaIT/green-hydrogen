import React from 'react';

import BackgroundMainBanner from '../assets/green-hydrogen-indonesia-development/background-main-banner.png';
import BackgroundBanner1 from '../assets/green-hydrogen-indonesia-development/background-banner-1.png';
import BackgroundBanner2 from '../assets/green-hydrogen-indonesia-development/background-banner-2.png';
import IconMainBanner from '../assets/green-hydrogen-indonesia-development/icon-main-banner.png';
import IconBanner1 from '../assets/green-hydrogen-indonesia-development/icon-banner-1.png';
import IconBanner2 from '../assets/green-hydrogen-indonesia-development/icon-banner-2.png';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';
import MultipleBannder from '../component/MultipleBannder';
import Sidebar from '../component/Sidebar';

export default function GreenHydrogenIndonesiaDevelopmentProgress() {
    return (
        <>
            {/*  Fluid Section One */}
            <section className="fluid-section-one" style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <div className='container-width h-100'>
                    <div className="outer-box clearfix">
                        {/*  Content Column */}
                        <div className="content-column">
                            <div className="inner-column">
                                <div>
                                    <p className='fw-bold primary-color text-center text-lg-start text-size-8 text-size-lg-10'>STAKEHOLDER</p>
                                    <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'>MAPPING</p>
                                    <p className='text-center text-lg-start'>The main hydrogen production processes can be classified into electrolysis, photolysis, and thermolysis.</p>
                                </div>
                            </div>
                        </div>
                        {/*  Content Column */}
                            <div className="content-column d-none d-lg-flex ps-lg-5">
                            <div className="inner-column">
                                <div>
                                    <img src={IconMainBanner} alt="" className='h-100 mw-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Fluid Section One */}

            <div className='container-article container-width'>
                <Sidebar />
                <div>
                    <section className='container-article-section'>
                        <div className='banner-container-image landscape'>
                            <img src={IconBanner2} alt="" />
                        </div>
                    </section>

                    <section className='container-article-section'>
                        <ul className='ps-4 text-black'>
                            <li>2007 à Hydrogen Research as fuel, fuel cell system, BPPT, UI, ITB, LEMGAS</li>
                            <li>2012 à Concept Car (Fuel Cell), Antasena – ITS, Still Development</li>
                            <li>2017 à Fuel cell at BTS, Back Up Power, PT. Telkomsel</li>
                            <li>2018 à Implementation of RE based H2One Autonomous Off Grid Hydrogen Energy System</li>
                            <li>BPPT and Toshiba ESS</li>
                            <li>2020 à Initial Cooperation between ALSTOM – PT. KAI – MEMR for application Hydrogen in Transportation (Train)</li>
                        </ul>
                        <p className='text-black'>
                            Now the status is in commercial implementation and now Indonesia has 800 unit that has been implemented for the telecommunication application (PLN tower – using fuel cell technology). There might be a lot of opportunities and challenges in terms of provider of fuel cell technology.</p>
                    </section>
                </div>
            </div>

            <LatestNews />

            <Sponsor />
        </>
    );
}
