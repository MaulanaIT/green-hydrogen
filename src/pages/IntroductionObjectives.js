import React, { Component } from 'react'

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import BackgroundBanner2 from '../assets/about-us-introduction/background-banner-2.png';
import IconBanner1 from '../assets/about-us-introduction/icon-banner-1.png';
import IconBanner2 from '../assets/about-us-introduction/icon-banner-2.png';
import IconBanner3_1 from '../assets/about-us-introduction/icon-banner-3-1.png';
import IconBanner3_2 from '../assets/about-us-introduction/icon-banner-3-2.png';
import IconBanner3_3 from '../assets/about-us-introduction/icon-banner-3-3.png';
import IconBanner3_4 from '../assets/about-us-introduction/icon-banner-3-4.png';
import IconBanner3_5 from '../assets/about-us-introduction/icon-banner-3-5.png';
import IconMaps from '../assets/about-us-introduction/icon-maps.png';

import { ConfigAPI, StorageURL, Translate } from '../component/helper';
import LatestNews from '../component/LatestNews';
import i18next from 'i18next';
import axios from 'axios';

export class IntroductionObjectives extends Component {

    state = {
        htmlContent: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 39 : 40}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className='fluid-section-two position-relative' style={{ background: `url(${StorageURL(item?.content?.background_introduction_picture_1)}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='align-items-center container-width d-flex flex-wrap justify-content-center h-100 px-20'>
                                    <div className='col-12 col-md-6 text-center text-lg-start'>
                                        <p className='fw-bold text-size-6 text-size-lg-8'>{item?.content?.left_title_1}</p>
                                        <p className='text-size-3 text-size-lg-4'>{item?.content?.left_description_1}</p>
                                    </div>
                                    <div className='col-12 col-md-6 mt-0 text-center text-lg-end'>
                                        <p className='text-size-3 text-size-lg-4'><Translate title={`Hydrogen Indonesia`} /></p>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '1') {
                        htmlContent.push(
                            <div className='py-5' style={{ backgroundColor: '#2f318b' }}>
                                <div className='align-items-center container-width d-flex justify-content-between px-20'>
                                    <div className='col-12 col-lg-5'>
                                        <p className='border-3 border-bottom d-inline-block fw-bold pb-2 text-size-10 text-size-lg-15'>{item?.content?.left_title_1}</p>
                                        <p className='py-3' dangerouslySetInnerHTML={{ __html: item?.content?.left_description_1 }}></p>
                                    </div>
                                    <div className='container-image col-12 col-lg-5 p-5'>
                                        <img src={StorageURL(item?.content?.right_picture_1)} alt="" className='h-100' />
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '3') {
                        htmlContent.push(
                            <div className='align-items-center container-width d-flex justify-content-between px-20'>
                                <div className='container-image col-12 col-lg-6'>
                                    <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='h-100' />
                                </div>
                                <div className='col-12 col-lg-5'>
                                    <p className='d-inline-block fw-bold text-size-10 text-size-lg-15' style={{ color: '#2f318b' }}>{item?.content?.right_title_1}</p>
                                    <p className='d-inline-block fw-bold pb-2 text-size-10 text-size-lg-15' style={{ color: '#2f318b', borderBottom: '3px solid #001077' }}>{item?.content?.right_title_2}</p>
                                    <p className='fw-bold text-size-10 text-size-lg-15' style={{ color: '#2f318b' }}>{item?.content?.right_title_3}</p>
                                </div>
                            </div>
                        );
                    } else if (item.order == '4') {
                        htmlContent.push(
                            <div className='container-width py-5 px-20'>
                                <p className='text-black' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_1 }}></p>
                            </div>
                        );
                    } else if (item.order == '5') {
                        htmlContent.push(
                            <div className='banner-container-image container-article-section gradient-background-color px-20'>
                                <div className='container container-article-section-flex container-width p-0'>
                                    <div className='col-12 col-sm-6 d-none d-sm-flex'>
                                        <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='h-100 w-100' />
                                    </div>
                                    <div className='col-12 col-sm-6 d-flex flex-column justify-content-center p-3'>
                                        <p className='border-3 border-bottom d-inline-block fw-bold pb-2 text-start text-size-10 text-size-lg-15'>{item?.content?.right_title_1}</p>
                                        <p className='fw-bold py-3 text-size-4 text-size-lg-5' dangerouslySetInnerHTML={{ __html: item?.content?.right_description_1 }}></p>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '6') {
                        htmlContent.push(
                            <>

                                <div className='container container-article-section container-width px-20'>
                                    <p className='text-black' dangerouslySetInnerHTML={{__html: item?.content?.middle_description_1}}></p>
                                </div>

                                <div className='container container-article-section container-width px-20'>
                                    <p className='fw-bold secondary-color text-black text-size-lg-8 text-size-6'>{item?.content?.middle_title_1}</p>
                                </div>

                                <div className='container container-article-section container-width px-20'>
                                    <p className='text-black' dangerouslySetInnerHTML={{__html: item?.content?.middle_description_2}}></p>
                                </div>

                                <div className='container container-article-section container-width px-20'>
                                    <p className='fw-bold secondary-color text-black text-size-lg-8 text-size-6'>{item?.content?.middle_title_2}</p>
                                </div>

                                <div className='container container-article-section container-width objective-business-desk-container px-20'>
                                    <div className='col-12 col-lg-6 pb-4 pe-lg-2 wow fadeInLeft' data-wow-delay="0.4s">
                                        <div className='aling-items-center d-flex'>
                                            <p className='objective-business-desk-number'>1</p>
                                            <p className='objective-business-desk-title'><Translate title={`Market Information`} /></p>
                                        </div>
                                        <div className='objective-business-desk-content'>
                                            <div>
                                                <p className='text-black'><Translate title={`We provides all information on the topic of green hydrogen in indonesia, especially the presentation of current activities of research and industry and making transparent goverment plans and relevant stakeholders.`} /></p>
                                            </div>
                                            <div>
                                                <img src={IconBanner3_1} alt="" className='w-100' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6 pb-4 ps-lg-2 wow fadeInRight' data-wow-delay="0.4s">
                                        <div className='aling-items-center d-flex'>
                                            <p className='objective-business-desk-number'>2</p>
                                            <p className='objective-business-desk-title'><Translate title={`Technical Seminar`} /></p>
                                        </div>
                                        <div className='objective-business-desk-content'>
                                            <div>
                                                <p className='text-black'><Translate title={`Hydrogen business desk as a facility to promote German Hydrogen expertise in Indonesia, primarily through online seminars with German experts`} /></p>
                                            </div>
                                            <div>
                                                <img src={IconBanner3_2} alt="" className='w-100' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6 pb-4 pe-lg-2 wow fadeInLeft' data-wow-delay="0.4s">
                                        <div className='aling-items-center d-flex'>
                                            <p className='objective-business-desk-number'>3</p>
                                            <p className='objective-business-desk-title'><Translate title={`Business Consultancy`} /></p>
                                        </div>
                                        <div className='objective-business-desk-content'>
                                            <div>
                                                <p className='text-black'><Translate title={`The Hydrogen Business Desk provides all know-how development activities to provide substantial advice on the green hydrogen sector`} /></p>
                                            </div>
                                            <div>
                                                <img src={IconBanner3_3} alt="" className='w-100' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6 pb-4 ps-lg-2 wow fadeInRight' data-wow-delay="0.4s">
                                        <div className='aling-items-center d-flex'>
                                            <p className='objective-business-desk-number'>4</p>
                                            <p className='objective-business-desk-title'><Translate title={`E - Tender & Ongoing Projects`} /></p>
                                        </div>
                                        <div className='objective-business-desk-content'>
                                            <div>
                                                <p className='text-black'><Translate title={`Hydrogen business desk as an online platform to provide updates regarding e-tenders and ongoing projects in Indonesia`} /></p>
                                            </div>
                                            <div>
                                                <img src={IconBanner3_4} alt="" className='w-100' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6 wow fadeInUp' data-wow-delay="0.4s">
                                        <div className='aling-items-center d-flex'>
                                            <p className='objective-business-desk-number'>5</p>
                                            <p className='objective-business-desk-title'><Translate title={`Other`} /></p>
                                        </div>
                                        <div className='objective-business-desk-content'>
                                            <div>
                                                <p className='text-black'><Translate title={`As a source of information about green hydrogen accurately and reliably`} /></p>
                                            </div>
                                            <div>
                                                <img src={IconBanner3_5} alt="" className='w-100' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    } else if (item.order == '7') {
                        htmlContent.push(

                            <div className='gradient-background-color' style={{ height: '400px' }}>
                                <div className='d-flex gap-0 h-100 overflow-hidden'>
                                    <div className='align-items-center col-12 col-sm-6 d-none d-sm-flex'>
                                        <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='h-100 w-100' />
                                    </div>
                                    <div className='col-12 col-sm-6 d-flex flex-column justify-content-center p-3 p-lg-5' style={{ maxWidth: '550px' }}>
                                        <div>
                                            <p className='fw-bold pb-3 text-size-10 text-size-lg-15 text-white'>{item?.content?.right_title_1}</p>
                                            <p className='fw-bold text-size-6 text-size-lg-8 text-white'>{item?.content?.right_title_2}</p>
                                            <p dangerouslySetInnerHTML={{__html: item?.content?.right_description_1}}></p>
                                        </div>
                                        <div>
                                            <div className="button-our-activity mt-5">
                                                <div className='container'>
                                                    <a href={item?.content?.right_button_link_1}>{item?.content?.right_button_1}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                });
            }

            this.setState({ htmlContent: htmlContent });
        });
    }

    render() {
        return (
            <>
                {this.state.htmlContent}

                <LatestNews />
            </>
        )
    }
}

export default IntroductionObjectives
