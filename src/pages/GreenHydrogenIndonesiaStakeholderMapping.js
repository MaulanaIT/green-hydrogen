import React, { Component } from 'react'

import LatestNews from '../component/LatestNews';
import Sidebar from '../component/Sidebar';
import { ConfigAPI, StorageURL } from '../component/helper';
import i18next from 'i18next';
import axios from 'axios';
import { Link } from 'react-router-dom';


export class GreenHydrogenIndonesiaStakeholderMapping extends Component {

    state = {
        htmlContent: [],
        htmlContentArticle: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 27 : 28}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];
            let htmlContentArticle = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className="fluid-section-one" style={{ background: `url(${StorageURL(item?.content?.background_stakeholder_picture_1)}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='container-width h-100'>
                                    <div className="outer-box clearfix">
                                        {/*  Content Column */}
                                        <div className="content-column">
                                            <div className="inner-column">
                                                <div>
                                                    <p className='fw-bold primary-color text-center text-lg-start text-size-10 text-size-lg-15' dangerouslySetInnerHTML={{ __html: item?.content?.left_title_1 }}></p>
                                                    <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25' dangerouslySetInnerHTML={{ __html: item?.content?.left_title_2 }}></p>
                                                    <p className='text-center text-lg-start' dangerouslySetInnerHTML={{ __html: item?.content?.left_description_1 }}></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Content Column */}
                                        <div className="content-column d-none d-lg-flex ps-lg-5">
                                            <div className="inner-column">
                                                <div>
                                                    <img src={StorageURL(item?.content?.right_picture_1)} alt="" className='h-100 mw-100' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '1') {
                        htmlContentArticle.push(
                            <React.Fragment key={index}>
                                <div className='container-article-section'>
                                    <div className='banner-container-image landscape'>
                                        <img src={StorageURL(item?.content?.middle_picture_1)} alt="" className='w-100' />
                                    </div>
                                </div>
                                <div key={index} className='container-article-section px-20'>
                                    <p className='text-black' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_1 }}></p>
                                </div>
                            </React.Fragment>
                        )
                    } else if (item.order == '2') {
                        htmlContentArticle.push(
                            <div key={index} className='d-flex gap-3'>
                                <Link to={`${item?.content?.left_button_link_1}`} className='button-tag'>{item?.content?.left_button_1}</Link>
                                <Link to={`${item?.content?.left_button_link_1}`} className='button-tag'>{item?.content?.left_button_2}</Link>
                            </div>
                        )
                    }
                });
            }

            this.setState({ htmlContent: htmlContent, htmlContentArticle: htmlContentArticle });
        });
    }

    render() {
        return (
            <>
                {this.state.htmlContent}
                <div className='container-article container-width'>
                    <Sidebar />
                    <div className='col-12 col-lg ps-lg-3'>
                        {this.state.htmlContentArticle}
                    </div>
                </div>

                <LatestNews />
            </>
        )
    }
}

export default GreenHydrogenIndonesiaStakeholderMapping
