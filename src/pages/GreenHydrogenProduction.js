import React from 'react';

import Chart from '../assets/green-hydrogen-overview/chart.png';

import MainBanner from '../assets/green-hydrogen-production/background-main-banner.png';

import BackgroundSubscribe from '../assets/background-subscribe.png';
import IconBanner1 from '../assets/green-hydrogen-production/icon-banner-1.png';
import IconBanner2 from '../assets/green-hydrogen-production/icon-banner-2.png';
import IconBanner3 from '../assets/green-hydrogen-production/icon-banner-3.png';
import IconBanner4 from '../assets/green-hydrogen-production/icon-banner-4.png';
import IconBanner5 from '../assets/green-hydrogen-production/icon-banner-5.png';
import IconBanner6 from '../assets/green-hydrogen-production/icon-banner-6.png';

import LatestNews from '../component/LatestNews';
import MultipleBannder from '../component/MultipleBannder';
import Sponsor from '../component/Sponsor';
import Sidebar from '../component/Sidebar';
import { Translate } from '../component/helper';

export default function GreenHydrogenProduction() {
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
                                    <p className='fw-bold primary-color text-center text-lg-start text-size-10 text-size-lg-15'><Translate title={`GREEN HYDROGEN`} /></p>
                                    <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'><Translate title={`PRODUCTION`} /></p>
                                    <p className='text-center text-lg-start'><Translate title={`The main hydrogen production processes can be classified into electrolysis, photolysis, and thermolysis.`} /></p>
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
                    <section className='container-article-section container-article-section-flex ga-4'>
                        <div className='banner-container-image col-12 col-lg-6'>
                            <img src={IconBanner1} alt="" className='w-100' />
                        </div>
                        <div className='col d-flex flex-column justify-content-center py-3'>
                            <p className='fw-bold m-0 text-black text-start text-size-lg-12 text-size-6'>
                            <Translate title={`Green hydrogen is produced`} /></p>
                                <p className='text-black'> <Translate title={`through a process called electrolysis, Electrolysis is the process of using electricity to split water into hydrogen and oxygen.`} /></p>
                        </div>
                    </section>

                    <section className='container-article-section'>
                        <div className='banner-container-image landscape'>
                            <img src={IconBanner2} alt="" />
                        </div>
                        <p className='text-black'><Translate title={`This reaction takes place in a unit called an electrolyzer. Electrolyzers can range in size from small, appliance-size equipment that is well-suited for small-scale distributed hydrogen production to large-scale, central production facilities that could be tied directly to renewable or other non-greenhouse-gas-emitting forms of electricity production.`} /></p>
                    </section>

                    <section className='container-article-section'>
                        <div className='banner-container-image portrait'>
                            <img src={IconBanner3} alt="" />
                        </div>
                        <div>
                            <p className='text-black'><Translate title={`This reaction takes place in a unit called an electrolyzer. Electrolyzers can range in size from small, appliance-size equipment that is well-suited for small-scale distributed hydrogen production to large-scale, central production facilities that could be tied directly to renewable or other non-greenhouse-gas-emitting forms of electricity production.`} /></p>
                        </div>
                    </section>

                    <section className='container-article-section'>
                        <div className='banner-container-image port'>
                            <img src={IconBanner4} alt="" />
                        </div>
                    </section>

                    <section className='container-article-section'>
                        <div className='banner-container-image landscape'>
                            <img src={IconBanner5} alt="" />
                        </div>
                        <p className='fw-bold text-black'><Translate title={`Power-to-X (PtX) refers to processes`} /> <span className='fw-normal'><Translate title={`where electricity is converted into fuels, raw materials for industry or other forms of energy. Manufacture of PtX products begins by using electricity and water to make pure hydrogen.`} /></span></p>
                    </section>

                    <section className='container-article-section'>
                        <div className='banner-container-image landscape'>
                            <img src={IconBanner6} alt="" />
                        </div>
                        <p className='text-black'><Translate title={`Green hydrogen produced from electrolysis (a high energy process) and renewable energy sources is a high-cost option, which only accounts for around 5% of total H2 production. Currently, the vast majority of global hydrogen production derives from fossil fuel sources (methane gas reforming) and will continue to do so for several decades. However, as manufacturing capacity for more efficient and cost-effective electrolysers grows, it is expected that costs of production will fall markedly alongside roll-out of maturing renewable power generation technologies and capacity`} /></p>
                    </section>
                </div>
            </div>

            <LatestNews />

            <Sponsor />
        </>
    );
}
