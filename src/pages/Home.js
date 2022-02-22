import React from 'react';
import { Link } from 'react-router-dom';

import AboutEvent from '../assets/home/about-event.png';
import Banner1 from '../assets/home/banner-1.png';
import BackgroundLatestPublication from '../assets/background-latest-publication.png';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';

export default function Home() {
    return (
        <>
            {/*  Fluid Section One */}
            <section className="fluid-section-one">
                <div className="outer-box clearfix">

                    {/*  Content Column */}
                    <div className="content-column left-side">
                        <div className="inner-column left-side">
                            <div>
                                <h3>GREEN HYDROGEN</h3>
                                <p className='fw-bold primary-color text-size-15 text-size-lg-25'>IS OUR FUTURE</p>
                                <p>05 Januari - 13 Januari Hall Conference, Indonesia</p>
                            </div>
                        </div>
                    </div>

                    {/*  Content Column */}
                    <div className="content-column right-side">
                        <div className="inner-column right-side">
                            <div>
                                <h4>JOIN OUR</h4>
                                <h3 className='primary-color'>IMPACT COMMUNITIES</h3>
                                <p>Our impartial global network of nearly 100 national Member Committees connects energy leaders, industries, governments, innovators and experts across the world.</p>
                                <button type='button' className='bg-white btn fw-bold mt-2 text-size-2 text-size-lg-2 text-black'>FIND OUT MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Fluid Section One */}

            {/*  About Section  */}
            <section className="about-section">
                <div className="auto-container">
                    <div className="d-flex flex-wrap">
                        {/*  Content Column  */}
                        <div className="content-column col-12 col-lg-6">
                            <div className="inner-column">
                                <div className="sec-title text-black">
                                    <h2 className='m-0'>GREEN HYDROGEN</h2>
                                    <h4>What is Green Hydrogen?</h4>
                                    <p className='text-black'>Green Hydrogen Systems designs and manufactures efficient, standardised and modular electrolysers for the production of green hydrogen with renewable energy.
                                        With no carbon emissions, it is the cleanest way of producing hydrogen. 
                                        One major benefit of hydrogen is that it can be stored and transported for further use as necessary. The place of production can be different from the location where it is used again. So green hydrogen is a very versatile form of clean energy.</p>
                                </div>
                                <div className="btn-box"><a href="contact.html"><span className="btn primary-background-color text-white">Get Involved</span></a></div>
                                <p className='m-0'></p>
                            </div>
                        </div>

                        {/*  Image Column  */}
                        <div className="image-column col-12 col-lg-6">
                            <div className="d-flex justify-content-center wow fadeIn">
                                <figure className="wow fadeIn"><img src={AboutEvent} alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section  */}

            <div className='banner-container home-banner-1'>
                <div className='col-12 col-lg-7'>
                    <img src={Banner1} alt="" />
                </div>
                <div className='col-12 col-lg-4 px-5'>
                    <p className='fw-bold text-size-20 text-size-lg-25 text-black'>Hydrogen is Future System</p>
                </div>
            </div>

            <div className='banner-container home-banner-2'>
                <div className='col-12 col-lg-6'></div>
                <div className='col-12 col-lg-6'>
                    <p className='fw-bold text-size-15 text-size-lg-20 text-black text-center'>Text For Public</p>
                </div>
            </div>

            {/*  Pricing Section */}
            <section className="pricing-section-two home-latest-publication-background">
                <div className="auto-container">
                    <div className="sec-title style-two light text-center">
                        <p className="fw-bold text-size-lg-5 m-0 secondary-color">See Our Publication</p>
                        <h2 className='text-black'>Latest Publication</h2>
                    </div>
                    <div className='row row-y'>
                        <div className='col-12 col-lg-4 wow fadeIn'>
                            <div className='publication-card'>
                                <div className='d-flex'>
                                    <div className='bg-secondary col-4 pe-4'>

                                    </div>
                                    <div className='col-8 ps-2 py-2 px-lg-4 py-lg-4'>
                                        <p className='fw-bold text-size-lg-4 text-black'>Hydrogen Renewable Energy</p>
                                        <p className='text-black'>Contrary to popular belief, Lorem Ipsum 45 BC,
                                            making it over 2000 years old. Richard McClintock
                                        </p>
                                        <p className='text-black'>#Hydrogen #Global</p>
                                        <Link to={'/'} className='text-size-lg-3 fw-bold text-decoration-none text-black'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 wow fadeIn'>
                            <div className='publication-card'>
                                <div className='d-flex'>
                                    <div className='bg-secondary col-4 pe-4'>

                                    </div>
                                    <div className='col-8 ps-2 py-2 px-lg-4 py-lg-4'>
                                        <p className='fw-bold text-size-lg-4 text-black'>Hydrogen Renewable Energy</p>
                                        <p className='text-black'>Contrary to popular belief, Lorem Ipsum 45 BC,
                                            making it over 2000 years old. Richard McClintock
                                        </p>
                                        <p className='text-black'>#Hydrogen #Global</p>
                                        <Link to={'/'} className='text-size-lg-3 fw-bold text-decoration-none text-black'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 wow fadeIn'>
                            <div className='publication-card'>
                                <div className='d-flex'>
                                    <div className='bg-secondary col-4 pe-4'>

                                    </div>
                                    <div className='col-8 ps-2 py-2 px-lg-4 py-lg-4'>
                                        <p className='fw-bold text-size-lg-4 text-black'>Hydrogen Renewable Energy</p>
                                        <p className='text-black'>Contrary to popular belief, Lorem Ipsum 45 BC,
                                            making it over 2000 years old. Richard McClintock
                                        </p>
                                        <p className='text-black'>#Hydrogen #Global</p>
                                        <Link to={'/'} className='text-size-lg-3 fw-bold text-decoration-none text-black'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 wow fadeIn'>
                            <div className='publication-card'>
                                <div className='d-flex'>
                                    <div className='bg-secondary col-4 pe-4'>

                                    </div>
                                    <div className='col-8 ps-2 py-2 px-lg-4 py-lg-4'>
                                        <p className='fw-bold text-size-lg-4 text-black'>Hydrogen Renewable Energy</p>
                                        <p className='text-black'>Contrary to popular belief, Lorem Ipsum 45 BC,
                                            making it over 2000 years old. Richard McClintock
                                        </p>
                                        <p className='text-black'>#Hydrogen #Global</p>
                                        <Link to={'/'} className='text-size-lg-3 fw-bold text-decoration-none text-black'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 wow fadeIn'>
                            <div className='publication-card'>
                                <div className='d-flex'>
                                    <div className='bg-secondary col-4 pe-4'>

                                    </div>
                                    <div className='col-8 ps-2 py-2 px-lg-4 py-lg-4'>
                                        <p className='fw-bold text-size-lg-4 text-black'>Hydrogen Renewable Energy</p>
                                        <p className='text-black'>Contrary to popular belief, Lorem Ipsum 45 BC,
                                            making it over 2000 years old. Richard McClintock
                                        </p>
                                        <p className='text-black'>#Hydrogen #Global</p>
                                        <Link to={'/'} className='text-size-lg-3 fw-bold text-decoration-none text-black'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 wow fadeIn'>
                            <div className='publication-card'>
                                <div className='d-flex'>
                                    <div className='bg-secondary col-4 pe-4'>

                                    </div>
                                    <div className='col-8 ps-2 py-2 px-lg-4 py-lg-4'>
                                        <p className='fw-bold text-size-lg-4 text-black'>Hydrogen Renewable Energy</p>
                                        <p className='text-black'>Contrary to popular belief, Lorem Ipsum 45 BC,
                                            making it over 2000 years old. Richard McClintock
                                        </p>
                                        <p className='text-black'>#Hydrogen #Global</p>
                                        <Link to={'/'} className='text-size-lg-3 fw-bold text-decoration-none text-black'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Pricing Section */}

            <LatestNews />

            <div className='align-items-center banner-container d-flex fw-bold justify-content-center text-black text-size-20 text-size-lg-20'>Embeded Social Media</div>

            <Sponsor />
        </>
    );
}
