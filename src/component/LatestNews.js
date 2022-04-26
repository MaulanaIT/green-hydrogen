import React, { Component } from 'react'

import { ConfigAPI, StorageURL, Translate } from './helper';

import News1 from '../assets/latest-news.png';

import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

export class LatestNews extends Component {

    state = {
        htmlContent: []
    }

    componentDidMount() {
        axios('https://admin.greenhydrogen.my.id/api/news/home', ConfigAPI()).then(response => {
            let data = response.data.data.latests;

            if (data.length > 0) {
                let htmlContent = [];

                data.map((item, index) => {
                    htmlContent.push(
                        <div key={index} className="col-12 col-sm-6 news-block col-md-4 wow fadeInUp" data-wow-delay={`${(index + 1) * 0.2}s`}>
                            <div className="inner-box" data-category={item?.category?.translation?.name}>
                                <div className="container-image image-box" style={{ height: 228 }} >
                                    <figure className="image"><Link to={`/news-event/news/${item?.translation?.title}`} state={{ data: item }} className='h-100 w-100'><img src={`${StorageURL(item?.embed)}`} alt="" style={{ minHeight: '100%', minWidth: '100%', objectFit: 'cover' }} /></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><div className='text-size-2 text-size-lg-3'>{moment(item?.created_at).format('MMMM DD, YYYY')}</div></li>
                                        {/* <li><div className='text-size-2 text-size-lg-3'>{item.translation?.title}</div></li> */}
                                    </ul>
                                    <h3><Link to={`/news-event/news/${item?.translation?.title}`} state={{ data: item }} className='d-unset fw-bold hover-text-button text-clamp text-size-5 text-size-lg-6'>{item?.translation?.title}</Link></h3>
                                    <div className="align-items-center author-info d-flex text-secondary"><span className="icon icon_profile"></span>{item?.admin?.name}</div>
                                </div>
                            </div>
                        </div>
                    )
                });

                this.setState({ htmlContent: htmlContent });
            }
        });
    }

    render() {
        return (
            <>
                {/*  News Section */}
                <div className="news-section home-latest-news-background px-20">
                    <div className="container-width">
                        <div className="sec-title style-two light text-center">
                            <p className="fw-bold text-size-lg-5 m-0 secondary-color"><Translate title={`See Our Story`} /></p>
                            <h2 className='text-black'><Translate title={`Latest News`} /></h2>
                        </div>

                        <div className="align-items-stretch row">
                            {this.state.htmlContent}
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Link to={'/news-event/news'} className='button-read-story'><Translate title={`Read All Story`} /></Link>
                        </div>
                    </div>
                </div>
                {/* End News Section */}
            </>
        )
    }
}

export default LatestNews
