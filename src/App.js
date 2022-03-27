import React, { Component } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { FaLongArrowAltRight, FaMapMarkerAlt, FaPhone, FaRegEnvelope, FaSearch } from 'react-icons/fa';
import FlagIcon from './js/flag-icon';
import i18next from 'i18next';

import Activities from './pages/Activities';
import CompanyDirectories from './pages/CompanyDirectories';
import ContuctUs from './pages/ContuctUs';
import Event from './pages/Event';
// import GreenHydrogenIndonesia from './pages/GreenHydrogenIndonesia';
import GreenHydrogenIndonesiaDevelopmentProgress from './pages/GreenHydrogenIndonesiaDevelopmentProgress';
import GreenHydrogenIndonesiaInitiationAction from './pages/GreenHydrogenIndonesiaInitiationAction';
import GreenHydrogenIndonesiaLegalFramework from './pages/GreenHydrogenIndonesiaLegalFramework';
import GreenHydrogenIndonesiaOverview from './pages/GreenHydrogenIndonesia';
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

import './i18n';

import $ from 'jquery';
import WOW from 'wowjs';
import { Translate } from './component/helper';

export class App extends Component {

    state = {
        HTMLHeaderPage: []
    }

    componentDidMount() {
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
        $('ul li a').on('click', function () {
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

        let wow = new WOW.WOW({
            live: false
        });
        wow.init();
    }

    ScrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    SwitchLanguage = (code) => {
        i18next.changeLanguage(code.toLowerCase());
    }

    render() {
        return (
            <div className="page-wrapper position-relative">

                {/* Preloader  */}
                <div className="preloader"></div>

                {/*  Main Header */}
                <header className="main-header w-100">
                    <div className="container-width main-box">
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
                                        <li><Link to={'/home'}><Translate title={`Home`} /></Link></li>
                                        <li className="dropdown"><p className='cursor-pointer m-0'><Translate title={`Green Hydrogen`} /></p>
                                            <ul>
                                                <li><Link to={'/green-hydrogen/overview'} ><Translate title={`Overview`} /></Link></li>
                                                <li><Link to={'/green-hydrogen/production'} ><Translate title={`Green Hydrogen Production`} /></Link></li>
                                                <li className='dropdown'><p><Translate title={`Green Hydrogen in Indonesia`} /></p>
                                                    <ul>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/overview'} ><Translate title={`Overview Green Hydrogen in Indonesia`} /></Link></li>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/potential'} ><Translate title={`Indonesia's Green Hydrogen potential`} /></Link></li>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/legal-framework'} ><Translate title={`Legal Framework`} /></Link></li>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/stakeholder-mapping'} ><Translate title={`Stakeholder Mapping`} /></Link></li>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/initiation-action'} ><Translate title={`Initiation & Action`} /></Link></li>
                                                        <li><Link to={'/green-hydrogen/in-indonesia/development-progress'} ><Translate title={`Hydrogen Development Progress`} /></Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link to={'/company-directories'} ><Translate title={`Company Directories`} /></Link></li>
                                        <li><Link to={'/publications'} ><Translate title={`Publications`} /></Link></li>
                                        <li className="dropdown"><p className='cursor-pointer m-0'><Translate title={`News & Event`} /></p>
                                            <ul>
                                                <li><Link to={'/news-event/news'} ><Translate title={`News`} /></Link></li>
                                                <li><Link to={'/news-event/ongoing-tender-project'} ><Translate title={`Ongoing Tender & Project`} /></Link></li>
                                                <li><Link to={'/news-event/event'} ><Translate title={`Event`} /></Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><p className='cursor-pointer m-0'><Translate title={`About Us`} /></p>
                                            <ul>
                                                <li><Link to={'/about-us/introduction-objectives'}><Translate title={`Introduction & Objectives`} /></Link></li>
                                                <li><Link to={'/about-us/our-partners'} ><Translate title={`Our Partners`} /></Link></li>
                                                <li><Link to={'/about-us/activities'} ><Translate title={`Activities`} /></Link></li>
                                                <li><Link to={'/about-us/contact-us'} ><Translate title={`Contact Us`} /></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="ms-auto navigation">
                                        <li>
                                            <Link to={"#"}><FaSearch /></Link>
                                        </li>
                                        <li className="dropdown"><p id='current-language' className='cursor-pointer m-0'><Translate title={`EN`} /></p>
                                            <ul>
                                                <li><p onClick={() => this.SwitchLanguage('id')} ><FlagIcon code={'id'} className='me-3'/> ID</p></li>
                                                <li><p onClick={() => this.SwitchLanguage('en')} ><FlagIcon code={'us'} className='me-3'/> EN</p></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to={"#"}><span style={{ border: '3px solid white', borderRadius: '12px', padding: '8px 28px' }}><Translate title={`Join Us`} /></span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>

                    {/*  Mobile Menu   */}
                    <div className="mobile-menu">
                        <div className="menu-backdrop"></div>
                        <div className="close-btn"><span className="icon flaticon-cancel-music"></span></div>

                        <nav className="menu-box">
                            <div className="fs-4 fw-bold p-4 text-center">
                                <Link to={'/home'} className='primary-color'><Translate title={`Green Hydrogen`} /></Link>
                            </div>
                            <ul className="navigation">
                                <li>
                                    <Link to={"/home"}><Translate title={`Home`} /></Link>
                                </li>
                                <li className="dropdown">
                                    <p className="cursor-pointer m-0"><Translate title={`Green Hydrogen`} /></p>
                                    <ul>
                                        <li>
                                            <Link to={"/green-hydrogen/overview"}><Translate title={`Overview`} /></Link>
                                        </li>
                                        <li>
                                            <Link to={"/green-hydrogen/production"}><Translate title={`Green Hydrogen Production`} /></Link>
                                        </li>
                                        <li className="dropdown">
                                            <p><Translate title={`Green Hydrogen in Indonesia`} /></p>
                                            <ul>
                                                <li>
                                                    <Link to={"/green-hydrogen/in-indonesia/overview"}><Translate title={`Overview Green Hydrogen in Indonesia`} /></Link></li>
                                                <li>
                                                    <Link to={"/green-hydrogen/in-indonesia/potential"}><Translate title={`Indonesia's Green Hydrogen potential`} /></Link>
                                                </li>
                                                <li>
                                                    <Link to={"/green-hydrogen/in-indonesia/legal-framework"}><Translate title={`Legal Framework`} /></Link>
                                                </li>
                                                <li>
                                                    <Link to={"/green-hydrogen/in-indonesia/stakeholder-mapping"}><Translate title={`Stakeholder Mapping`} /></Link>
                                                </li>
                                                <li>
                                                    <Link to={"/green-hydrogen/in-indonesia/initiation-action"}><Translate title={`Initiation & Action`} /></Link>
                                                </li>
                                                <li>
                                                    <Link to={"/green-hydrogen/in-indonesia/development-progress"}><Translate title={`Hydrogen Development Progress`} /></Link>
                                                </li>
                                            </ul>
                                            <div className="dropdown-btn">
                                                <span className="fa fa-angle-down"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="dropdown-btn">
                                        <span className="fa fa-angle-down"></span>
                                    </div>
                                </li>
                                <li>
                                    <Link to={"/company-directories"}><Translate title={`Company Directories`} /></Link>
                                </li>
                                <li>
                                    <Link to={"/publications"}><Translate title={`Publications`} /></Link>
                                </li>
                                <li className="dropdown">
                                    <p className="cursor-pointer m-0"><Translate title={`News & Event`} /></p>
                                    <ul>
                                        <li>
                                            <Link to={"/news-event/news"}><Translate title={`News`} /></Link>
                                        </li>
                                        <li>
                                            <Link to={"/news-event/ongoing-tender-project"}><Translate title={`Ongoing Tender & Project`} /></Link>
                                        </li>
                                        <li>
                                            <Link to={"/news-event/event"}><Translate title={`Event`} /></Link>
                                        </li>
                                    </ul>
                                    <div className="dropdown-btn">
                                        <span className="fa fa-angle-down"></span>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <p className="cursor-pointer m-0"><Translate title={`About Us`} /></p>
                                    <ul>
                                        <li>
                                            <Link to={"/about-us/introduction-objectives"}><Translate title={`Introduction & Objectives`} /></Link>
                                        </li>
                                        <li>
                                            <Link to={"/about-us/our-partners"}><Translate title={`Our Partners`} /></Link>
                                        </li>
                                        <li>
                                            <Link to={"/about-us/activities"}><Translate title={`Activities`} /></Link>
                                        </li>
                                        <li>
                                            <Link to={"/about-us/contact-us"}><Translate title={`Contact Us`} /></Link>
                                        </li>
                                    </ul>
                                    <div className="dropdown-btn">
                                        <span className="fa fa-angle-down"></span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/*  End Mobile Menu  */}

                </header >
                {/* End Main Header  */}

                <Routes Routes >
                    <Route path='/' element={<Navigate to={'/home'} />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/green-hydrogen/overview' element={<GreenHydrogenOverview />} />
                    <Route path='/green-hydrogen/production' element={<GreenHydrogenProduction />} />
                    {/* <Route path='/green-hydrogen/in-indonesia' element={<GreenHydrogenIndonesia />} /> */}
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
                    <Route path='/about-us/contact-us' element={<ContuctUs />} />
                </Routes>

                {/* Subscribe Section */}
                <section section className="subscribe-section wow fadeIn" >
                    <div className="container-width">
                        <div className="content-box justify-content-lg-between">
                            <div className="col-12 col-lg sec-title style-two light text-center">
                                <h3 className='fw-bold'><Translate title={`Subscribe Newsletter`} /></h3>
                                <p className='fw-bold m-0'><Translate title={`Subscribe Newsletter & get always update information.`} /></p>
                            </div>

                            {/* Newsletter Form */}
                            <div className="col-12 col-lg d-flex flex-wrap gap-2 py-2 ps-lg-5">
                                <input type="email" name="field-name" placeholder="Your Email" className='col-12 col-md form-control' required />
                                <button type="submit" className="btn col-12 col-md-4 fw-bold ms-lg-4 third-background-color text-white"><Translate title={`Subscribe`} /></button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Subscribe Section */}

                {/*  Main Footer  */}
                <footer className="main-footer">
                    {/* Widgets Section */}
                    <div className="container-width widgets-section">
                        <div className="row">
                            <div className="big-column col-xl-4 col-lg-12 col-md-12">
                                {/* Footer Column */}
                                <div className="footer-column about-widget">
                                    <img src={FooterLogo} alt="footer-logo" className='pb-4 wm-100' />
                                    <p className='m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Non, lobortis in in tortor lectus iaculis viverra.
                                        Adipiscing lobortis interdum fringilla euismod odio
                                    </p>
                                    <ul className="social-icon-one text-center text-lg-start pt-4">
                                        <li><Link to={'/'}><span className="fab fa-facebook-f"></span></Link></li>
                                        <li><Link to={'/'}><span className="fab fa-twitter"></span></Link></li>
                                        <li><Link to={'/'}><span className="fab fa-instagram"></span></Link></li>
                                        <li><Link to={'/'}><span className="fab fa-youtube"></span></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="big-column col-xl-8 col-lg-12 col-md-12 row m-0">
                                <div className="col-12 col-lg-6 footer-column">
                                    <div className="footer-widget links-widget">
                                        <p className="widget-title"><Translate title={`Green Hydrogen`} /></p>
                                        <div className="d-flex flex-wrap widget-content">
                                            <ul className="list col-12 col-sm-6 pe-lg-2">
                                                <li><Link to={'/'}><FaLongArrowAltRight /> <Translate title={`Overview`} /></Link></li>
                                                <li><Link to={'/'}><FaLongArrowAltRight /> <Translate title={`Green Hydrogen Work?`} /></Link></li>
                                                <li><Link to={'/'}><FaLongArrowAltRight /> <Translate title={`Green Hydrogen in Indonesia`} /></Link></li>
                                            </ul>
                                            <ul className="list col-12 col-sm-6 ps-lg-2">
                                                <li><Link to={'/'}><FaLongArrowAltRight /> <Translate title={`Overview Hydrogen in Indonesia`} /></Link></li>
                                                <li><Link to={'/'}><FaLongArrowAltRight /> <Translate title={`Indonesia is Hydrogen Potensial`} /></Link></li>
                                                <li><Link to={'/'}><FaLongArrowAltRight /> <Translate title={`Legal Framework`} /></Link></li>
                                                <li><Link to={'/'}><FaLongArrowAltRight /> <Translate title={`Initiation & Action`} /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 col-xl-3 footer-column">
                                    <div className="footer-widget links-widget">
                                        <p className="widget-title"><Translate title={`About Us`} /></p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li><Link to={'/'}><Translate title={`Our Introduction & Objectives`} /></Link></li>
                                                <li><Link to={'/'}><Translate title={`Our Partner`} /></Link></li>
                                                <li><Link to={'/'}><Translate title={`Activities`} /></Link></li>
                                                <li><Link to={'/'}><Translate title={`Contact Us`} /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 col-xl-3 footer-column">
                                    <div className="footer-widget links-widget">
                                        <p className="widget-title"><Translate title={`Contact Support`} /></p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li><Link to={'/'} className='text-nowrap'><FaRegEnvelope /> contact@greenenergy.com</Link></li>
                                                <li><Link to={'/'}><FaPhone /> (021) 5555 3333</Link></li>
                                            </ul>
                                        </div>
                                        <p className="widget-title"><Translate title={`Location`} /></p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li><Link to={'/'}><FaMapMarkerAlt /> <Translate title={`See Goggle Map`} /> <FaLongArrowAltRight /> </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="footer-bottom primary-background-color">
                        <div className="container-width p-0">
                            <div className="copyright-text">LOGO (GIZ BSFD, EKONID etc) - similiar to EPR</div>
                        </div>
                    </div>

                </footer>
                {/*  End Main Footer  */}

                {/* End pagewrapper */}

                {/* Scroll to top */}
                <div className="scroll-to-top scroll-to-target" onClick={this.ScrollToTop}><span className="fa fa-angle-double-up"></span></div>

            </div >
        )
    }
}

export default App
