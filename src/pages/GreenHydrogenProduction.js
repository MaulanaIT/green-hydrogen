import React from 'react';

import Chart from '../assets/green-hydrogen-overview/chart.png';

import MainBanner from '../assets/green-hydrogen-production/background-main-banner.png';

import IconBanner1 from '../assets/green-hydrogen-production/icon-banner-1.png';
import IconBanner2 from '../assets/green-hydrogen-production/icon-banner-2.png';
import IconBanner3 from '../assets/green-hydrogen-production/icon-banner-3.png';
import IconBanner4 from '../assets/green-hydrogen-production/icon-banner-4.png';
import IconBanner5 from '../assets/green-hydrogen-production/icon-banner-5.png';
import IconBanner6 from '../assets/green-hydrogen-production/icon-banner-6.png';

import LatestNews from '../component/LatestNews';
import MultipleBannder from '../component/MultipleBannder';
import Sponsor from '../component/Sponsor';

export default function GreenHydrogenProduction() {
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
                                <p className='fw-bold text-size-20 text-size-lg-25'>PRODUCTION</p>
                                <p>The main hydrogen production processes can be classified into electrolysis,
                                    photolysis, and thermolysis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Fluid Section One */}

            <section className='d-flex flex-wrap justify-content-center vh-100 p-3 p-lg-5' style={{ background: '#EFF4F8' }}>
                <div className='col-12 col-lg-6 d-flex flex-column justify-content-center'>
                    <img src={IconBanner1} alt="" className='mh-100 mw-100' />
                </div>
                <div className='col-12 col-lg-6 d-flex flex-column justify-content-center p-5'>
                    <p className='text-black'><span className='fw-bold text-size-6 text-size-lg-10'>Green hydrogen is produced</span> through a process called electrolysis, Electrolysis is the process of using electricity
                        to split water into hydrogen and oxygen.</p>
                </div>
            </section>

            <section className='d-flex flex-wrap justify-content-center vh-100' style={{ background: '#EFF4F8' }}>
                <div className='col-12 col-lg-6 d-flex flex-column justify-content-center p-5'>
                    <p className='text-black'>This reaction takes place in a unit called an electrolyzer. Electrolyzers can range in size from small,
                        appliance-size equipment that is well-suited for small-scale distributed hydrogen production to large-scale,
                        central production facilities that could be tied directly to renewable or other non-greenhouse-gas-emitting
                        forms of electricity production.</p>
                </div>
                <div className='col-12 col-lg-6 d-flex flex-column justify-content-center'>
                    <img src={IconBanner2} alt="" className='mh-100 mw-100' />
                </div>
            </section>

            <section className='d-flex flex-wrap justify-content-center vh-100 p-5'>
                <div className='align-items-center col-12 col-lg-8 d-flex justify-content-center'>
                    <img src={IconBanner3} alt="" className='h-100 mw-100' />
                </div>
                <div className='align-items-center col-12 col-lg-4 d-flex justify-content-center p-2 p-lg-5' style={{ background: '#99FFFF' }}>
                    <p className='text-black'>This reaction takes place in a unit called an electrolyzer. Electrolyzers can range in size from small,
                        appliance-size equipment that is well-suited for small-scale distributed hydrogen production to large-scale,
                        central production facilities that could be tied directly to renewable or other non-greenhouse-gas-emitting
                        forms of electricity production.</p>
                </div>
            </section>

            <section className='d-flex flex-wrap justify-content-center vh-100 p-5'>
                <div className='col-12 col-lg-6 d-flex flex-column justify-content-center p-2 p-lg-5'>
                    <p className='fw-bold text-black text-size-10 text-size-lg-15'>How Does it Work?</p>
                    <p className='text-black'>Like fuel cells, electrolyzers consist of an anode and a cathode separated by an
                        electrolyte. Different electrolyzers function in different ways, mainly due to the different types of electrolyte
                        material involved and the ionic species it conducts . Three main types of electrolysis: alkaline electrolysis
                        (AEL), proton exchange membrane electrolysis (PEMEL), and high temperature or solid-oxide electrolysis
                        (SOEL at over 600°C).</p>
                </div>
                <div className='align-items-center col-12 col-lg-6 d-flex justify-content-center'>
                    <img src={IconBanner4} alt="" className='h-100 mw-100' />
                </div>
            </section>

            <section className='d-flex flex-wrap justify-content-center vh-100 p-5'>
                <div className='col-12 col-lg-4 d-flex flex-column justify-content-center p-2 p-lg-5'>
                    <p className='text-black'><span className='fw-bold text-size-6 text-size-lg-10'>Power-to-X (PtX) refers to processes</span> where electricity is converted into fuels,
                        raw materials for industry or other forms of energy. Manufacture of PtX products begins by using electricity
                        and water to make pure hydrogen.</p>
                </div>
                <div className='align-items-center col-12 col-lg-8 d-flex justify-content-center'>
                    <img src={IconBanner5} alt="" className='h-100 mw-100' />
                </div>
            </section>

            <section className='d-flex flex-wrap justify-content-center vh-100 p-5'>
                <div className='align-items-center col-12 col-lg-8 d-flex justify-content-center'>
                    <img src={IconBanner6} alt="" className='h-100 mw-100' />
                </div>
                <div className='col-12 col-lg-4 d-flex flex-column justify-content-center p-2 p-lg-5'>
                    <p className='text-black'>Green hydrogen produced from electrolysis (a high energy process) and renewable energy 
                    sources is a high-cost option, which only accounts for around 5% of total H2 production. Currently, the vast 
                    majority of global hydrogen production derives from fossil fuel sources (methane gas reforming) and will continue 
                    to do so for several decades. However, as manufacturing capacity for more efficient and cost-effective 
                    electrolysers grows, it is expected that costs of production will fall markedly alongside roll-out of maturing 
                    renewable power generation technologies and capacity</p>
                </div>
            </section>

            <LatestNews />

            <Sponsor />
        </>
    );
}
