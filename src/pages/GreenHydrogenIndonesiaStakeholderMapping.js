import React from 'react';

import BackgroundMainBanner from '../assets/green-hydrogen-indonesia-stakeholder/background-main-banner.png';
import BackgroundBanner1 from '../assets/green-hydrogen-indonesia-stakeholder/background-banner-1.png';
import BackgroundBanner2 from '../assets/green-hydrogen-indonesia-stakeholder/background-banner-2.png';
import IconMainBanner from '../assets/green-hydrogen-indonesia-stakeholder/icon-main-banner.png';
import IconBanner1 from '../assets/green-hydrogen-indonesia-stakeholder/icon-banner-1.png';
import IconBanner2 from '../assets/green-hydrogen-indonesia-stakeholder/icon-banner-2.png';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';
import MultipleBannder from '../component/MultipleBannder';
import Sidebar from '../component/Sidebar';
import StakeholderItem from '../component/StakeholderItem';

export default function GreenHydrogenIndonesiaStakeholderMapping() {
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
                        {/* <div className="content-column ps-lg-5">
                        <div className="inner-column">
                            <div>
                                <img src={IconMainBanner} alt="" className='h-100 mw-100' />
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </section>
            {/* End Fluid Section One */}

            <div className='container-article container-width'>
                <Sidebar />
                <div className='stakeholder-container'>
                    <StakeholderItem />
                    <StakeholderItem />
                </div>
            </div>

            <LatestNews />

            <Sponsor />
        </>
    );
}
