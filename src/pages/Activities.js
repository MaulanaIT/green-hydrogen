import axios from 'axios';
import React, { Component } from 'react'

import { ConfigAPI, StorageURL, Translate } from '../component/helper';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import Logo from '../assets/logo.png';
import i18next from 'i18next';

export class Activities extends Component {

    state = {
        dataActivity: [],

        htmlContent: [],
        htmlContentActivity: [],
        htmlContentCategory: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 43 : 44}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className='fluid-section-two position-relative' style={{ background: `url(${StorageURL(item?.content?.background_activity_picture_1)}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='align-items-center container-width d-flex flex-wrap justify-content-center h-100 px-20'>
                                    <div className='col-12 col-md-6 text-center text-lg-start'>
                                        <p className='fw-bold text-size-6 text-size-lg-8'><Translate title={`ABOUT US`} /></p>
                                        <p className='text-size-3 text-size-lg-4'><Translate title={`About Us | Our Activities`} /></p>
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

        axios.get('https://admin.greenhydrogen.my.id/api/activity', ConfigAPI()).then(response => {
            let data = response.data.data.activities;

            let dataCategory = [];

            let htmlContentActivity = [];
            let htmlContentCategory = [];

            if (data) {
                data.map((item, index) => {
                    if (dataCategory.findIndex(item => item === item?.category?.translation?.name) < 0) {
                        dataCategory.push(item?.category?.translation?.name);
                    }

                    htmlContentActivity.push(
                        <div key={index} className='col-12 col-lg-6 m-0 pb-2 pb-lg-0 wow fadeInUp' data-wow-delay={`${0.2 * (index + 1)}s`}>
                            <div className='align-item-center d-flex justify-content-center mx-auto overflow-hidden' style={{ height: '300px' }}>
                                <img src={StorageURL(item?.embed)} alt="" style={{ minHeight: '100%', minWidth: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className='bg-white p-3'>
                                <p className='fw-bold text-black text-center'>{item?.category?.translation?.name}</p>
                                <p className='border-bottom fw-bold pb-3 text-black text-center text-size-4 text-size-lg-5'>{item?.translation?.title}</p>
                                <p className='pt-3 text-black text-clamp' style={{ "--line-clamp": 5 }} dangerouslySetInnerHTML={{ __html: item?.translation?.description }}></p>
                            </div>
                        </div>
                    );
                });
            }

            dataCategory.map((item, index) => {
                htmlContentCategory.push(
                    <div key={index} className='col-6 col-lg-auto m-0 pb-2 pb-lg-0'>
                        <button type='button' className='button-filter bg-light py-1 px-4 text-secondary w-100' onClick={(event) => this.SelectCategory(item, event)}>{item}</button>
                    </div>
                );
            });

            this.setState({ dataActivity: data, htmlContentActivity: htmlContentActivity, htmlContentCategory: htmlContentCategory });
        });
    }

    SelectCategory = (filter, event) => {
        let data = this.state.dataActivity;

        let htmlContentActivity = [];

        if (data) {
            data.map((item, index) => {
                if (item?.category?.translation?.name?.includes(filter)) {
                    htmlContentActivity.push(
                        <div key={index} className='col-12 col-lg-6 m-0 pb-2 pb-lg-0 wow fadeInUp' data-wow-delay={`${0.2 * (index + 1)}s`}>
                            <div className='align-item-center d-flex justify-content-center mx-auto overflow-hidden' style={{ height: '300px' }}>
                                <img src={StorageURL(item?.embed)} alt="" style={{ minHeight: '100%', minWidth: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className='bg-white p-3'>
                                <p className='fw-bold text-black text-center'>{item?.category?.translation?.name}</p>
                                <p className='border-bottom fw-bold pb-3 text-black text-center text-size-4 text-size-lg-5'>{item?.translation?.title}</p>
                                <p className='pt-3 text-black text-clamp' style={{ "--line-clamp": 5 }} dangerouslySetInnerHTML={{ __html: item?.translation?.description }}></p>
                            </div>
                        </div>
                    );
                }
            });
        }

        let buttonFilter = document.querySelectorAll('.button-filter');

        buttonFilter.forEach(item => {
            if (item != event.currentTarget) {
                item.classList.remove('gradient-background-color', 'text-white');
                item.classList.add('bg-light', 'text-secondary');
            } else {
                item.classList.add('gradient-background-color', 'text-white');
                item.classList.remove('bg-light', 'text-secondary');
            }
        });

        this.setState({ htmlContentActivity: htmlContentActivity })
    }

    render() {
        return (
            <>
                {this.state.htmlContent}

                <div className='container-width'>
                    <div className='align-items-center row gx-lg-2 justify-content-lg-center mx-auto py-5' style={{ borderRadius: '12px', maxWidth: '800px' }}>
                        <div className='col-6 col-lg-auto m-0 pb-2 pb-lg-0'>
                            <button type='button' className='button-filter gradient-background-color py-1 px-4 text-white w-100' onClick={(event) => this.SelectCategory('', event)}><Translate title={`Show All`} /></button>
                        </div>
                        {this.state.htmlContentCategory}
                    </div>
                    <div className='align-items-center row gx-lg-4 justify-content-center mx-auto py-3'>
                        {this.state.htmlContentActivity}
                    </div>
                </div>
            </>
        )
    }
}

export default Activities
