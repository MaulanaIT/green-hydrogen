import axios from 'axios';
import React, { Component } from 'react'
import { FaCalendar, FaLongArrowAltLeft, FaLongArrowAltRight, FaSearch } from 'react-icons/fa';

import { ConfigAPI, IsJsonString, StorageURL, Translate } from '../component/helper';

import LatestNews from '../component/LatestNews';
import LatestPublicationItem from '../component/LatestPublicationItem';

import moment from 'moment';
import i18next from 'i18next';

export class Publications extends Component {

    state = {
        dataPublication: [],
        dataPublicationNonFilter: [],
        dataPublicationVideoNonFilter: [],

        htmlContent: [],
        htmlContentPublication: [],
        htmlContentPublicationVideo: [],
        htmlContentListPagination: [],

        currentPage: 1,
        contentPerPage: 5
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 7 : 8}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className='fluid-section-two position-relative' style={{ background: `url(${StorageURL(item?.content?.background_publication_picture_1)}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='align-items-lg-start align-items-center container-width d-flex flex-column justify-content-center h-100 position-relative px-20'>
                                    <p className='fw-bold text-center text-size-6 text-size-lg-8'><Translate title={`PUBLICATION`} /></p>
                                    <p className='text-center text-size-3 text-size-lg-4'><Translate title={`Video & Documentation`} /></p>
                                    <div className='main-search'>
                                        <div className='icon-input-field-search' >
                                            <FaSearch />
                                        </div>
                                        <input type="text" name='input-search' id='input-search' className='py-2 text-white' placeholder='Search' onChange={this.FilterVideo} />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                });
            }

            this.setState({ htmlContent: htmlContent });
        });

        axios.get('https://admin.greenhydrogen.my.id/api/publication', ConfigAPI()).then(response => {
            let data = response.data.data.documents;

            let htmlContentPublication = [];
            let htmlContentListPagination = [];

            let totalPage = Math.ceil(data.length / this.state.contentPerPage);

            if (data) {
                data.map((item, index) => {
                    if (index >= this.state.contentPerPage * (this.state.currentPage - 1) && index < this.state.contentPerPage * this.state.currentPage) {
                        let category = IsJsonString(item.category.name) ? JSON.parse(item.category.name).filter(data => data.language === i18next.language)[0].name : item.category.name;
                        let description = IsJsonString(item.description) ? JSON.parse(item.description).filter(data => data.language === i18next.language)[0].description : item.description;
                        let title = IsJsonString(item.title) ? JSON.parse(item.title).filter(data => data.language === i18next.language)[0].title : item.title;
    
                        htmlContentPublication.push(
                            <LatestPublicationItem key={index} category={category} date={moment(item?.created_at).format('DD MMM YYYY')} description={description} documents={StorageURL(item?.documents.replaceAll('["', '').replaceAll('"]', ''))} image={StorageURL(item?.cover.replaceAll('["', '').replaceAll('"]', ''))} title={title} />
                        );
                    }
                });

                for (let i = 1; i <= totalPage; i++) {
                    htmlContentListPagination.push(
                        <div key={i} className={`${(i === this.state.currentPage) ? 'active' : ''} pagination-list`} onClick={() => this.SelectPage(i)}>
                            <p className='pagination-item'>{i}</p>
                        </div>
                    );
                }

                if (totalPage > 1) {
                    htmlContentListPagination.push(
                        <div className='pagination-list' onClick={() => this.SelectPage(this.state.currentPage >= data.length / this.state.contentPerPage ? this.state.currentPage : this.state.currentPage + 1)}>
                            <p className='pagination-item'><FaLongArrowAltRight /></p>
                        </div>
                    );
                }
            }

            this.setState({ dataPublication: data, dataPublicationNonFilter: data, htmlContentPublication: htmlContentPublication, htmlContentListPagination: htmlContentListPagination });
        });


        axios.get('https://admin.greenhydrogen.my.id/api/video_publication', ConfigAPI()).then(response => {
            let data = response.data.data.publications;

            let htmlContentPublicationVideo = [];

            if (data) {
                data.map((item, index) => {
                    htmlContentPublicationVideo.push(
                        <div key={index} className={`${data.length < 3 ? 'col' : 'col-4'} publication-video-item wow fadeInUp`} data-wow-delay={`${index * 0.2}s`}>
                            <iframe src={item?.embed?.replaceAll('watch?v=', 'embed/')} className='video' style={{ height: data.length <= 1 ? 400 : null }}></iframe>
                            <div className='p-2'>
                                <p className='fw-bold text-black text-size-4 text-size-lg-5'>{item?.translation?.title}</p>
                                <p className='text-black'>{item?.translation?.description}</p>
                            </div>
                        </div>
                    );
                });
            }

            this.setState({ dataPublicationVideo: data, dataPublicationVideoNonFilter: data, htmlContentPublicationVideo: htmlContentPublicationVideo });
        });
    }

    Filter = () => {
        let title = document.getElementById('input-filter-by-title').value;
        let years = document.getElementById('input-filter-by-years').value;
        let topic = document.getElementById('input-filter-by-topic').value;
        let category = document.getElementById('input-filter-by-category').value;

        let data = this.state.dataPublicationNonFilter;

        data = data.filter(item => {
            if (item?.title?.toLowerCase().includes(title.toLowerCase()) && moment(item?.created_at).format('YYYY').includes(years) && item?.description?.toLowerCase().includes(topic.toLowerCase()) && item?.category?.name?.toLowerCase().includes(category.toLowerCase())) {
                return item;
            }
        });

        let htmlContentPublication = [];
        let htmlContentListPagination = [];

        let totalPage = Math.ceil(data.length / this.state.contentPerPage);

        if (data) {
            data.map((item, index) => {
                if (index >= this.state.contentPerPage * (this.state.currentPage - 1) && index < this.state.contentPerPage * this.state.currentPage) {
                    let category = IsJsonString(item.category.name) ? JSON.parse(item.category.name).filter(data => data.language === i18next.language)[0].name : item.category.name;
                    let description = IsJsonString(item.description) ? JSON.parse(item.description).filter(data => data.language === i18next.language)[0].description : item.description;
                    let title = IsJsonString(item.title) ? JSON.parse(item.title).filter(data => data.language === i18next.language)[0].title : item.title;

                    htmlContentPublication.push(
                        <LatestPublicationItem key={index} category={category} date={moment(item?.created_at).format('DD MMM YYYY')} description={description} documents={StorageURL(item?.documents.replaceAll('["', '').replaceAll('"]', ''))} image={StorageURL(item?.cover.replaceAll('["', '').replaceAll('"]', ''))} title={title} />
                    );
                }
            });

            for (let i = 1; i <= totalPage; i++) {
                htmlContentListPagination.push(
                    <div key={i} className={`${(i === this.state.currentPage) ? 'active' : ''} pagination-list`} onClick={() => this.SelectPage(i)}>
                        <p className='pagination-item'>{i}</p>
                    </div>
                );
            }

            if (totalPage > 1) {
                htmlContentListPagination.push(
                    <div className='pagination-list' onClick={() => this.SelectPage(this.state.currentPage >= data.length / this.state.contentPerPage ? this.state.currentPage : this.state.currentPage + 1)}>
                        <p className='pagination-item'><FaLongArrowAltRight /></p>
                    </div>
                );
            }
        }

        this.setState({ dataPublication: data, htmlContentPublication: htmlContentPublication, htmlContentListPagination: htmlContentListPagination });
    }

    FilterVideo = (event) => {
        let data = this.state.dataPublicationVideo;

        data = data.filter(item => {
            if (item?.admin?.name?.includes(event.target.value) ||
                item?.created_at?.includes(event.target.value) ||
                item?.translation?.title?.includes(event.target.value) ||
                item?.translation?.description?.includes(event.target.value)) {
                return item;
            }
        });

        let htmlContentPublicationVideo = [];

        if (data) {
            data.map((item, index) => {
                htmlContentPublicationVideo.push(
                    <div key={index} className={`${data.length < 3 ? 'col' : 'col-4'} publication-video-item wow fadeInUp`} data-wow-delay={`${index * 0.2}s`}>
                        <iframe src={item?.embed?.replaceAll('watch?v=', 'embed/')} className='video' style={{ height: data.length <= 1 ? 400 : null }}></iframe>
                        <div className='p-2'>
                            <p className='fw-bold text-black text-size-4 text-size-lg-5'>{item?.translation?.title}</p>
                            <p className='text-black'>{item?.translation?.description}</p>
                        </div>
                    </div>
                );
            });
        }

        this.setState({ htmlContentPublicationVideo: htmlContentPublicationVideo });
    }

    SelectPage = (page) => {
        let data = this.state.dataCompany;

        let htmlContentPublication = [];
        let htmlContentListPagination = [];

        let totalPage = Math.ceil(data.length / this.state.contentPerPage);

        if (data) {
            data.map((item, index) => {
                if (index >= this.state.contentPerPage * (page - 1) && index < this.state.contentPerPage * page) {
                    let category = IsJsonString(item.category.name) ? JSON.parse(item.category.name).filter(data => data.language === i18next.language)[0].name : item.category.name;
                    let description = IsJsonString(item.description) ? JSON.parse(item.description).filter(data => data.language === i18next.language)[0].description : item.description;
                    let title = IsJsonString(item.title) ? JSON.parse(item.title).filter(data => data.language === i18next.language)[0].title : item.title;

                    htmlContentPublication.push(
                        <LatestPublicationItem key={index} category={category} date={moment(item?.created_at).format('DD MMM YYYY')} description={description} documents={StorageURL(item?.documents.replaceAll('["', '').replaceAll('"]', ''))} image={StorageURL(item?.cover.replaceAll('["', '').replaceAll('"]', ''))} title={title} />
                    );
                }
            });

            if (!(page == 1)) {
                htmlContentListPagination.push(
                    <div className='pagination-list' onClick={() => this.SelectPage(this.state.currentPage === 1 ? this.state.currentPage : this.state.currentPage - 1)}>
                        <p className='pagination-item'><FaLongArrowAltLeft /></p>
                    </div>
                );
            }

            for (let i = 1; i <= totalPage; i++) {
                htmlContentListPagination.push(
                    <div className={`${(i === page) ? 'active' : ''} pagination-list`} onClick={() => this.SelectPage(i)}>
                        <p className='pagination-item'>{i}</p>
                    </div>
                );
            }

            if (!(page == totalPage)) {
                htmlContentListPagination.push(
                    <div className='pagination-list' onClick={() => this.SelectPage(page >= data.length / this.state.contentPerPage ? page : page + 1)}>
                        <p className='pagination-item'><FaLongArrowAltRight /></p>
                    </div>
                );
            }
        }

        this.setState({ currentPage: page, htmlContentPublication: htmlContentPublication, htmlContentListPagination: htmlContentListPagination });
    }

    render() {
        return (
            <>
                {this.state.htmlContent}

                <div className='container container-width publication-video-container pt-5 px-20'>
                    {this.state.htmlContentPublicationVideo}
                </div>

                <div className='container-width px-20 py-5'>
                    <div className='align-items-center bg-white row gx-lg-4 justify-content-center mx-auto p-3' style={{ borderRadius: '12px', maxWidth: '1000px' }}>
                        <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-filter-by-title' id='input-filter-by-title' className='input-field-filter text-white' onInput={this.Filter} placeholder='Filter By Title' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-filter-by-years' id='input-filter-by-years' className='input-field-filter text-white' onInput={this.Filter} placeholder='Filter By Years' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-filter-by-topic' id='input-filter-by-topic' className='input-field-filter text-white' onInput={this.Filter} placeholder='Filter By Topic' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 m-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-filter-by-category' id='input-filter-by-category' className='input-field-filter text-white' onInput={this.Filter} placeholder='Filter By Category' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-width row justify-content-center justify-content-sm-start gx-4 gy-4 pb-2 pb-lg-5'>
                    {this.state.htmlContentPublication}

                    <div className='align-items-center d-flex justify-content-center pt-5'>
                        {this.state.htmlContentListPagination}
                    </div>
                </div>

                <LatestNews />
            </>
        )
    }
}

export default Publications
