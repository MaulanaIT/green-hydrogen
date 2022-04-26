import React, { Component } from 'react'

import LatestNews from '../component/LatestNews';
import Sidebar from '../component/Sidebar';
import { ConfigAPI, StorageURL } from '../component/helper';
import i18next from 'i18next';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class GreenHydrogenProduction extends Component {

    state = {
        htmlContent: [],
        htmlContentArticle: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 15 : 16}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];
            let htmlContentArticle = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '4') {
                        htmlContent.push(
                            <div key={index} className="fluid-section-one" style={{ backgroundImage: 'url(' + StorageURL(item?.content?.background_production_picture_1) + ')' }}>
                                <div className='container-width h-100'>
                                    <div className="outer-box clearfix">
                                        <div className="content-column">
                                            <div className="inner-column">
                                                <div>
                                                    <p className='fw-bold primary-color text-center text-lg-start text-size-10 text-size-lg-15'>{item?.content?.left_title_1}</p>
                                                    <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'>{item?.content?.left_title_2}</p>
                                                    <p className='text-center text-lg-start' dangerouslySetInnerHTML={{ __html: item?.content?.left_description_1 }}></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '5') {
                        htmlContentArticle.push(
                            <div key={index} className='container-article-section container-article-section-flex ga-4'>
                                <div className='banner-container-image col-12 col-lg-6'>
                                    <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='w-100' />
                                </div>
                                <div className='col d-flex flex-column justify-content-center py-3 px-20'>
                                    <p className='fw-bold m-0 text-black text-start text-size-lg-8 text-size-6'>{item?.content?.right_title_1}</p>
                                    <p className='text-black' dangerouslySetInnerHTML={{ __html: item?.content?.right_description_1 }}></p>
                                </div>
                            </div>
                        )
                    } else if (item.order == '6') {
                        htmlContentArticle.push(
                            <React.Fragment key={index}>
                                <div className='container-article-section'>
                                    <div className='banner-container-image landscape'>
                                        <img src={StorageURL(item?.content?.middle_picture_1)} alt="" className='w-100' />
                                    </div>
                                    <p className='text-black px-20' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_2 }}></p>
                                </div>

                                <div className='container-article-section'>
                                    <div className='banner-container-image portrait'>
                                        <img src={StorageURL(item?.content?.middle_picture_2)} alt="" className='w-100' />
                                    </div>
                                    <div className='px-20'>
                                        <div className='text-black' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_3 }}></div>
                                    </div>
                                </div>

                                <div className='container-article-section'>
                                    <div className='banner-container-image port'>
                                        <img src={StorageURL(item?.content?.middle_picture_3)} alt="" className='w-100' />
                                    </div>
                                </div>

                                <div className='container-article-section'>
                                    <div className='banner-container-image landscape'>
                                        <img src={StorageURL(item?.content?.middle_picture_4)} alt="" className='w-100' />
                                    </div>
                                    <p className='fw-bold text-black px-20' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_4 }}></p>
                                </div>

                                <div className='container-article-section'>
                                    <div className='banner-container-image landscape'>
                                        <img src={StorageURL(item?.content?.middle_picture_5)} alt="" className='w-100' />
                                    </div>
                                    <p className='text-black px-20' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_5 }}></p>
                                </div>
                            </React.Fragment>
                        )
                    } else if (item.order == '7') {
                        htmlContentArticle.push(
                            <div key={index} className='d-flex gap-3'>
                                <Link to={`${item?.content?.left_button_link_1}`} className='button-tag'>{item?.content?.left_button_1}</Link>
                                <Link to={`${item?.content?.left_button_link_1}`} className='button-tag'>{item?.content?.left_button_2}</Link>
                                <Link to={`${item?.content?.left_button_link_1}`} className='button-tag'>{item?.content?.left_button_3}</Link>
                            </div>
                        );
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

export default GreenHydrogenProduction
