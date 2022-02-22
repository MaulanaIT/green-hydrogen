import React, { useEffect } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { BsGlobe } from 'react-icons/bs';
import { FaLongArrowAltRight, FaMapMarkerAlt, FaPhone, FaRegEnvelope } from 'react-icons/fa';
import ImportScript from './component/helper';

import Activities from './pages/Activities';
import CompanyDirectories from './pages/CompanyDirectories';
import ContuctUs from './pages/ContuctUs';
import Event from './pages/Event';
import GreenHydrogenIndonesia from './pages/GreenHydrogenIndonesia';
import GreenHydrogenIndonesiaDevelopmentProgress from './pages/GreenHydrogenIndonesiaDevelopmentProgress';
import GreenHydrogenIndonesiaInitiationAction from './pages/GreenHydrogenIndonesiaInitiationAction';
import GreenHydrogenIndonesiaLegalFramework from './pages/GreenHydrogenIndonesiaLegalFramework';
import GreenHydrogenIndonesiaOverview from './pages/GreenHydrogenIndonesiaOverview';
import GreenHydrogenIndonesiaPotential from './pages/GreenHydrogenIndonesiaPotential';
import GreenHydrogenIndonesiaStakeholderMapping from './pages/GreenHydrogenIndonesiaStakeholderMapping';
import GreenHydrogenOverview from './pages/GreenHydrogenOverview';
import GreenHydrogenProduction from './pages/GreenHydrogenProduction';
import Home from './pages/Home';
import IntroductionObjectives from './pages/IntroductionObjectives';
import News from './pages/News';
import OngoingTenderProject from './pages/OngoingTenderProject';
import OurPartners from './pages/OurPartners';
import Publications from './pages/Publications';

import Logo from './assets/logo.png';
import FooterLogo from './assets/footer-logo.png';

import 'bootstrap/dist/css/bootstrap.css';

import './css/style.css';
import './css/responsive.css';
import './css/custom.css';

import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery-ui';
import 'jquery.countdown/jquery.countdown';
import '@fancyapps/fancybox/dist/jquery.fancybox';
import 'jquery.appear/jquery.appear';
import 'parallax-js/dist/parallax';
import 'swiper';
import 'owl.carousel/dist/owl.carousel';
import 'jquery-knob/knob.jquery.json';
import 'moment/moment';
import './js/script';

import $ from 'jquery';
import WOW from 'wowjs';

