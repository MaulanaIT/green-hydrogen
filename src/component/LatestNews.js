import React from 'react'

import { Translate } from './helper';

import News1 from '../assets/latest-news.png';

export default function LatestNews() {
    return (
        <>
            {/*  News Section */}
            <section className="news-section home-latest-news-background">
                <div className="container-width">
                    <div className="sec-title style-two light text-center">
                        <p className="fw-bold text-size-lg-5 m-0 secondary-color"><Translate title={``} />See Our Story</p>
                        <h2 className='text-black'><Translate title={``} />Latest News</h2>
                    </div>

                    <div className="row">
                        {/*  News Block */}
                        <div className="col-12 col-md-6 news-block col-lg-4 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><a href="blog-single.html"><img src={News1} alt="" style={{borderRadius: '24px'}} /></a></figure>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><a href="blog-single.html" className='text-size-2 text-size-lg-3'>February 24, 2019</a></li>
                                        <li><a href="blog-single.html" className='text-size-2 text-size-lg-3'>Event, UX</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html" className='fw-bold text-size-5 text-size-lg-6'>Benefits of using a WordPress Gutenberg theme</a></h3>
                                    <div className="author-info"><span className="icon icon_profile"></span><a href="#">By NIjam Ali</a></div>
                                </div>
                            </div>
                        </div>

                        {/*  News Block */}
                        <div className="col-12 col-md-6 news-block col-lg-4 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><a href="blog-single.html"><img src={News1} alt="" style={{borderRadius: '24px'}} /></a></figure>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><a href="blog-single.html" className='text-size-2 text-size-lg-3'>January 10, 2019</a></li>
                                        <li><a href="blog-single.html" className='text-size-2 text-size-lg-3'>Event, UX</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html" className='fw-bold text-size-5 text-size-lg-6'>Benefits of using a WordPress Gutenberg theme</a></h3>
                                    <div className="author-info"><span className="icon icon_profile"></span><a href="#">By NIjam Ali</a></div>
                                </div>
                            </div>
                        </div>

                        {/*  News Block */}
                        <div className="col-12 col-md-6 news-block col-lg-4 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><a href="blog-single.html"><img src={News1} alt="" style={{borderRadius: '24px'}} /></a></figure>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><a href="blog-single.html" className='text-size-2 text-size-lg-3'>March 24, 2019</a></li>
                                        <li><a href="blog-single.html" className='text-size-2 text-size-lg-3'>Event, UX</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html" className='fw-bold text-size-5 text-size-lg-6'>Benefits of using a WordPress Gutenberg theme</a></h3>
                                    <div className="author-info"><span className="icon icon_profile"></span><a href="#">By NIjam Ali</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End News Section */}
        </>
    )
}
