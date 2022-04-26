import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa';

import LatestNews from '../component/LatestNews';

import { ConfigAPI, StorageURL, Translate } from '../component/helper';

import i18next from 'i18next';
import axios from 'axios';

export class OurPartners extends Component {

    state = {
        data: [],

        htmlContent: [],
        htmlContentPartner: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 41 : 42}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];
            let htmlContentPartner = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className='fluid-section-two position-relative' style={{ background: `url(${StorageURL(item?.content?.background_ourpartner_picture_1)}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='align-items-lg-start align-items-center container-width d-flex flex-column justify-content-center h-100 px-20'>
                                    <p className='fw-bold text-center text-size-6 text-size-lg-8'>{item?.content?.left_title_1}</p>
                                    <p className='text-center text-size-3 text-size-lg-4'>{item?.content?.left_description_1}</p>
                                    <div className='main-search'>
                                        <div className='icon-input-field-search' >
                                            <FaSearch />
                                        </div>
                                        <input type="text" name='input-search' id='input-search' className='py-2 text-white' placeholder='Search' onChange={this.Filter} />
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '1') {
                        htmlContentPartner.push(
                            <div key={index} className='py-5'>
                                <div className='align-items-start container-width d-flex justify-content-between px-20'>
                                    <div className='col-12 col-lg-4 me-lg-5'>
                                        <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='w-100' />
                                    </div>
                                    <div className='col-12 col-lg-7'>
                                        <p className='fw-bold mb-2 text-black text-size-5 text-size-lg-6'>{item?.content?.right_title_1}</p>
                                        <p className='text-justify text-black text-size-2 text-size-lg-3'>{item?.content?.right_description_1}</p>
                                        <div className='cursor-pointer d-flex justify-content-start mt-3' onClick={() => this.ReadMore(item?.content?.right_button_link_1)}>
                                            <div className='button-read-story'><Translate title={`Read More`} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '2') {
                        htmlContentPartner.push(
                            <div key={index} className='py-5'>
                                <div className='align-items-start container-width d-flex justify-content-between px-20'>
                                    <div className='col-12 col-lg-4 me-lg-5'>
                                        <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='w-100' />
                                    </div>
                                    <div className='col-12 col-lg-7'>
                                        <p className='fw-bold mb-2 text-black text-size-5 text-size-lg-6'>{item?.content?.right_title_1}</p>
                                        <p className='fw-bold mb-2 text-black text-size-5 text-size-lg-6'>{item?.content?.right_title_2}</p>
                                        <p className='text-black text-justify text-size-2 text-size-lg-3'>{item?.content?.right_description_1}</p>
                                        <div className='cursor-pointer d-flex justify-content-start mt-3' onClick={() => this.ReadMore(item?.content?.right_button_link_1)}>
                                            <div className='button-read-story'><Translate title={`Read More`} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (item.order == '3') {
                        htmlContentPartner.push(
                            <div key={index} className='py-5'>
                                <div className='align-items-start container-width d-flex justify-content-between px-20'>
                                    <div className='col-12 col-lg-4 me-lg-5'>
                                        <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='w-100' />
                                    </div>
                                    <div className='col-12 col-lg-7'>
                                        <p className='fw-bold mb-2 text-black text-size-5 text-size-lg-6'>{item?.content?.right_title_1}</p>
                                        <p className='text-black text-justify text-size-2 text-size-lg-3'>{item?.content?.right_description_1}</p>
                                        <div className='cursor-pointer d-flex justify-content-start mt-3' onClick={() => this.ReadMore(item?.content?.right_button_link_1)}>
                                            <div className='button-read-story'><Translate title={`Read More`} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                });
            }

            this.setState({ data: data, htmlContent: htmlContent, htmlContentPartner: htmlContentPartner });
        });
    }
    Filter = (event) => {
        let data = this.state.data;

        let htmlContentPartner = [];

        if (data) {
            data.map((item, index) => {
                if (item?.content?.right_title_1?.includes(event.target.value) ||
                    item?.content?.right_title_2?.includes(event.target.value) ||
                    item?.content?.right_description_1?.includes(event.target.value))
                    if (item.order == '1') {
                        htmlContentPartner.push(
                            <div key={index} className='py-5'>
                                <div className='align-items-start container-width d-flex justify-content-between px-20'>
                                    <div className='col-12 col-lg-4 me-lg-5'>
                                        <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='w-100' />
                                    </div>
                                    <div className='col-12 col-lg-7'>
                                        <p className='fw-bold mb-2 text-black text-size-5 text-size-lg-6'>{item?.content?.right_title_1}</p>
                                        <p className='text-justify text-black text-clamp text-size-2 text-size-lg-3'>{item?.content?.right_description_1}</p>
                                        <div className='cursor-pointer d-flex justify-content-start mt-3' onClick={() => this.ReadMore(item?.content?.right_button_link_1)}>
                                            <div className='button-read-story'><Translate title={`Read More`} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '2') {
                        htmlContentPartner.push(
                            <div key={index} className='py-5'>
                                <div className='align-items-start container-width d-flex justify-content-between px-20'>
                                    <div className='col-12 col-lg-4 me-lg-5'>
                                        <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='w-100' />
                                    </div>
                                    <div className='col-12 col-lg-7'>
                                        <p className='fw-bold mb-2 text-black text-size-5 text-size-lg-6'>{item?.content?.right_title_1}</p>
                                        <p className='fw-bold mb-2 text-black text-size-5 text-size-lg-6'>{item?.content?.right_title_2}</p>
                                        <p className='text-black text-clamp text-justify text-size-2 text-size-lg-3'>{item?.content?.right_description_1}</p>
                                        <div className='cursor-pointer d-flex justify-content-start mt-3' onClick={() => this.ReadMore(item?.content?.right_button_link_1)}>
                                            <div className='button-read-story'><Translate title={`Read More`} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (item.order == '3') {
                        htmlContentPartner.push(
                            <div key={index} className='py-5'>
                                <div className='align-items-start container-width d-flex justify-content-between px-20'>
                                    <div className='col-12 col-lg-4 me-lg-5'>
                                        <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='w-100' />
                                    </div>
                                    <div className='col-12 col-lg-7'>
                                        <p className='fw-bold mb-2 text-black text-size-5 text-size-lg-6'>{item?.content?.right_title_1}</p>
                                        <p className='text-black text-clamp text-justify text-size-2 text-size-lg-3'>{item?.content?.right_description_1}</p>
                                        <div className='cursor-pointer d-flex justify-content-start mt-3' onClick={() => this.ReadMore(item?.content?.right_button_link_1)}>
                                            <div className='button-read-story'><Translate title={`Read More`} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
            });
        }

        this.setState({ htmlContentPartner: htmlContentPartner });
    }

    ReadMore = (link) => {
        window.open(link, "_blank");
    }

    render() {
        return (
            <>
                {this.state.htmlContent}
                {this.state.htmlContentPartner}

                <LatestNews />
            </>
        )
    }
}

export default OurPartners