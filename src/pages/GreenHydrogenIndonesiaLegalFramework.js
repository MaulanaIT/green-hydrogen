import React from 'react';

import BackgroundMainBanner from '../assets/green-hydrogen-indonesia-legal-framework/background-main-banner.png';
import BackgroundBanner1 from '../assets/green-hydrogen-indonesia-legal-framework/background-banner-1.png';
import BackgroundBanner2 from '../assets/green-hydrogen-indonesia-legal-framework/background-banner-2.png';
import IconMainBanner from '../assets/green-hydrogen-indonesia-legal-framework/icon-main-banner.png';
import IconBanner1 from '../assets/green-hydrogen-indonesia-legal-framework/icon-banner-1.png';
import IconBanner2 from '../assets/green-hydrogen-indonesia-legal-framework/icon-banner-2.png';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';
import MultipleBannder from '../component/MultipleBannder';
import Sidebar from '../component/Sidebar';

export default function GreenHydrogenIndonesiaLegalFramework() {
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
                                    <p className='fw-bold primary-color text-center text-lg-start text-size-8 text-size-lg-10'>LEGAL</p>
                                    <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'>FRAMEWORK</p>
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
                        <p className='text-black'>Green Hydrogen merupakan salah satu sumber energy yang berasal dari renewable energy, oleh karena nya masuk ke UU yang secara umum mengatur tentang Renewable Energy.</p>
                        <ul className='text-black'>
                            <li>1.&ensp;Permen ESDM Republik Indonesia No.16 Th 2020 tentang rencana strategis Kementerian ESDM thn 2020-2024</li>
                            <li>2.&ensp;Peraturan Presiden Republik Indonesia Nomor 5 Tahun 2006 Tentang Kebijakan Energi Nasional</li>
                            <li>3.&ensp;Undang-Undang Nomor 30 Tahun 2007 tentang Energi (“UU Energi”)</li>
                        </ul>
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
