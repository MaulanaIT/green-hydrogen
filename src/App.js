import React, { Component } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { FaLongArrowAltRight, FaMapMarkerAlt, FaPhone, FaRegEnvelope, FaSearch } from 'react-icons/fa';
import FlagIcon from './js/flag-icon';

import i18next from 'i18next';

import Activities from './pages/Activities';
import CompanyDirectories from './pages/CompanyDirectories';
import CompanyProfile from './pages/CompanyProfile';
import CompanyProject from './pages/CompanyProject';
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
import NewsDetail from './pages/NewsDetail';
import OngoingTenderProject from './pages/OngoingTenderProject';
import OurPartners from './pages/OurPartners';
import Publications from './pages/Publications';

import Loader from './component/loader';
import PopupResponse from './component/PopupResponse';
import { ConfigAPI, OpenGoogleMaps, StorageURL, Translate } from './component/helper';

import Logo from './assets/logo.png';
import FooterLogo from './assets/footer-logo.png';

import Sponsor1 from './assets/sponsor-1.png';
import Sponsor2 from './assets/sponsor-2.png';
import Sponsor3 from './assets/sponsor-3.png';

import 'bootstrap/dist/css/bootstrap.css';

import './css/style.css';
import './css/responsive.css';
import './css/custom.css';

import "leaflet/dist/leaflet.css";

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
import axios from 'axios';

export class App extends Component {

    state = {
        dataMenu: [],

        HTMLHeaderPage: [],
        htmlContentMenu: [],
        htmlContentMenuMobile: [],
        htmlContentSocialMedia: [],
        htmlContentSponsor: []
    }

    async componentDidMount() {
        window.onload = function () {
            setTimeout(() => {
                $('.preloader').fadeOut(500);
            }, 2000);
        }

        await window.scrollTo(0, 0);
        await i18next.changeLanguage(sessionStorage.getItem('language') ? sessionStorage.getItem('language') : 'en');

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

        this.GenerateMenu();
        this.GetSponsor();
        this.GetSocialMedia();
    }

