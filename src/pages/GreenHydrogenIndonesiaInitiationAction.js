import React from 'react';

import BackgroundMainBanner from '../assets/green-hydrogen-indonesia-initiation/background-main-banner.png';
import BackgroundBanner1 from '../assets/green-hydrogen-indonesia-initiation/background-banner-1.png';
import BackgroundBanner2 from '../assets/green-hydrogen-indonesia-initiation/background-banner-2.png';
import IconMainBanner from '../assets/green-hydrogen-indonesia-initiation/icon-main-banner.png';
import IconBanner1 from '../assets/green-hydrogen-indonesia-initiation/icon-banner-1.png';
import IconBanner2 from '../assets/green-hydrogen-indonesia-initiation/icon-banner-2.png';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';
import MultipleBannder from '../component/MultipleBannder';
import Sidebar from '../component/Sidebar';

export default function GreenHydrogenIndonesiaInitiationAction() {
    return (
        <>
            {/*  Fluid Section One */}
            <section className="fluid-section-one" style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: '100% 100%' }}>
                <div className='container-width h-100'>
                    <div className="outer-box clearfix">
                        {/*  Content Column */}
                        <div className="content-column">
                            <div className="inner-column">
                                <div>
                                    <p className='fw-bold primary-color text-center text-lg-start text-size-8 text-size-lg-10'>INITIATION</p>
                                    <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'>AND ACTION</p>
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
                        <p className='text-black'>So far, the potential for green hydrogen in Indonesia is quite significant. Still, the needs of the industry itself must review this, whether green hydrogen or blue hydrogen will be more suitable to be applied in the Indonesian climate. Five main pillars need to be developed as the primary considerations in the development of green hydrogen, namely energy efficiency, energy sufficiency, renewable energy, electrification, and green molecule (PtX). If appropriately done, four pillars can reduce around 80% of total carbon emissions.
                            <br />
                            In its development, Indonesia plans to launch hydrogen development until 2050 with the following scheme:</p>
                    </section>

                    <section className='container-article-section'>
                        <div className='banner-container-image landscape'>
                            <img src={IconBanner2} alt="" />
                        </div>
                    </section>
                </div>
            </div>

            <LatestNews />

            <Sponsor />
        </>
    );
}
