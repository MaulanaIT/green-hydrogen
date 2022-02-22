import React from 'react';

import Chart from '../assets/green-hydrogen-overview/chart.png';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';

import MainBanner from '../assets/green-hydrogen-overview/background-main-banner.png';

import BackgroundBanner3 from '../assets/green-hydrogen-overview/background-banner-3.png';
import BackgroundBanner6 from '../assets/green-hydrogen-overview/background-banner-6.png';

import IconBanner2 from '../assets/green-hydrogen-overview/icon-banner-2.png';
import IconBanner5 from '../assets/green-hydrogen-overview/icon-banner-5.png';

export default function GreenHydrogenOverview() {
    return (
        <>
            {/*  Fluid Section One */}
            <section className="fluid-section-one" style={{ backgroundImage: 'url(' + MainBanner + ')' }}>
                <div className="outer-box clearfix">

                    {/*  Content Column */}
                    <div className="content-column">
                        <div className="inner-column">
                            <div>
                                <p className='fw-bold primary-color text-size-10 text-size-lg-15'>GREEN HYDROGEN</p>
                                <p className='fw-bold text-size-20 text-size-lg-25'>OVERVIEW</p>
                                <p>The search for energy alternatives to replace or supplement the sources that are used
                                    nowadays has been a constant challenge for scholars and researchers. In this context,
                                    hydrogen has been researched, due to its large energy storage capacity and to
                                    reducing greenhouse gas emissions. Although it cannot be found in nature in its raw
                                    state, it is present in other elements like water, fossil fuels, and in all living things.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Fluid Section One */}

            {/*  Fluid Section One */}
            <section className='fluid-section-one green-overview-banner-1'>
                <div className="outer-box clearfix">

                    {/*  Content Column */}
                    <div className="content-column">
                        <div className="border-0 inner-column left-side">
                            <img src={Chart} className='mh-100 mw-100' />
                        </div>
                    </div>

                    {/*  Content Column */}
                    <div className="content-column">
                        <div className="inner-column flex-column justify-content-center">
                            <p className='fw-bold m-0 text-size-lg-4 text-size-4'>Hydrogen is a renewable energy as
                                it is generated from the sources which
                                are inherently renewable such as gas.</p>
                            <p className='m-0 text-size-lg-3 text-size-3'>Hydrogen itself is a colourless gas but there are around nine
                                colour codes to identify hydrogen. The colours codes of hydrogen refer to the source or the process used
                                to make hydrogen. These codes are: green, blue, grey, brown or black, turquoise, purple, pink, red and white.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Fluid Section One */}

            <section className='vh-100' style={{ background: '#E6E7E8' }}>
                <div className='auto-container d-flex flex-column h-100 justify-content-center p-5'>
                    <img src={IconBanner2} alt="" className='w-100' />
                </div>
            </section>

            <section className='d-flex flex-row-reverse vh-100' style={{ background: `url(${BackgroundBanner3}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
                <div className='col-12 col-lg-6 d-flex flex-column justify-content-evenly p-2 p-lg-5'>
                    <p className='fw-bold text-black text-size-6 text-size-lg-10' style={{ lineHeight: '1.2em' }}>
                        Green hydrogen is produced by splitting water into hydrogen and oxygen using renewable
                        electricity through a process called electrolysis.
                    </p>
                    <p className='text-black text-size-3 text-size-lg-4' style={{ lineHeight: '1.2em' }}>
                        With no carbon emissions, it is the cleanest way of producing hydrogen.  One major benefit of hydrogen is
                        that it can be stored and transported for further use as necessary. The place of production can be different
                        from the location where it is used again. So green hydrogen is a very versatile form of clean energy.
                    </p>
                    <p className='text-black text-size-3 text-size-lg-4' style={{ lineHeight: '1.2em' }}>
                        Decarbonizing the planet is one of the goals that countries around the world have set for 2050.
                        To achieve this, decarbonizing the production of an element like hydrogen, giving rise to green hydrogen,
                        is one of the keys as this is currently responsible for more than 2 % of total global CO2 emissions.
                        Green hydrogen is generated entirely from renewable energy. It has significantly lower carbon emissions than
                        others hydrogen colours.
                    </p>
                </div>
            </section>

            <section className='d-flex flex-wrap vh-100 p-2 p-lg-5' style={{background: '#99FFFF'}}>
                <div className='align-items-center col-12 col-lg-7 d-flex justify-content-center'>
                    <img src={IconBanner5} alt="" className='mh-100 mw-100' />
                </div>
                <div className='align-items-center col-12 col-lg-5 d-flex justify-content-center p-2 p-lg-5'>
                    <p className='text-black text-size-2 text-size-lg-4' style={{lineHeight: '1.6em'}}>Advances in Green Hydrogen create opportunity across the Global Power Sector, forecasts that global 
                        green hydrogen production will skyrocket at a compound annual growth rate (CAGR) of 57% between 2019 
                        and 2030, rising from 40,000 tons to 5.7 million tons. Increasing concerns about carbon emissions and 
                        the need to decarbonize the industrial, commercial, transport, and power sectors have forced countries 
                        to reduce their dependency on fossil fuel-based systems and increase investments across alternate low-carbon 
                        technologies, including green hydrogen</p>
                </div>
            </section>

            <section className='d-flex flex-wrap vh-100'>
                <div className='col-12 col-lg-8'>
                    <img src={BackgroundBanner6} alt="" className='h-100 mw-100' />
                </div>
                <div className='align-items-center col-12 col-lg-4 d-flex justify-content-center p-2 p-lg-5'>
                    <p className='text-black text-size-2 text-size-lg-4' style={{lineHeight: '1.6em'}}>With the development of new technologies and the growth of people who care about environmental issues,
                        environmentally friendly energy such as green hydrogen will inevitably be more widely used in the future.
                        If green hydrogen technology continues to develop, more and more new companies may be created.
                        This will directly impact the creation of employment in the green hydrogen sector, and will increase
                        the standard of living of the people who work in this industry.</p>
                </div>
            </section>

            <LatestNews />

            <Sponsor />
        </>
    );
}