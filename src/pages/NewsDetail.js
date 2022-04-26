import React, { Component, useEffect } from 'react'
import { FaRegCalendar, FaUserCircle } from 'react-icons/fa';

import LatestNews from '../component/LatestNews';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';

import { ConfigAPI, StorageURL, Translate } from '../component/helper';

import moment from 'moment';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import LatestPost from '../component/LatestPost';
import i18next from 'i18next';

function NewsDetail() {
    const location = useLocation();

    useEffect(() => {
        console.log(location)
    }, []);

    return (
        <WrappedNewsDetail detail={location.state.data ? location.state.data : location} />
    )
}

export default NewsDetail

class WrappedNewsDetail extends Component {

    state = {
        detailData: [],

        htmlContent: [],
        htmlCategoryPost: [],
        htmlContentLatestPost: [],
        htmlContentSidebarTop: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 33 : 34}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className='fluid-section-two position-relative' style={{ background: `url(${StorageURL(item?.content?.background_news_picture_1)}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='align-items-center container-width d-flex flex-wrap justify-content-center h-100 px-20'>
                                    <div className='col-12 col-md-6 text-center text-lg-start'>
                                        <p className='fw-bold text-size-6 text-size-lg-8'><Translate title={`NEWS & EVENT`} /></p>
                                        <p className='text-size-3 text-size-lg-4'><Translate title={`News & Event | News`} /></p>
                                    </div>
                                    <div className='col-12 col-md-6 mt-0 text-center text-lg-end'>
                                        <p className='text-size-3 text-size-lg-4'><Translate title={`Hydrogen Indonesia`} /></p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                });
            }

            this.setState({ htmlContent: htmlContent });
        });

        axios.get('https://admin.greenhydrogen.my.id/api/news/home', ConfigAPI()).then(response => {
            let dataCategories = response.data.data.categories;
            let dataLatests = response.data.data.latests;
            let dataSidebarTop = response.data.data.sidebar_up;

            let htmlCategoryPost = [];
            let htmlContentLatestPost = [];
            let htmlContentSidebarTop = [];


            if (dataLatests.length > 0) {
                dataLatests.map((item, index) => {
                    htmlContentLatestPost.push(
                        <React.Fragment key={index}>
                            <div key={index} className='align-items-center bg-white d-flex flex-wrap justify-content-center mb-4' style={{ borderRadius: 12 }}>
                                <div className='col-12 col-lg-4 container-image overflow-hidden pe-lg-2' style={{ borderRadius: 12, height: 128 }}>
                                    <img src={StorageURL(item.embed)} alt="" />
                                </div>
                                <div className='d-flex flex-column justify-content-center col-12 col-lg-8 p-2'>
                                    <div onClick={() => this.SelectNews(item)} className='cursor-pointer fw-bold pb-2 hover-text-button text-clamp text-size-3 text-size-lg-4'>{item?.translation?.title}</div>
                                    <p className='align-items-center d-flex text-secondary text-size-1 text-size-lg-2'><FaRegCalendar className='me-2' /> {moment(item.created_at).format('MMMM DD, YYYY')}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                });
            }

            if (dataCategories.length > 0) {
                dataCategories.map((item, index) => {
                    htmlCategoryPost.push(
                        <div key={index} className='col-6 col-md-auto p-2'>
                            <div className='bg-light px-5 py-2' style={{ borderRadius: '8px' }}>
                                <p className='fw-bold text-black text-size-3 text-size-lg-3'>{item.translation?.name}</p>
                            </div>
                        </div>
                    );
                });
            }

            if (dataSidebarTop.length > 0) {
                htmlContentSidebarTop.push(
                    <div className='bg-white' style={{ borderRadius: 12 }}>
                        <div className='container-image image-news overflow-hidden' style={{ borderRadius: 12 }}>
                            <img src={StorageURL(dataSidebarTop[0]?.embed)} alt="" />
                        </div>
                        <div className='px-3'>
                            <p className='align-items-center d-flex py-3 text-black'><FaRegCalendar className='me-2' /> {moment(dataSidebarTop[0]?.created_at).format('MMMM DD, YYYY')}</p>
                            <Link to={`/news-event/news/detail`} state={{ data: dataSidebarTop[0] }} className='fw-bold hover-text-button text-clamp text-size-5 text-size-lg-6'>{dataSidebarTop[0]?.translation?.title}</Link>
                            <p className='my-2 text-clamp text-secondary' dangerouslySetInnerHTML={{ __html: dataSidebarTop[0]?.translation?.description }}></p>
                            <p className='align-items-center d-flex py-3 text-black'><FaUserCircle className='text-size-10 text-size-lg-10 me-2' /> {dataSidebarTop[0]?.admin?.name}</p>
                        </div>
                    </div>
                );
            }

            this.setState({ detailData: this.props.detail, htmlCategoryPost: htmlCategoryPost, htmlContentLatestPost: htmlContentLatestPost, htmlContentSidebarTop: htmlContentSidebarTop });
        });
    }

    SelectNews = (data) => {
        this.setState({ detailData: data });
    }

    render() {
        return (
            <>
                {this.state.htmlContent}

                <div className='container-width d-flex flex-wrap px-20 py-2 py-md-5'>
                    <div className='col-12 col-md-8 d-flex flex-column justify-content-between pb-2 pb-md-0 pe-md-3' id='post'>
                        <div className='bg-white mb-2 mb-lg-4' data-wow-delay="0.4s" style={{ borderRadius: '12px' }}>
                            <div className='news-image wow fadeInUp' data-category={this.state.detailData?.category?.translation?.name}>
                                <img src={StorageURL(this.state.detailData?.embed)} alt="" className='w-100' />
                            </div>
                            <div className='p-3 wow fadeInUp'>
                                <p className='align-items-center d-flex py-2 text-black text-size-3 text-size-lg-3'><FaRegCalendar className='me-2' /> {moment(this.state.detailData?.date).format('MMMM DD, YYYY')}</p>
                                <p className='fw-bold text-black text-size-6 text-size-lg-8'>{this.state.detailData?.title}</p>
                                <p className='my-2 text-secondary' dangerouslySetInnerHTML={{ __html: this.state.detailData?.translation?.description?.replaceAll('p><p', 'p><br/><p') }}></p>
                                <p className='align-items-center d-flex py-2 text-black'><FaUserCircle className='text-size-10 text-size-lg-10 me-2' /> {this.state.detailData?.admin?.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 pt-2 pt-md-0 ps-md-3'>
                        <div className='border-bottom mb-4'>
                            {this.state.htmlContentSidebarTop}
                        </div>
                        <div className='pb-4'>
                            <p className='fw-bold pb-2 text-black text-size-5 text-size-lg-5'><Translate title={`Latest Post`} /></p>
                            {this.state.htmlContentLatestPost}
                        </div>
                        <div className='pb-4'>
                            <p className='fw-bold pb-4 text-black text-center text-lg-start text-size-5 text-size-lg-5'><Translate title={`Categories`} /></p>
                            <div className='align-items-center d-flex flex-wrap'>
                                {this.state.htmlCategoryPost}
                            </div>
                        </div>
                    </div>
                </div>

                <LatestNews />
            </>
        );
    }
}