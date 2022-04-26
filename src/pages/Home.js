import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LatestNews from '../component/LatestNews';
import LatestPublicationItem from '../component/LatestPublicationItem';
import { ConfigAPI, IsJsonString, StorageURL, Translate } from '../component/helper';

import axios from 'axios';
import i18next from 'i18next';
import moment from 'moment';

export class Home extends Component {
    state = {
        htmlContent: [],
        htmlContentEmbedSosmed: [],
        htmlContentPublication: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 1 : 2}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];
            let htmlContentEmbedSosmed = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className="fluid-section-one" style={{ background: `url('${StorageURL(item?.content?.Background_Home_1_picture_1)}') no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="container-width h-100">
                                    <div className='social-media'>
                                        <ul>
                                            <li><Link to={'/'}><span className="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/'}><span className="fab fa-twitter"></span></Link></li>
                                            <li><a href={'https://www.instagram.com/p/Ccby7N3pZB_/?utm_source=ig_web_button_share_sheet'} target={'_blank'}><span className="fab fa-instagram"></span></a></li>
                                            <li><Link to={'/'}><span className="fab fa-youtube"></span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="banner-height outer-box clearfix">
                                        <div className="content-column left-side">
                                            <div className="border-0 inner-column right-side">
                                                <div>
                                                    <p className='fw-bold text-center text-lg-start text-size-10 text-size-lg-15'>{item?.content?.left_title_1}</p>
                                                    <p className='fw-bold primary-color text-center text-lg-start text-size-20 text-size-lg-25'>{item?.content?.left_title_2}</p>
                                                    <p className='text-center text-lg-start' dangerouslySetInnerHTML={{ __html: item?.content?.left_description_1 }}></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-column right-side">
                                            <div className="inner-column right-side">
                                                <div className='text-center text-lg-start'>
                                                    <p className='fw-bold text-center text-lg-start text-size-10 text-size-lg-15'>{item?.content?.right_title_1}</p>
                                                    <p className='fw-bold primary-color text-center text-lg-start text-size-10 text-size-lg-15'>{item?.content?.right_title_2}</p>
                                                    <p className='text-center text-lg-start' dangerouslySetInnerHTML={{ __html: item?.content?.right_description_1 }}></p>

                                                    <div className="button-involved cursor-pointer mt-3">
                                                        <Link to={`${item?.content?.right_button_link_1}`} className='container text-white'>
                                                            {item?.content?.right_button_1}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '1') {
                        htmlContent.push(
                            <div key={index} className="about-section px-20">
                                <div className="container-width">
                                    <div className="align-items-center d-flex flex-wrap flex-row-reverse flex-lg-row justify-content-center">
                                        <div className="content-column col-12 col-lg-6 pe-lg-5 wow fadeInLeft" data-wow-delay="0.4s">
                                            <div className="inner-column">
                                                <div className="sec-title text-black">
                                                    <p className='fw-bold text-black text-size-15 text-size-lg-20'>{item?.content?.left_title_1}</p>
                                                    <p className='fw-bold text-black text-size-6 text-size-lg-8'>{item?.content?.left_title_2}</p>
                                                    <p className='text-black' dangerouslySetInnerHTML={{ __html: item?.content?.left_description_1 }}></p>
                                                </div>
                                                <div className="button-involved cursor-pointer">
                                                    <Link to={`${item?.content?.right_button_link_1}`} className='container text-white'>
                                                        {item?.content?.left_button_1}
                                                    </Link>
                                                </div>
                                                <p className='m-0'></p>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-6 text-center">
                                            <img src={StorageURL(item.content?.right_picture_1)} alt="" className='wow fadeInRight w-100' data-wow-delay="0.4s" style={{ maxWidth: '500px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (item.order == '2') {
                        htmlContent.push(
                            <div key={index} className='container-width d-flex flex-wrap py-5 px-20'>
                                <div className='col-12 col-lg-6 d-flex flex-column justify-content-center pb-2 pb-lg-0 pe-lg-2 wow fadeInLeft' data-wow-delay="0.4s">
                                    <img src={StorageURL(item.content?.left_picture_1)} alt="" className='mb-2 w-50' />
                                    <p className='pb-3 fw-bold text-black'>{item?.content?.left_title_1}</p>
                                    <p className='pb-2 text-black text-size-1 text-size-lg-2'>{item?.content?.left_title_2}</p>
                                    <p key={index} className='text-black text-size-1 text-size-lg-2' dangerouslySetInnerHTML={{ __html: item?.content?.left_description_1 }}></p>
                                </div>
                                <div className='align-items-center banner-container-image col-12 col-lg-6 d-flex justify-content-center ps-lg-2 pt-2 pt-lg-0 wow fadeInRight'>
                                    <iframe src={item?.content?.right_video_link_1} height={400} className="w-100" frameBorder="0"></iframe>
                                </div>
                            </div>
                        )
                    } else if (item.order == '3') {
                        htmlContent.push(
                            <div key={index} className='position-relative px-20' style={{ background: `url('${StorageURL(item?.content?.background_home_hijau_picture_1)}') no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='container-width d-flex gap-5'>
                                    <div className='col-6 d-lg-block d-none py-5 text-center'>
                                        <img className='h-100' src={StorageURL(item?.content?.left_picture_1)} />
                                    </div>
                                    <div className='container-width col-12 col-lg-6 py-5 text-center text-lg-start'>
                                        <p className='fw-bold pb-4 text-size-15 text-size-lg-20'>{item?.content?.right_title_1}</p>
                                        <p className='text-size-6 text-size-lg-8' dangerouslySetInnerHTML={{ __html: item?.content?.right_description_1 }}></p>
                                        <div className="button-our-activity cursor-pointer mt-4 text-black">
                                            <Link to={`${item?.content?.right_button_link_1}`} className='container'>
                                                {item?.content?.right_button_1}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (item.order == '6') {
                        htmlContentEmbedSosmed.push(
                            <React.Fragment key={index}>
                                <div dangerouslySetInnerHTML={{ __html: item?.content?.social_media_link_1 }}></div>
                                <div dangerouslySetInnerHTML={{ __html: item?.content?.social_media_link_2 }}></div>
                            </React.Fragment>
                        );
                    }
                });
            }

            this.setState({ htmlContent: htmlContent, htmlContentEmbedSosmed: htmlContentEmbedSosmed });
        });

        axios.get('https://admin.greenhydrogen.my.id/api/publication/latest', ConfigAPI()).then(response => {
            let data = response.data.data.documents;

            let htmlContentPublication = [];

            if (data) {
                data.map((item, index) => {
                    let category = IsJsonString(item.category.name) ? JSON.parse(item.category.name).filter(data => data.language === i18next.language)[0].name : item.category.name;
                    let description = IsJsonString(item.description) ? JSON.parse(item.description).filter(data => data.language === i18next.language)[0].description : item.description;
                    let title = IsJsonString(item.title) ? JSON.parse(item.title).filter(data => data.language === i18next.language)[0].title : item.title;

                    htmlContentPublication.push(
                        <LatestPublicationItem key={index} category={category} date={moment(item?.created_at).format('DD MMM YYYY')} description={description} documents={StorageURL(item?.documents.replaceAll('["', '').replaceAll('"]', ''))} image={StorageURL(item?.cover.replaceAll('["', '').replaceAll('"]', ''))} title={title} />
                    );
                });
            }

            this.setState({ htmlContentPublication: htmlContentPublication });
        });
    }

    render() {
        require('../css/home.css');

        return (
            <>
                {this.state.htmlContent}

                <div className="pricing-section-two home-latest-publication-background px-20">
                    <div className="container-width">
                        <div className="sec-title style-two light text-center">
                            <p className="fw-bold text-size-lg-5 m-0 secondary-color"><Translate title={`See Our Publication`} /></p>
                            <h2 className='text-black'><Translate title={`Latest Publication`} /></h2>
                        </div>
                        <div className='row justify-content-center justify-content-sm-start row-y px-20'>
                            {this.state.htmlContentPublication}
                        </div>
                    </div>
                </div>
                {/* End Pricing Section */}

                <LatestNews />

                <div className='banner-container container-width d-flex fw-bold gap-3 justify-content-center'>
                    {this.state.htmlContentEmbedSosmed}
                </div>
            </>
        )
    }
}

export default Home
