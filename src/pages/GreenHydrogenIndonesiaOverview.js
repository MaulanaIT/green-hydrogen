import React from 'react';

import BackgroundMainBanner from '../assets/green-hydrogen-indonesia-overview/background-main-banner.png';
import BackgroundBanner1 from '../assets/green-hydrogen-indonesia-overview/background-banner-1.png';
import BackgroundBanner2 from '../assets/green-hydrogen-indonesia-overview/background-banner-2.png';
import IconMainBanner from '../assets/green-hydrogen-indonesia-overview/icon-main-banner.png';
import IconBanner1 from '../assets/green-hydrogen-indonesia-overview/icon-banner-1.png';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';
import MultipleBannder from '../component/MultipleBannder';

export default function GreenHydrogenIndonesiaOverview() {
    return (
        <>
            {/*  Fluid Section One */}
            <section className="fluid-section-one" style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <div className="outer-box clearfix">
                    {/*  Content Column */}
                    <div className="content-column">
                        <div className="inner-column">
                            <div>
                                <p className='fw-bold primary-color text-center text-lg-start text-size-8 text-size-lg-10'>OVERVIEW <span className='text-size-5 text-size-lg-8'>GREEN HYDROGEN</span></p>
                                <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'>IN INDONESIA</p>
                                <p className='text-center text-lg-start'>The main hydrogen production processes can be classified into electrolysis, photolysis, and thermolysis.</p>
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

            <section className='d-flex flex-wrap justify-content-center banner-container p-3 p-lg-5' style={{ background: `url(${BackgroundBanner1}) no-repeat`, backgroundSize: '100% 100%' }}>
                <div className='align-items-center col-12 col-lg-6 d-flex justify-content-center'>
                    <img src={IconBanner1} alt="" className='mh-100 mw-100' />
                </div>
                <div className='col-12 col-lg-6 d-flex flex-column justify-content-center p-3 p-lg-5'>
                    <p>Electrolytic hydrogen production processes involve the use of electric or thermal energy to trigger a
                        chemical reaction for splitting water molecules into hydrogen and oxygen
                        The main examples of electrolytic processes are water electrolysis (conventional process) and thermolysis
                        (steam electrolysis).</p> <br />
                    <p>Photolytic processes involve technologies that use the energy of light, and its main examples are the
                        photobiological and photoelectrochemical systems.</p> <br />
                    <p>Hydrogen production through thermochemical processes essentially comprise the raw material, being either
                        from fossil or renewable sources, heat and catalysts so as to trigger chemical reactions for transforming the
                        raw material (for example, ethanol, natural gas, methanol, gasoline) into hydrogen.</p> <br />
                    <p>The main thermochemical hydrogen production processes are: biomass gasification and pyrolysis, steam
                        reforming, partial oxidation, autothermal and oxidative reforming.</p>
                </div>
            </section>

            <section className='d-flex flex-wrap justify-content-center banner-container p-3 p-lg-5' style={{ background: `url(${BackgroundBanner2}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='align-items-center col-12 col-lg-6 d-flex justify-content-center p-5'>
                    <p className='fw-bold text-size-10 text-size-lg-15 text-black'>Text For Public</p>
                </div>
                <div className='col-12 col-lg-6 '></div>
            </section>

            <LatestNews />

            <Sponsor />
        </>
    );
}
