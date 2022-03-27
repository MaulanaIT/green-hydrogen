import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Chart from '../assets/green-hydrogen-overview/chart.png';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';
import Sidebar from '../component/Sidebar';
import { Translate } from '../component/helper';

import MainBanner from '../assets/green-hydrogen-overview/background-main-banner.png';

import BackgroundBanner2 from '../assets/green-hydrogen-overview/background-banner-2.png';
import BackgroundBanner2_1 from '../assets/green-hydrogen-overview/background-banner-2-1.png';
import BackgroundBanner3 from '../assets/green-hydrogen-overview/background-banner-3.png';
import BackgroundBanner5 from '../assets/green-hydrogen-overview/background-banner-5.png';
import BackgroundBanner6 from '../assets/green-hydrogen-overview/background-banner-6.png';
import BackgroundBanner7 from '../assets/green-hydrogen-overview/background-banner-7.png';
import BackgroundSubscribe from '../assets/background-subscribe.png';

import VideBanner4 from '../assets/green-hydrogen-overview/video-banner-2.png';

import IconBanner2 from '../assets/green-hydrogen-overview/icon-banner-2.png';
import IconBanner5 from '../assets/green-hydrogen-overview/icon-banner-5.png';

export default function GreenHydrogenOverview() {

    let CurrentDegree = 0;

    const RotateChartCarousel = (type = 'next') => {
        let Carousel = document.querySelector('.chart-carousel');

        if (type == "next") {
            CurrentDegree = CurrentDegree - 45;
        }
        if (type == "prev") {
            CurrentDegree = CurrentDegree + 45;
        }

        Carousel.style = `
            -webkit-transform: rotateY(${CurrentDegree}deg); 
            -moz-transform: rotateY(${CurrentDegree}deg); 
            -o-transform: rotateY(${CurrentDegree}deg); 
            transform: rotateY(${CurrentDegree}deg)`;
    }

    return (
        <>
            {/*  Fluid Section One */}
            <section className="fluid-section-one" style={{ backgroundImage: 'url(' + MainBanner + ')' }}>
                <div className='container-width h-100'>
                    <div className="outer-box clearfix">

                        {/*  Content Column */}
                        <div className="content-column">
                            <div className="inner-column">
                                <div>
                                    <p className='fw-bold text-center text-lg-start primary-color text-size-10 text-size-lg-15'><Translate title={`GREEN HYDROGEN`} /></p>
                                    <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'><Translate title={`OVERVIEW`} /></p>
                                    <p className='text-center text-lg-start'><Translate title={`Hydrogen is the most basic of all Earth elements. The hydrogen atom is made up of a single proton and a single electron. As such, it is very abundant, but it doesn’t really exist as a separate form of matter. Instead, it is usually combined with other elements. To separate hydrogen gas from its companion substances takes a lot of effort, but it produces a powerful, nearly clean source of energy. As a gas, it can be used in fuel cells to power engines. Hydrogen gas is extracted from water by a technique known as electrolysis, which involves running a high electric current through water to separate hydrogen and oxygen atoms.`} /></p>
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
                    <section className='container-article-section container-article-section-flex gap-4'>
                        <div className='col-12 col-lg-auto'>
                            <img src={Chart} alt="" className='h-100' />
                        </div>
                        <div className='col d-flex flex-column justify-content-center py-3'>
                            <p className='fw-bold m-0 text-black text-start text-size-lg-8 text-size-5'><Translate title={`Hydrogen is a renewable energy`} /></p>
                            <p className='m-0 text-black'> <Translate title={`as it is generated from the sources which are inherently renewable such as gas.Hydrogen itself is a colourless gas but there are around nine colour codes to identify hydrogen. The colours codes of hydrogen refer to the source or the process used to make hydrogen. These codes are: green, blue, grey, brown or black, turquoise, purple, pink, red and white.`} /></p>
                        </div>
                    </section>

                    <section className='container-article-section'>
                        <div className='d-flex flex-column justify-content-center h-100 mx-autoposition-relative w-100' style={{ background: '#293D32' }}>
                            <p className='fw-bold p-3 text-size-8 text-size-lg-10' style={{ background: `url('${BackgroundSubscribe}') no-repeat`, backgroundSize: '110% 110%', backgroundPosition: 'center' }}><Translate title={`Colour code of hydrogen`} /></p>
                            <div className='position-relative w-100' style={{ height: '400px', perspective: '1000px' }}>
                                <div className="next" onClick={() => RotateChartCarousel('next')}><FaAngleRight className='text-size-15 text-size-lg-30' /></div>
                                <div className="prev" onClick={() => RotateChartCarousel('prev')}><FaAngleLeft className='text-size-15 text-size-lg-30' /></div>
                                <div className="chart-carousel">
                                    <div className="item a"><Translate title={`Made through electrolysis using renewable electricity. Electricity is used to split water into hydrogen and oxygen.`} /></div>
                                    <div className="item b"><Translate title={`Sourced from fossil fuel. However, the CO2 is captured and stored underground (carbon sequestration).`} /></div>
                                    <div className="item c"><Translate title={`Hydrogen made from natural gas in a process called steam reformation. in which high temperate steam is used to split methane gas at high pressures.`} /></div>
                                    <div className="item d"><Translate title={`Made from Lignite (in a process like grey hydrogen) with no carbon capture. Even more carbon intensive than black and grey hydrogen. Lignite is compressed peat and generates a lot of carbon dioxide when combusted.`} /></div>
                                    <div className="item e"><Translate title={`Produced through the high-temperature catalytic splitting of water using nuclear power thermal as an energy source.`} /></div>
                                    <div className="item f"><Translate title={`Produced through pyrolysis. In pyrolysis instead of polluting CO2 gas a solid carbon by-product is produced. The feedstock is methane of even waste plastics. Pyrolysis works by heating products to an extremely high temperature in an inert atmosphere. The emissions relate to the fuel needed to heat the reaction.`} /></div>
                                    <div className="item g"><Translate title={`Pink hydrogen is generated through electrolysis powered by nuclear energy. Nuclear-produced hydrogen can also be referred to as purple hydrogen or red hydrogen.`} /></div>
                                    <div className="item h"><Translate title={`White hydrogen is a naturally-occurring geological hydrogen found in underground deposits and created through fracking. There are no strategies to exploit this hydrogen at present.`} /></div>
                                </div>
                            </div>
                        </div>
                        <p className='text-black'><Translate title={`The colours codes of hydrogen refer to the source or the process used to make hydrogen. These codes are: green, blue, grey, brown or black, turquoise, purple, pink, red and white.`} /></p>
                    </section>

                    <section className='container-article-section'>
                        <div className='container-article-section-flex'>
                            <div className='banner-container-image col-12 col-lg-auto'>
                                <img src={BackgroundBanner3} alt="" />
                            </div>
                            <div className='col d-flex flex-column justify-content-center p-3' style={{ background: `url('${BackgroundSubscribe}') no-repeat`, backgroundSize: '110% 110%', backgroundPosition: 'center' }}>
                                <p className='fw-bold m-0 text-size-lg-12 text-size-6'><Translate title={`Green hydrogen`} /></p>
                                <p className='m-0'><Translate title={`is produced by
                                    splitting water into hydrogen and oxygen using renewable electricity through
                                    a process called electrolysis.`} /></p>
                            </div>
                        </div>
                        <p className='text-black'><Translate title={`With no carbon emissions, it is the cleanest way of producing hydrogen.  One major benefit of hydrogen is that it can be stored and transported for further use as necessary. The place of production can be different from the location where it is used again. So green hydrogen is a very versatile form of clean energy. Decarbonizing the planet is one of the goals that countries around the world have set for 2050. To achieve this, decarbonizing the production of an element like hydrogen, giving rise to green hydrogen, is one of the keys as this is currently responsible for more than 2 % of total global CO2 emissions. Green hydrogen is generated entirely from renewable energy. It has significantly lower carbon emissions than others hydrogen colours.`} /></p>
                    </section>

                    <section className='container-article-section'>
                        <div className='banner-container-image landscape'>
                            <img src={VideBanner4} alt="" />
                        </div>
                        <div>
                            <p className='fw-bold text-black text-size-lg-15 text-size-12'><Translate title={`Hydrogen`} /></p>
                            <p className='fw-bold text-black'><Translate title={`contains more energy per mass than any other fuel, however, the energy content per volume is relatively low.`} /></p>
                            <p className='text-black'><Translate title={`To illustrate: A tank filled with hydrogen will contain only about 1/3 of the energy compared to the same tank filled with a conventional liquid fuel such as diesel`} /></p>
                        </div>
                    </section>

                    <section className='container-article-section'>
                        <div className='banner-container-image landscape'>
                            <img src={BackgroundBanner5} alt="" />
                        </div>
                        <div>
                            <p className='fw-bold text-black text-size-lg-15 text-size-12'><Translate title={`Hydrogen storage`} /></p>
                            <p className='fw-bold text-black text-size-lg-8 text-size-6'><Translate title={`is therefore a key field of consideration and a field of ongoing research`} /></p>
                            <p className='text-black'><Translate title={`Hydrogen is flammable and can react with oxygen in certain mixing ratios (oxyhydrogen reaction). Unlike gasoline, however, hydrogen volatalizes quickly and dilutes to non-critical mixture`} /></p>
                        </div>
                    </section>

                    <section className='container-article-section'>
                        <div className='banner-container-image landscape'>
                            <img src={BackgroundBanner6} alt="" />
                        </div>
                        <div>
                            <p className='text-black'><Translate title={`With the development of new technologies and the growth of people who care about environmental issues, environmentally friendly energy such as green hydrogen will inevitably be more widely used in the future. If green hydrogen technology continues to develop, more and more new companies may be created. This will directly impact the creation of employment in the green hydrogen sector, and will increase the standard of living of the people who work in this industry.`} /></p>
                        </div>
                    </section>

                    <section className='container-article-section'>
                        <div className='banner-container-image landscape'>
                            <img src={BackgroundBanner7} alt="" />
                        </div>
                        <div>
                            <p className='text-black'><Translate title={`Hydrogen can meet up to 18% of the global energy demand by 2050 Hydrogen can contribute to`} /> : <br />
                                -&ensp;<Translate title={`Avoiding 6 Gt of carbon dioxide annually`} /> <br />
                                -&ensp;<Translate title={`Generatings a market of 2.5 trillion USD annually`} /> <br />
                                -&ensp;<Translate title={`Creating up to 30 million jobs`} /> <br />
                                <br />
                                <Translate title={`“Hydrogen can therefore not only contribute to a succesful energy transition worldwide, but also to a succesfull structural change in society through its industrial policy opportunities”`} /></p>
                            <br />
                            <p className='text-black'><Translate title={`Advances in Green Hydrogen create opportunity across the Global Power Sector, forecasts that global green hydrogen production will skyrocket at a compound annual growth rate (CAGR) of 57% between 2019 and 2030, rising from 40,000 tons to 5.7 million tons. Increasing concerns about carbon emissions and the need to decarbonize the industrial, commercial, transport, and power sectors have forced countries to reduce their dependency on fossil fuel-based systems and increase investments across alternate low-carbon technologies, including green hydrogen`} /></p>
                        </div>
                    </section>
                </div>
            </div>

            <LatestNews />

            <Sponsor />
        </>
    );
}