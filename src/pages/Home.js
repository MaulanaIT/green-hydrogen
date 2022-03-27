import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';
import LatestPublicationItem from '../component/LatestPublicationItem';
import { Translate } from '../component/helper';

import AboutEvent from '../assets/home/about-event.png';
import Banner1 from '../assets/home/banner-1.png';
import BackgroundMainBanner from '../assets/home/banner-background.png';
import BackgroundBanner2 from '../assets/home/banner-2.png';
import IconBanner2 from '../assets/home/icon-banner-2.png';

export class Home extends Component {
    render() {
        require('../css/home.css');

        return (
            <>
                {/*  Fluid Section One */}
                <section className="fluid-section-one">
                    <div className="container-width h-100">
                        <div className='social-media'>
                            <ul>
                                <li><Link to={'/'}><span className="fab fa-facebook-f"></span></Link></li>
                                <li><Link to={'/'}><span className="fab fa-twitter"></span></Link></li>
                                <li><Link to={'/'}><span className="fab fa-instagram"></span></Link></li>
                                <li><Link to={'/'}><span className="fab fa-youtube"></span></Link></li>
                            </ul>
                        </div>
                        <div className="banner-height outer-box clearfix">

                            {/*  Content Column */}
                            <div className="content-column left-side">
                                <div className="border-0 inner-column right-side">
                                    <div>
                                        <p className='fw-bold text-center text-lg-start text-size-10 text-size-lg-15'><Translate title={`GREEN HYDROGEN`} /></p>
                                        <p className='fw-bold primary-color text-center text-lg-start text-size-20 text-size-lg-25'><Translate title={`IS OUR FUTURE`} /></p>
                                        <p className='text-center text-lg-start'><Translate title={`05 Januari - 13 Januari Hall Conference, Indonesia`} /></p>
                                    </div>
                                </div>
                            </div>

                            {/*  Content Column */}
                            <div className="content-column right-side">
                                <div className="inner-column right-side">
                                    <div className='text-center text-lg-start'>
                                        <p className='fw-bold text-center text-lg-start text-size-10 text-size-lg-15'><Translate title={`JOIN OUR`} /></p>
                                        <p className='fw-bold primary-color text-center text-lg-start text-size-10 text-size-lg-15'><Translate title={`IMPACT COMMUNITIES`} /></p>
                                        <p className='text-center text-lg-start'><Translate title={`Our impartial global network of nearly 100 national Member Committees connects energy leaders, industries, governments, innovators and experts across the world.`} /></p>
                                        <button type='button' className='bg-white btn fw-bold mt-2 text-size-2 text-size-lg-2 text-black'><Translate title={`FIND OUT MORE`} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Fluid Section One */}

                {/*  About Section  */}
                <section className="about-section">
                    <div className="container-width">
                        <div className="align-items-center d-flex flex-wrap flex-row-reverse flex-lg-row justify-content-center">
                            {/*  Content Column  */}
                            <div className="content-column col-12 col-lg-6 pe-lg-5">
                                <div className="inner-column">
                                    <div className="sec-title text-black">
                                        <p className='fw-bold text-black text-size-15 text-size-lg-20'><Translate title={`GREEN HYDROGEN`} /></p>
                                        <p className='fw-bold text-black text-size-6 text-size-lg-8'><Translate title={`What is Green Hydrogen?`} /></p>
                                        <p className='text-black'><Translate title={`Green Hydrogen Systems designs and manufactures efficient, standardised and modular electrolysers for the production of green hydrogen with renewable energy. With no carbon emissions, it is the cleanest way of producing hydrogen.`} /></p>
                                    </div>
                                    <div className="button-involved">
                                        <div className='container'>
                                            <a href="#"><Translate title={`Get Involved`} /></a>
                                        </div>
                                    </div>
                                    <p className='m-0'></p>
                                </div>
                            </div>

                            {/*  Image Column  */}
                            <div className="col-12 col-lg-6 text-center">
                                <img src={AboutEvent} alt="" className='w-100' style={{maxWidth: '500px'}} />
                            </div>
                        </div>
                    </div>
                </section>
                {/* End About Section  */}

                <section className='container-width d-flex flex-wrap gap-3 py-5'>
                    <div className='align-items-center banner-container-image col-12 col-lg-7 d-flex justify-content-center'>
                        <img src={Banner1} alt="" className='w-100' />
                    </div>
                    <div className='col-12 col-lg-4 d-flex flex-column justify-content-center'>
                        <p className='fw-bold text-size-10 text-size-lg-15 text-black'><Translate title={`Hydrogen is Future System`} /></p>
                        <p className='text-black'><Translate title={`One major benefit of hydrogen is that it can be stored and transported for further use as necessary. The place of production can be different from the location where it is used again. So green hydrogen is a very versatile form of clean energy.`} /></p>
                    </div>
                </section>

                <section className='position-relative' style={{ background: `url(${BackgroundBanner2}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'right' }}>
                    <div className='container-width d-flex gap-5'>
                        <div className='col-7 d-lg-block d-none py-5 text-center'>
                            <img className='h-100' src={IconBanner2} />
                        </div>
                        <div className='container-width col-12 col-lg-5 py-5 text-center'>
                            <p className='fw-bold pb-4 text-size-10 text-size-lg-20 text-center text-lg-start'><Translate title={`Accelerating the global energy transition with green hydrogen`} /></p>
                            <p className='text-size-5 text-size-lg-8 text-center text-lg-start'><Translate title={`We are committed to be on the forefront of this energy transition`} /></p>
                            <div className="button-our-activity mt-4 secondary-color">
                                <div className='container'>
                                    <a href="#"><Translate title={`Our Activity`} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  Pricing Section */}
                <section className="pricing-section-two home-latest-publication-background">
                    <div className="container-width">
                        <div className="sec-title style-two light text-center">
                            <p className="fw-bold text-size-lg-5 m-0 secondary-color"><Translate title={`See Our Publication`} /></p>
                            <h2 className='text-black'><Translate title={`Latest Publication`} /></h2>
                        </div>
                        <div className='row row-y'>
                            <LatestPublicationItem />
                            <LatestPublicationItem />
                            <LatestPublicationItem />
                            <LatestPublicationItem />
                            <LatestPublicationItem />
                            <LatestPublicationItem />
                        </div>
                    </div>
                </section>
                {/* End Pricing Section */}

                <LatestNews />

                <div className='align-items-center banner-container d-flex fw-bold justify-content-center p-5 text-black text-center text-size-15 text-size-lg-20'>Embeded Social Media</div>

                <Sponsor />
            </>
        )
    }
}

export default Home