    GenerateMenu = () => {
        axios.get(`https://admin.greenhydrogen.my.id/api/menu/${i18next.language}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContentMenu = [];
            let htmlContentMenuMobile = [];
            let indexSubMenu = 0;

            if (data) {
                data.map((item, index) => {
                    if (item.subs.length > 0) {
                        htmlContentMenu.push(
                            <li key={index} className="dropdown"><p className='cursor-pointer m-0'>{item?.name}</p>
                                <ul id={`submenu-${indexSubMenu++}`} className={`submenu`}>
                                    {item.subs.map((item2, index2) => {
                                        if (item2.subs.length > 0) {
                                            return <li key={index2} className='dropdown'><p>{item2?.name}</p>
                                                <ul>
                                                    {item2.subs.map((item3, index3) => {
                                                        if (item3.subs.length > 0) {
                                                            return <li key={index3} className='dropdown'><p>{item3?.name}</p>
                                                                <ul>
                                                                    {item3.subs.map((item4, index4) => {
                                                                        return <li key={index4}><Link to={`${item4?.link}`}>{item4?.name}</Link></li>;
                                                                    })}
                                                                </ul>
                                                            </li>
                                                        } else {
                                                            return <li key={index3}><Link to={`${item3?.link}`}>{item3?.name}</Link></li>;
                                                        }
                                                    })}
                                                </ul>
                                            </li>
                                        } else {
                                            return <li key={index2}><Link to={`${item2?.link}`}>{item2?.name}</Link></li>;
                                        }
                                    })}
                                </ul>
                            </li>
                        );

                        htmlContentMenuMobile.push(
                            <li key={index} className="dropdown"><p className='cursor-pointer m-0'>{item?.name}</p>
                                <ul>
                                    {item.subs.map((item2, index2) => {
                                        if (item2.subs.length > 0) {
                                            return <li key={index2} className='dropdown'><p>{item2?.name}</p>
                                                <ul>
                                                    {item2.subs.map((item3, index3) => {
                                                        if (item3.subs.length > 0) {
                                                            return <li key={index3} className='dropdown'><p>{item3?.name}</p>
                                                                <ul>
                                                                    {item3.subs.map((item4, index4) => {
                                                                        return <li key={index4}><Link to={`${item4?.link}`}>{item4?.name}</Link></li>;
                                                                    })}
                                                                </ul>
                                                                <div className="dropdown-btn">
                                                                    <span className="fa fa-angle-down"></span>
                                                                </div>
                                                            </li>
                                                        } else {
                                                            return <li key={index3}><Link to={`${item3?.link}`}>{item3?.name}</Link></li>;
                                                        }
                                                    })}
                                                </ul>
                                                <div className="dropdown-btn">
                                                    <span className="fa fa-angle-down"></span>
                                                </div>
                                            </li>
                                        } else {
                                            return <li key={index2}><Link to={`${item2?.link}`}>{item2?.name}</Link></li>;
                                        }
                                    })}
                                </ul>
                                <div className="dropdown-btn">
                                    <span className="fa fa-angle-down"></span>
                                </div>
                            </li>
                        );
                    } else {
                        htmlContentMenu.push(
                            <li key={index}><Link to={`${item?.link}`}>{item?.name}</Link></li>
                        );

                        htmlContentMenuMobile.push(
                            <li key={index}><Link to={`${item?.link}`}>{item?.name}</Link></li>
                        );
                    }
                });
            }

            this.setState({ dataMenu: data, htmlContentMenu: htmlContentMenu, htmlContentMenuMobile: htmlContentMenuMobile }, () => {
                //Dropdown Button
                $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
                    $(this).prev('ul').slideToggle(500);
                    this.style = `transform: rotate(${(this.style.transform === 'rotate(540deg)') ? 0 : 540}deg)`;
                });
            });
        });
    }

    GetSocialMedia = () => {
        axios.get('https://admin.greenhydrogen.my.id/api/social_media', ConfigAPI()).then(response => {
            let data = response.data.data.socialmedia;

            let htmlContentSocialMedia = [];

            if (data) {
                data.map((item, index) => {
                    htmlContentSocialMedia.push(
                        <ul key={index} className="social-icon-one text-center pt-4">
                            <li key={0}><a href={item?.source?.toLowerCase() === 'facebook' ? item?.link : '#'} target={'_blank'}><span className="fab fa-facebook-f"></span></a></li>
                            <li key={1}><a href={item?.source?.toLowerCase() === 'twitter' ? item?.link : '#'} target={'_blank'}><span className="fab fa-twitter"></span></a></li>
                            <li key={2}><a href={item?.source?.toLowerCase() === 'instagram' ? item?.link : '#'} target={'_blank'}><span className="fab fa-instagram"></span></a></li>
                            <li key={3}><a href={item?.source?.toLowerCase() === 'youtube' ? item?.link : '#'} target={'_blank'}><span className="fab fa-youtube"></span></a></li>
                        </ul>
                    );
                })
            }

            this.setState({ htmlContentSocialMedia: htmlContentSocialMedia });
        });
    }

    GetSponsor = () => {
        axios.get('https://admin.greenhydrogen.my.id/api/sponsor', ConfigAPI()).then(response => {
            let data = response.data.data.sponsors;

            if (data.length > 0) {
                let htmlContentSponsor = [];

                data.map((item, index) => {
                    if (index < 3) {
                        htmlContentSponsor.push(
                            <a key={index} href={item.link} className="h-100 text-white"><img key={index} src={StorageURL(item.image)} alt={item.name} className='h-100' /></a>
                        )
                    }
                });

                this.setState({ htmlContentSponsor: htmlContentSponsor });
            }
        });
    }

    Logout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');

        window.location.reload();
    }

    ScrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    Subscribe = () => {
        let email = document.getElementById('input-email-newsletter').value;

        const formData = new FormData();

        formData.append('email', email);

        axios.post('https://admin.greenhydrogen.my.id/api/newsletter/subscribe', formData, ConfigAPI()).then(response => {
            document.getElementById('popup-response').classList.add('active');
            document.getElementById('popup-response-text').innerHTML = 'Subscribe newsletter berhasil...';

            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }).catch(error => {
            document.getElementById('popup-response').classList.add('active');
            document.getElementById('popup-response-text').innerHTML = 'Subscribe newsletter gagal...';

            setTimeout(() => {
                window.location.reload();
            }, 2000);
        });
    }

    SwitchLanguage = (code) => {
        sessionStorage.setItem('language', code.toLowerCase());

        window.location.reload();
    }

    render() {
        return (
            <div className="page-wrapper position-relative">

                <Loader />
                <PopupResponse />

                {/* Preloader  */}
                <div id='preloader' className="preloader"></div>

                {/*  Main Header */}
                <header className="main-header w-100">
                    <div className="container-width main-box px-20">
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
                                        {this.state.htmlContentMenu}
                                    </ul>
                                    <ul className="ms-auto navigation">
                                        <li key={0} className="dropdown"><p id='current-language' className='cursor-pointer m-0'><Translate title={`EN`} /></p>
                                            <ul style={{ width: 150 }}>
                                                <li key={0}><p onClick={() => this.SwitchLanguage('id')} ><FlagIcon code={'id'} className='me-3' /> ID</p></li>
                                                <li key={1}><p onClick={() => this.SwitchLanguage('en')} ><FlagIcon code={'us'} className='me-3' /> EN</p></li>
                                            </ul>
                                        </li>
                                        <li key={1}>
                                            {(localStorage.getItem('token') || sessionStorage.getItem('token')) ?
                                                <a><span className='button-join' onClick={this.Logout}><Translate title={`Logout`} /></span></a>
                                                :
                                                <Link to={'/company-directories'}><span className='button-join'><Translate title={`Join Us`} /></span></Link>
                                            }
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
                                <Link to={'/home'} className='primary-color'><img src={Logo} alt="" className='w-100' /></Link>
                            </div>
                            <ul className="navigation">
                                {this.state.htmlContentMenuMobile}
                                <li key={0} className="dropdown"><p id='current-language' className='cursor-pointer m-0'><Translate title={`EN`} /></p>
                                    <ul style={{ width: 150 }}>
                                        <li key={0}><p onClick={() => this.SwitchLanguage('id')} ><FlagIcon code={'id'} className='me-3' /> ID</p></li>
                                        <li key={1}><p onClick={() => this.SwitchLanguage('en')} ><FlagIcon code={'us'} className='me-3' /> EN</p></li>
                                    </ul>
                                    <div className="dropdown-btn">
                                        <span className="fa fa-angle-down"></span>
                                    </div>
                                </li>
                                <li key={1}>
                                    <Link to={'/company-directories'}><Translate title={`Join Us`} /></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/*  End Mobile Menu  */}

                </header >
                {/* End Main Header  */}

                <Routes>
                    <Route key={0} path='/' element={<Navigate to={'/home'} />} />
                    <Route key={1} path='/home' element={<Home />} />
                    <Route key={2} path='/green-hydrogen/overview' element={<GreenHydrogenOverview />} />
                    <Route key={3} path='/green-hydrogen/production' element={<GreenHydrogenProduction />} />
                    <Route key={4} path='/green-hydrogen/in-indonesia/overview' element={<GreenHydrogenIndonesiaOverview />} />
                    <Route key={5} path='/green-hydrogen/in-indonesia/potential' element={<GreenHydrogenIndonesiaPotential />} />
                    <Route key={6} path='/green-hydrogen/in-indonesia/legal-framework' element={<GreenHydrogenIndonesiaLegalFramework />} />
                    <Route key={7} path='/green-hydrogen/in-indonesia/stakeholder-mapping' element={<GreenHydrogenIndonesiaStakeholderMapping />} />
                    <Route key={8} path='/green-hydrogen/in-indonesia/initiation-action' element={<GreenHydrogenIndonesiaInitiationAction />} />
                    <Route key={9} path='/green-hydrogen/in-indonesia/development-progress' element={<GreenHydrogenIndonesiaDevelopmentProgress />} />
                    <Route key={10} path='/company-directories' element={<CompanyDirectories />} />
                    <Route key={11} path='/company-profile' element={<CompanyProfile />} />
                    <Route key={12} path='/company-project' element={<CompanyProject />} />
                    <Route key={13} path='/publications' element={<Publications />} />
                    <Route key={14} path='/news-event/news' element={<News />} />
                    <Route key={15} path='/news-event/news/:title' element={<NewsDetail />} />
                    <Route key={16} path='/news-event/ongoing-tender-project' element={<OngoingTenderProject />} />
                    <Route key={17} path='/news-event/event' element={<Event />} />
                    <Route key={18} path='/about-us/introduction-objectives' element={<IntroductionObjectives />} />
                    <Route key={19} path='/about-us/our-partners' element={<OurPartners />} />
                    <Route key={20} path='/about-us/activities' element={<Activities />} />
                    <Route key={21} path='/about-us/contact-us' element={<ContuctUs />} />
                </Routes>

                {/* Subscribe Section */}
                <section className="subscribe-section wow fadeIn px-20" >
                    <div className="container-width">
                        <div className="content-box justify-content-lg-between">
                            <div className="col-12 col-lg sec-title style-two light text-center">
                                <h3 className='fw-bold'><Translate title={`Subscribe Newsletter`} /></h3>
                                <p className='fw-bold m-0'><Translate title={`Subscribe Newsletter & get always update information.`} /></p>
                            </div>

                            {/* Newsletter Form */}
                            <div className="col-12 col-lg d-flex flex-wrap gap-2 py-2 ps-lg-5">
                                <input type="email" id='input-email-newsletter' name="input-email-newsletter" placeholder="Your Email" className='col-12 col-md form-control' required />
                                <button type="submit" className="btn col-12 col-md-4 fw-bold ms-lg-4 third-background-color text-white" onClick={this.Subscribe}><Translate title={`Subscribe`} /></button>
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
                                    <img src={FooterLogo} alt="footer-logo" className='pb-4 mw-100' />
                                    <p className='m-0'><Translate title={`Hydrogen Business Desk (HBD) is part of EKONID services that provides information regarding the development of hydrogen, primarily green hydrogen in Indonesia.`} /></p>
                                    {this.state.htmlContentSocialMedia}
                                </div>
                            </div>

                            <div className="big-column col-xl-8 col-lg-12 col-md-12 row m-0" style={{ paddingTop: 30 }}>
                                <div className="col-12 col-lg-4 footer-column">
                                    <div className="footer-widget links-widget">
                                        <p className="widget-title"><Translate title={`News & Event`} /></p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li key={0}><Link to={'/news-event/news'}><Translate title={`News`} /></Link></li>
                                                <li key={1}><Link to={'/news-event/ongoing-tender-project'}><Translate title={`Ongoing Tender & Project`} /></Link></li>
                                                <li key={2}><Link to={'/news-event/event'}><Translate title={`Event`} /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer-widget links-widget">
                                        <p className="widget-title"><Translate title={`Green Hydrogen`} /></p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li key={0}><Link to={'/green-hydrogen/in-indonesia/overview'}><Translate title={`Overview Green Hydrogen In Indonesia`} /></Link></li>
                                                <li key={1}><Link to={'/green-hydrogen/in-indonesia/potential'}><Translate title={`Indonesia's Green Hydrogen Potential`} /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 footer-column">
                                    <div className="footer-widget links-widget">
                                        <p className="widget-title"><Translate title={`About Us`} /></p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li key={0}><Link to={'/about-us/introducing-objectives'}><Translate title={`Our Introduction & Objectives`} /></Link></li>
                                                <li key={1}><Link to={'/about-us/our-partners'}><Translate title={`Our Partner`} /></Link></li>
                                                <li key={2}><Link to={'/about-us/activities'}><Translate title={`Activities`} /></Link></li>
                                                <li key={3}><Link to={'/about-us/contact-us'}><Translate title={`Contact Us`} /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 footer-column">
                                    <div className="footer-widget links-widget">
                                        <p className="widget-title"><Translate title={`Contact Support`} /></p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li key={0}><a className='text-nowrap'><FaRegEnvelope /> juwadiharjo@ekonid.id</a></li>
                                                <li key={1}><a><FaPhone /> (021) 315 4685</a></li>
                                            </ul>
                                        </div>
                                        <p className="widget-title"><Translate title={`Location`} /></p>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li key={0}><a><FaMapMarkerAlt /> <Translate title={`Address`} /> Jl. H. Agus Salim No.115, RT.1/RW.5, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10031 </a></li>
                                                <li key={1}><a onClick={() => OpenGoogleMaps(-6.1955487561156435, 106.8253066155895)}><FaMapMarkerAlt /> <Translate title={`See Google Map`} /> <FaLongArrowAltRight /> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="footer-bottom primary-background-color">
                        <div className="align-items-center container-width d-flex footer-icon justify-content-center gap-4 p-2 p-lg-3">
                            {this.state.htmlContentSponsor}
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
