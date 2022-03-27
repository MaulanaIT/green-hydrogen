import React from 'react';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import BackgroundBanner2 from '../assets/about-us-introduction/background-banner-2.png';
import BackgroundVideo from '../assets/about-us-introduction/background-banner-1.png';
import IconBanner1 from '../assets/about-us-introduction/icon-banner-1.png';
import IconBanner2 from '../assets/about-us-introduction/icon-banner-2.png';
import IconBanner3_1 from '../assets/about-us-introduction/icon-banner-3-1.png';
import IconBanner3_2 from '../assets/about-us-introduction/icon-banner-3-2.png';
import IconBanner3_3 from '../assets/about-us-introduction/icon-banner-3-3.png';
import IconBanner3_4 from '../assets/about-us-introduction/icon-banner-3-4.png';
import IconBanner3_5 from '../assets/about-us-introduction/icon-banner-3-5.png';

import Sponsor from '../component/Sponsor';
import { FaLongArrowAltRight, FaPhone, FaRegEnvelope, FaRegUser, FaUser, FaUserAlt } from 'react-icons/fa';

export default function IntroductionObjectives() {
    return (
        <>
            <div className='fluid-section-two' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <div className='align-items-center container-width d-flex flex-column justify-content-center h-100'>
                    <p className='fw-bold mt-lg-5 text-center text-size-20 text-size-lg-25'>ABOUT US</p>
                    <p className='text-center text-size-5 text-size-lg-8'>About Us | Introduction & Objectives</p>
                </div>
            </div>

            <div className='container container-width my-5'>
                <img src={IconBanner1} alt="" className='w-100' />
            </div>

            <section className='container container-article-section container-width'>
                <p className='text-black'>Launched in May 2022, Hydrogen Business Desk (HBD) is part of EKONID services that provides information regarding the development of hydrogen, primarily green hydrogen in Indonesia.
                    <br /><br />
                    The development of the energy sector is currently moving towards a greener and more environmentally friendly direction due to climate change, Indonesia as one of the most significant energy users in the world with a population of more than 280 million, requires a tremendous amount of energy compared to other countries. The National Energy Council predicts that electricity consumption in 2050 will reach 2,000 Terra Watt-hour (Twh).</p>
            </section>

            <section className='banner-container-image container-article-section gradient-background-color'>
                <div className='container container-article-section-flex container-width p-0'>
                    <div className='col-12 col-sm-6 d-none d-sm-flex'>
                        <img src={IconBanner2} alt="" className='h-100 w-100' />
                    </div>
                    <div className='col-12 col-sm-6 d-flex flex-column justify-content-center p-3'>
                        <p className='fw-bold text-start text-size-20 text-size-lg-25'>Indonesia is Commited</p>
                        <p className='fw-bold'>to reducing greenhouse gas emissions by 2030</p>
                        <p>Currently, Indonesia is trying to reduce fuels sourced from fossil energyThrough the ratification of the Paris Agreement, Indonesia is committed to reducing greenhouse gas emissions by 29% with its efforts and 41% with international assistance according to the NDC (Nationally Determined Contribution) in 2030. </p>
                    </div>
                </div>
            </section>

            <section className='container container-article-section container-width'>
                <p className='text-black'>Green hydrogen as a potential green energy that is currently not being fully utilized in Indonesia so that references related to this sector are still very limited to be found. As one of the platforms that focus on hydrogen specifically green hydrogen, Hydrogen Business Desk (HWB) is expected to serve as a reference for companies that need information on the development of green hydrogen in Indonesia.</p>
                <p className='text-black'>Hydrogen Business Desk is a project initiated and supported by GIZ and fully operated by EKONID.</p>
            </section>

            <section className='container container-article-section container-width'>
                <p className='fw-bold secondary-color text-black text-size-lg-12 text-size-15'>Hydrogen Business Desk Objectives (Benefit)</p>
                <p className='text-black'>The primary objective of the hydrogen business desk project is the presentation of current situation activities in hydrogen research and industry as well as the making-transparent of hydrogen government plant and relevant stakeholders, the promotion of German hydrogen expertise via an H2 Business Desk online platform, and the implementation of an advisory Hydrogen Business Desk as part of EKONID's service portfolio.</p>
            </section>

            <section className='container container-article-section container-width'>
                <p className='text-black'>The following is the purpose of the Hydrogen business desk platform, including:</p>
                <ul className='text-black'>
                    <li>a.&ensp;The hydrogen business desk provides you with all information on the topic of green hydrogen in Indonesia, especially the presentation of current
                        activities of research and industry and making transparent government plans and relevant stakeholders.</li>
                    <li>b.&ensp;Hydrogen business desk as a facility to promote German hydrogen expertise in Indonesia, primarily through online seminars with German experts</li>
                    <li>c.&ensp;The Hydrogen Business Desk provides all know-how development activities to provide substantial advice on the green hydrogen sector.</li>
                    <li>d.&ensp;Hydrogen business desk as an online platform to provide updates regarding e-tenders and ongoing projects in Indonesia</li>
                </ul>
            </section>

            <section className='container container-article-section container-width'>
                <p className='fw-bold secondary-color text-black text-size-lg-12 text-size-15'>Hydrogen Business Desk Objectives</p>
            </section>

            <section className='container container-article-section container-width objective-business-desk-container'>
                <div className='col-12 col-lg-6 pb-4 pe-lg-2'>
                    <div className='aling-items-center d-flex'>
                        <p className='objective-business-desk-number'>1</p>
                        <p className='objective-business-desk-title'>Market Information</p>
                    </div>
                    <div className='objective-business-desk-content'>
                        <div>
                            <p className='text-black'>We provides all information on the topic of green hydrogen in indonesia, especially the presentation of current activities of research and industry and making transparent goverment plans and relevant stakeholders.</p>
                        </div>
                        <div>
                            <img src={IconBanner3_1} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 pb-4 ps-lg-2'>
                    <div className='aling-items-center d-flex'>
                        <p className='objective-business-desk-number'>2</p>
                        <p className='objective-business-desk-title'>Technical Seminar</p>
                    </div>
                    <div className='objective-business-desk-content'>
                        <div>
                            <p className='text-black'>Hydrogen business desk as a facility to promote German Hydrogen expertise in Indonesia, primarily through online seminars with German experts</p>
                        </div>
                        <div>
                            <img src={IconBanner3_2} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 pb-4 pe-lg-2'>
                    <div className='aling-items-center d-flex'>
                        <p className='objective-business-desk-number'>3</p>
                        <p className='objective-business-desk-title'>Business Consultancy</p>
                    </div>
                    <div className='objective-business-desk-content'>
                        <div>
                            <p className='text-black'>The Hydrogen Business Desk provides all know how development activities to provide substantial advice on the green hydrogen sector</p>
                        </div>
                        <div>
                            <img src={IconBanner3_3} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 pb-4 ps-lg-2'>
                    <div className='aling-items-center d-flex'>
                        <p className='objective-business-desk-number'>4</p>
                        <p className='objective-business-desk-title'>E - Tender & Ongoing Projects</p>
                    </div>
                    <div className='objective-business-desk-content'>
                        <div>
                            <p className='text-black'>Hydrogen busniess desk as an online platform to provide updates regarding e-tenders and ongoing projects in Indonesia</p>
                        </div>
                        <div>
                            <img src={IconBanner3_4} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6'>
                    <div className='aling-items-center d-flex'>
                        <p className='objective-business-desk-number'>5</p>
                        <p className='objective-business-desk-title'>Other</p>
                    </div>
                    <div className='objective-business-desk-content'>
                        <div>
                            <p className='text-black'>As a source of information about green hydrogen accurately and reliably</p>
                        </div>
                        <div>
                            <img src={IconBanner3_5} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='gradient-background-color' style={{ height: '350px' }}>
                <div className='d-flex flex-wrap gap-0 h-100'>
                    <div className='align-items-center col-12 col-sm-6 d-none d-sm-flex'>
                        <img src={BackgroundBanner2} alt="" className='h-100 w-100' />
                    </div>
                    <div className='col-12 col-sm-6 d-flex flex-column justify-content-center p-3 p-lg-5' style={{ maxWidth: '550px' }}>
                        <div>
                            <p className='fw-bold pb-3 text-size-10 text-size-lg-15 text-white'>We have top executive &
                                start up here</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Green Hydrogen</p>
                        </div>
                        <div>
                            <div className="button-our-activity mt-5">
                                <div className='container'>
                                    <a href="#">Our Activity</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Sponsor />
        </>
    );
}
