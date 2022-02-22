import React from 'react';

import AboutImage1 from '../images/resource/about-img-1.jpg';
import AboutImage2 from '../images/resource/about-img-2.jpg';
import DayPass1 from '../images/icons/day-pass-1.png';
import DayPass2 from '../images/icons/day-pass-2.png';
import DayPass3 from '../images/icons/day-pass-3.png';
import Gold1 from '../images/clients/gold-1.png';
import Gold2 from '../images/clients/gold-2.png';
import Gold3 from '../images/clients/gold-3.png';
import Gold4 from '../images/clients/gold-4.png';
import Gold5 from '../images/clients/gold-5.png';
import News1 from '../images/resource/news-1.jpg';
import News2 from '../images/resource/news-2.jpg';
import News3 from '../images/resource/news-3.jpg';
import Platinum1 from '../images/clients/platinum-1.png';
import Platinum2 from '../images/clients/platinum-2.png';
import Silver1 from '../images/clients/silver-1.png';
import Silver2 from '../images/clients/silver-2.png';
import Silver3 from '../images/clients/silver-3.png';

export default function Activities() {
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
                                <h2 className='primary-color'>IS OUR FUTURE</h2>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Fluid Section One */}

            {/*  About Section  */}
            <section className="about-section">
                <div className="parallax-scene parallax-scene-1 anim-icons">
                    <span data-depth="0.20" className="parallax-layer icon icon-mic"></span>
                    <span data-depth="0.20" className="parallax-layer icon icon-mic"></span>
                    <span data-depth="0.30" className="parallax-layer icon icon-mic-2"></span>
                    <span data-depth="0.40" className="parallax-layer icon icon-mic-2"></span>
                    <span data-depth="0.50" className="parallax-layer icon icon-speaker"></span>
                    <span data-depth="0.60" className="parallax-layer icon icon-speaker-2"></span>
                    <span data-depth="0.30" className="parallax-layer icon icon-shape-1"></span>
                    <span data-depth="0.80" className="parallax-layer icon icon-man"></span>
                </div>

                <div className="auto-container">
                    <div className="row">
                        {/*  Content Column  */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title text-black">
                                    <h2 className='m-0'>About Event</h2>
                                    <h4>What is business Startup conference?</h4>
                                    <p className='text-black'>Best Event Planner of the year, 2021 Exerci tation ullamcorper suscipit lobortis aliquip ex ea commodo consequat duis autem vel eum iriure augue duis dolore. Exerci tation ullamcorper suscipit lobortis. nisl ut aliquip ex ea commodo consequat duis autem vel eum iriure augue duis</p>
                                </div>
                                <div className="btn-box"><a href="contact.html" className="theme-btn btn-style-two"><span className="btn-title">Register Now</span></a></div>
                            </div>
                        </div>

                        {/*  Image Column  */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="image-box">
                                <figure className="image-1 wow fadeIn"><img src={AboutImage1} alt="" /></figure>
                                <figure className="image-2 wow fadeInRight"><img src={AboutImage2} alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section  */}

            {/*  Pricing Section */}
            <section className="bg-secondary pricing-section-two">
                <div className="auto-container">
                    <div className="sec-title style-two light text-center">
                        <span className="title">Pricing Plans</span>
                        <h2>Get your Ticket</h2>
                    </div>

                    <div className="row">
                        {/*  Pricing Block Two */}
                        <div className="pricing-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <figure className="image"><img src={DayPass1} alt="" /></figure>
                                <div className="price">$142</div>
                                <h4 className="title">Early Bird</h4>
                                <ul className="features">
                                    <li>Conference Tickets</li>
                                    <li>Free Lunch And Coffee</li>
                                    <li>Easy Access</li>
                                    <li>Certificate</li>
                                    <li>Printed Metarials</li>
                                </ul>
                                <div className="btn-box">
                                    <a href="contact.html" className="theme-btn">Buy Ticket</a>
                                </div>
                            </div>
                        </div>

                        {/*  Pricing Block Two */}
                        <div className="pricing-block-two tagged col-lg-4 col-md-6 col-sm-12 wow fadeInDown">
                            <div className="inner-box">
                                <figure className="image"><img src={DayPass2} alt="" /></figure>
                                <div className="price">$142</div>
                                <h4 className="title">Early Bird</h4>
                                <ul className="features">
                                    <li>Conference Tickets</li>
                                    <li>Free Lunch And Coffee</li>
                                    <li>Easy Access</li>
                                    <li>Certificate</li>
                                    <li>Printed Metarials</li>
                                </ul>
                                <div className="btn-box">
                                    <a href="contact.html" className="theme-btn">Buy Ticket</a>
                                </div>
                            </div>
                        </div>

                        {/*  Pricing Block Two */}
                        <div className="pricing-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <figure className="image"><img src={DayPass3} alt="" /></figure>
                                <div className="price">$142</div>
                                <h4 className="title">Early Bird</h4>
                                <ul className="features">
                                    <li>Conference Tickets</li>
                                    <li>Free Lunch And Coffee</li>
                                    <li>Easy Access</li>
                                    <li>Certificate</li>
                                    <li>Printed Metarials</li>
                                </ul>
                                <div className="btn-box">
                                    <a href="contact.html" className="theme-btn">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Pricing Section */}

            {/*  News Section */}
            <section className="news-section">
                <div className="auto-container">
                    <div className="sec-title style-two text-center">
                        <span className="title">Info Update</span>
                        <h2>Latest News</h2>
                    </div>

                    <div className="row">
                        {/*  News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><a href="blog-single.html"><img src={News1} alt="" /></a></figure>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><a href="blog-single.html">February 24, 2019</a></li>
                                        <li><a href="blog-single.html">Event, UX</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html">Benefits of using a WordPress Gutenberg theme</a></h3>
                                    <div className="author-info"><span className="icon icon_profile"></span><a href="#">By NIjam Ali</a></div>
                                </div>
                            </div>
                        </div>

                        {/*  News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><a href="blog-single.html"><img src={News2} alt="" /></a></figure>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><a href="blog-single.html">January 10, 2019</a></li>
                                        <li><a href="blog-single.html">Event, UX</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html">Benefits of using a WordPress Gutenberg theme</a></h3>
                                    <div className="author-info"><span className="icon icon_profile"></span><a href="#">By NIjam Ali</a></div>
                                </div>
                            </div>
                        </div>

                        {/*  News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><a href="blog-single.html"><img src={News3} alt="" /></a></figure>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><a href="blog-single.html">March 24, 2019</a></li>
                                        <li><a href="blog-single.html">Event, UX</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html">Benefits of using a WordPress Gutenberg theme</a></h3>
                                    <div className="author-info"><span className="icon icon_profile"></span><a href="#">By NIjam Ali</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End News Section */}

            {/*  Clients Section */}
            <section className="clients-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center style-two">
                        <span className="title">Event Sponsors</span>
                        <h2>Partners & Sponsors</h2>
                    </div>

                    {/*  Sponsors Outer */}
                    <div className="sponsors-outer wow fadeInUp">
                        <div className="title-box"><h3>Platinum Sponsors</h3></div>
                        {/* Sponsors */}
                        <ul className="sponsors">
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Platinum1} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Platinum2} alt="" /></a></figure></li>
                        </ul>
                    </div>

                    {/*  Sponsors Outer */}
                    <div className="sponsors-outer wow fadeInUp">
                        <div className="title-box"><h3>Gold Sponsors</h3></div>
                        {/* Sponsors Carousel*/}
                        <ul className="sponsor-carousel owl-carousel owl-theme">
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Gold1} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Gold2} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Gold3} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Gold4} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Gold5} alt="" /></a></figure></li>
                        </ul>
                    </div>

                    {/*  Sponsors Outer */}
                    <div className="sponsors-outer wow fadeInUp">
                        <div className="title-box"><h3>Silver Sponsors</h3></div>
                        {/* Sponsors*/}
                        <ul className="sponsors">
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Silver1} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Silver2} alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image"><a href="#"><img src={Silver3} alt="" /></a></figure></li>
                        </ul>
                    </div>

                    <div className="bottom-box">
                        <div className="btn-box"><a href="sponsor-detail.html" className="theme-btn btn-style-three">Become a Sponsor</a></div>
                        <div className="text">Last Date: April 30, 2019</div>
                    </div>
                </div>
            </section>
            {/* End Clients Section */}
        </>
    );
}