export default function App() {

    const location = useLocation();

    useEffect(() => {
        //Submenu Dropdown Toggle
        if ($('.main-header li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
        }

        //Mobile Nav Hide Show
        var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
        $('.mobile-menu').append('<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>');
        $('.mobile-menu .navigation').append(mobileMenuContent);
        $('.sticky-header .navigation').append(mobileMenuContent);
        $('.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
            this.style = `transform: rotate(${(this.style.transform === 'rotate(540deg)') ? 0 : 540}deg)`;
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });

        //Shedule Block
        if ($('.schedule-block').length) {
            $('.schedule-block.active').find('.lower-content').slideDown();

            $('.schedule-block .toggle-btn').on('click', function () {
                $(this).parents('.schedule-block').toggleClass('active');
                $(this).parents('.schedule-block').find('.lower-content').slideToggle(400);
                $(this).parents('.schedule-block').siblings().find('.lower-content').slideUp(400);
                $(this).parents('.schedule-block').siblings().removeClass('active');
            });
        }

        $(window).on('scroll', function () {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos >= 1) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        });
    }, []);

    useEffect(() => {
        let wow = new WOW.WOW({
            live: false
        });
        wow.init();
        
    }, []);

    return (
        <div className="page-wrapper">

            {/*  Preloader  */}
            <div className="preloader"></div>

            {/*  Main Header */}
            <header className="main-header">
                <div className="main-box">
                    <div className="auto-container clearfix">
                        <div className="logo-box">
                            <div className="fs-4 fw-bold"><Link to={'/home'} className='primary-color'><img src={Logo} alt="logo" className='navbar-logo' /></Link></div>
                        </div>

                        {/* Nav Box */}
                        <div className="nav-outer clearfix">
                            {/* Mobile Navigation Toggler */}
                            <div className="mobile-nav-toggler"><span className="icon flaticon-menu-1"></span></div>
                            {/*  Main Menu  */}
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="navbar-header">
                                    {/*  Togg le Button  */}
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon flaticon-menu-button"></span>
                                    </button>
                                </div>

                                <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li><Link to={'/home'}>Home</Link></li>
                                        <li className="dropdown"><p className='cursor-pointer m-0'>Green Hydrogen</p>
                                            <ul>
                                                <li><Link to={'/green-hydrogen/overview'}>Overview</Link></li>
                                                <li><Link to={'/green-hydrogen/production'}>Green Hydrogen Production</Link></li>
                                                <li className='dropdown'><Link to={'/green-hydrogen/in-indonesia'}>Green Hydrogen in Indonesia</Link>
                                                    <ul>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/overview'}>Overview Green Hydrogen in Indonesia</Link></li>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/potential'}>Indonesia's Green Hydrogen potential</Link></li>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/legal-framework'}>Legal Framework</Link></li>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/stakeholder-mapping'}>Stakeholder mapping</Link></li>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/initiation-action'}>Initiation & Action</Link></li>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/development-progress'}>Hydrogen Development Progress</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link to={'/company-directories'}>Company Directories</Link></li>
                                        <li><Link to={'/publications'}>Publications</Link></li>
                                        <li className="dropdown"><p className='cursor-pointer m-0'>News & Event</p>
                                            <ul>
                                                <li><p to={'/news-event/news'} className='text-secondary'>News</p></li>
                                                <li><Link to={'/news-event/ongoing-tender-project'}>Ongoing Tender & Project</Link></li>
                                                <li><Link to={'/news-event/event'}>Event</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><p className='cursor-pointer m-0'>About Us</p>
                                            <ul>
                                                <li><p to={'/about-us/introduction-objectives'} className='text-secondary'>Introduction & Objectives</p></li>
                                                <li><Link to={'/about-us/our-partners'}>Our Partners</Link></li>
                                                <li><p to={'/about-us/activities'} className='text-secondary'>Activities</p></li>
                                                <li><p to={'/about-us/contact-us'} className='text-secondary'>Contact us</p></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/*  Main Menu End */}

                            {/*  Outer box  */}
                            <div className="outer-box">
                                <div className='align-items-center btn d-flex secondary-background-color' style={{height: '36px'}}>
                                    <BsGlobe className='text-white' />
                                </div>
                                <div className='align-items-center btn d-flex ms-2 px-4' style={{background: 'linear-gradient(45deg, rgba(0, 155, 76, 1) 0%, rgba(6, 97, 87, 1) 100%)', height: '36px'}}>
                                    <p className='m-0'>Join Us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Mobile Menu   */}
                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon flaticon-cancel-1"></span></div>

                    {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
                    <nav className="menu-box">
                        <div className="fs-4 fw-bold p-4 text-center"><Link to={'/home'} className='primary-color'>Green Hydrogen</Link></div>

                        <ul className="navigation clearfix">{/* Keep This Empty / Menu will come through Javascript */}</ul>
                    </nav>
                </div>{/*  End Mobile Menu  */}

            </header>
            {/* End Main Header  */}

            <Routes>
                <Route path='/' element={<Navigate to={'/home'} />} />
                <Route path='/home' element={<Home />} />
                <Route path='/green-hydrogen/overview' element={<GreenHydrogenOverview />} />
                <Route path='/green-hydrogen/production' element={<GreenHydrogenProduction />} />
                <Route path='/green-hydrogen/in-indonesia' element={<GreenHydrogenIndonesia />} />
                <Route path='/green-hydrogen/in-indonesia/overview' element={<GreenHydrogenIndonesiaOverview />} />
                <Route path='/green-hydrogen/in-indonesia/potential' element={<GreenHydrogenIndonesiaPotential />} />
                <Route path='/green-hydrogen/in-indonesia/legal-framework' element={<GreenHydrogenIndonesiaLegalFramework />} />
                <Route path='/green-hydrogen/in-indonesia/stakeholder-mapping' element={<GreenHydrogenIndonesiaStakeholderMapping />} />
                <Route path='/green-hydrogen/in-indonesia/initiation-action' element={<GreenHydrogenIndonesiaInitiationAction />} />
                <Route path='/green-hydrogen/in-indonesia/development-progress' element={<GreenHydrogenIndonesiaDevelopmentProgress />} />
                <Route path='/company-directories' element={<CompanyDirectories />} />
                <Route path='/publications' element={<Publications />} />
                <Route path='/news-event/news' element={<News />} />
                <Route path='/news-event/ongoing-tender-project' element={<OngoingTenderProject />} />
                <Route path='/news-event/event' element={<Event />} />
                <Route path='/about-us/introduction-objectives' element={<IntroductionObjectives />} />
                <Route path='/about-us/our-partners' element={<OurPartners />} />
                <Route path='/about-us/activities' element={<Activities />} />
                <Route path='/about-us/contuct-us' element={<ContuctUs />} />
            </Routes>

            {/* Subscribe Section */}
            <section className="subscribe-section wow fadeIn">
                <div className="auto-container">
                    <div className="content-box justify-content-lg-between">
                        <div className="col-12 col-lg sec-title style-two light text-center">
                            <h3 className='fw-bold'>Subscribe Newsletter</h3>
                            <p className='fw-bold m-0'>Subscribe Newsletter & get always update information.</p>
                        </div>

                        {/* Newsletter Form */}
                        <div className="col-12 col-lg d-flex flex-wrap gap-2 py-2 ps-lg-5">
                            <input type="email" name="field-name" placeholder="Your Email" className='col-12 col-md form-control' required />
                            <button type="submit" className="btn col-12 col-md-4 fw-bold ms-lg-4 navy-background-color text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Subscribe Section */}

            {/*  Main Footer  */}
            <footer className="main-footer">
                {/* Widgets Section */}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="big-column col-xl-4 col-lg-12 col-md-12">
                                {/* Footer Column */}
                                <div className="footer-column about-widget">
                                    <img src={FooterLogo} alt="footer-logo" className='pb-4' />
                                    <p className='m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Non, lobortis in in tortor lectus iaculis viverra.
                                        Adipiscing lobortis interdum fringilla euismod odio
                                    </p>
                                    <ul className="social-icon-one text-center text-lg-start pt-4">
                                        <li><Link to={'/'}><span className="fab fa-facebook-f"></span></Link></li>
                                        <li><Link to={'/'}><span className="fab fa-twitter"></span></Link></li>
                                        <li><Link to={'/'}><span className="fab fa-vimeo-v"></span></Link></li>
                                        <li><Link to={'/'}><span className="fab fa-linkedin-in"></span></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="big-column col-xl-8 col-lg-12 col-md-12 row m-0">
                                <div className="col-12 col-lg-4 footer-column">
                                    <div className="footer-widget links-widget">
                                        <p className="widget-title">Green Hydrogen</p>
                                        <div className="d-flex flex-wrap widget-content">
                                            <ul className="list col-12 col-lg-6 pe-lg-2">
                                                <li><Link to={'/'}><FaLongArrowAltRight /> Overview</Link></li>
                                                <li><Link to={'/'}><FaLongArrowAltRight /> Green Hydrogen Work?</Link></li>
                                                <li><Link to={'/'}><FaLongArrowAltRight /> Green Hydrogen in Indonesia</Link></li>
                                            </ul>
                                            <ul className="list col-12 col-lg-6 ps-lg-2">
                                                <li><Link to={'/'}><FaLongArrowAltRight /> Overview Hydrogen in Indonesia</Link></li>
                                                <li><Link to={'/'}><FaLongArrowAltRight /> Indonesia is Hydrogen Potensial</Link></li>
                                                <li><Link to={'/'}><FaLongArrowAltRight /> Legal Framework</Link></li>
                                                <li><Link to={'/'}><FaLongArrowAltRight /> Initiation & Action</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 footer-column">
                                    <div className="footer-widget links-widget">
                                        <p className="widget-title">About Us</p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li><Link to={'/'}>Our Introduction & Objectives</Link></li>
                                                <li><Link to={'/'}>Our Partner</Link></li>
                                                <li><Link to={'/'}>Activities</Link></li>
                                                <li><Link to={'/'}>Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 footer-column">
                                    <div className="footer-widget links-widget">
                                        <p className="widget-title">Contact Support</p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li><Link to={'/'} className='text-nowrap'><FaRegEnvelope /> contact@greenenergy.com</Link></li>
                                                <li><Link to={'/'}><FaPhone /> (021) 5555 3333</Link></li>
                                            </ul>
                                        </div>
                                        <p className="widget-title">Location</p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li><Link to={'/'}><FaMapMarkerAlt /> See Goggle Map <FaLongArrowAltRight /> </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom primary-background-color">
                    <div className="auto-container">
                        <div className="copyright-text">LOGO (GIZ BSFD, EKONID etc) - similiar to EPR</div>
                    </div>
                </div>

            </footer>
            {/*  End Main Footer  */}

            {/* End pagewrapper */}

            {/* Scroll to top */}
            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-double-up"></span></div>

        </div>
    );
}
