import React, { Component } from 'react'
import { FaRegCalendar, FaUserCircle, FaSearch, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

import { ConfigAPI, StorageURL, Translate } from '../component/helper';
import LatestPost from '../component/LatestPost';
import LatestNews from '../component/LatestNews';

import Post from '../component/Post';

import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

export class News extends Component {

    state = {
        dataPost: [],
        dataPostNonFilter: [],

        htmlContent: [],
        htmlCategoryPost: [],
        htmlContentPost: [],
        htmlContentLatestPost: [],
        htmlContentListPagination: [],
        htmlContentSidebarTop: [],

        currentPage: 1,
        contentPerPage: 5
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
                                <div className='align-items-lg-start align-items-center container-width d-flex flex-column justify-content-center h-100 px-20'>
                                    <p className='fw-bold text-center text-size-6 text-size-lg-8'><Translate title={`NEWS & EVENT`} /></p>
                                    <p className='text-center text-size-3 text-size-lg-4'><Translate title={`News & Event | News`} /></p>
                                    <div className='main-search'>
                                        <div className='icon-input-field-search' >
                                            <FaSearch />
                                        </div>
                                        <input type="text" name='input-search' id='input-search' className='py-2 text-white' placeholder='Search' onChange={this.Filter} />
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
            let data = response.data.data.news;
            let dataCategories = response.data.data.categories;
            let dataLatests = response.data.data.latests;
            let dataSidebarTop = response.data.data.sidebar_up;

            let htmlCategoryPost = [];
            let htmlContentPost = [];
            let htmlContentLatestPost = [];
            let htmlContentListPagination = [];
            let htmlContentSidebarTop = [];

            let totalPage = Math.ceil(data.length / this.state.contentPerPage);

            if (data.length > 0) {
                data.map((item, index) => {
                    if (index >= this.state.contentPerPage * (this.state.currentPage - 1) && index < this.state.contentPerPage * this.state.currentPage) {
                        htmlContentPost.push(
                            <Post key={index} author={item?.admin?.name} image={StorageURL(item?.embed)} category={item?.category?.translation?.name} date={item?.created_at} description={item?.translation?.description} detail={item} title={item?.translation?.title} />
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

            if (dataLatests.length > 0) {
                dataLatests.map((item, index) => {
                    htmlContentLatestPost.push(
                        <LatestPost key={index} image={StorageURL(item.embed)} date={item.created_at} detail={item} title={item.translation?.title} />
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

            this.setState({ dataPost: data, dataPostNonFilter: data, htmlCategoryPost: htmlCategoryPost, htmlContentPost: htmlContentPost, htmlContentLatestPost: htmlContentLatestPost, htmlContentListPagination: htmlContentListPagination, htmlContentSidebarTop: htmlContentSidebarTop });
        });
    }

    Filter = (event) => {
        let data = this.state.dataPostNonFilter;

        data = data.filter(item => {
            if (item?.category?.translation?.name?.includes(event.target.value) ||
                item?.created_at?.includes(event.target.value) ||
                item?.translation?.title?.includes(event.target.value) ||
                item?.translation?.description?.includes(event.target.value)) {
                return item;
            }
        });

        let htmlContentPost = [];
        let htmlContentListPagination = [];

        let totalPage = Math.ceil(data.length / this.state.contentPerPage);

        if (data.length > 0) {
            data.map((item, index) => {
                if (index >= this.state.contentPerPage * (this.state.currentPage - 1) && index < this.state.contentPerPage * this.state.currentPage) {
                    htmlContentPost.push(
                        <Post key={index} author={item?.admin?.name} image={StorageURL(item?.embed)} category={item?.category?.translation?.name} date={item?.created_at} description={item?.translation?.description} detail={item} title={item?.translation?.title} />
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

        this.setState({ dataPost: data, htmlContentPost: htmlContentPost, htmlContentListPagination: htmlContentListPagination });
    }

    SelectPage = (page) => {
        let data = this.state.dataPost;

        let htmlContentPost = [];
        let htmlContentListPagination = [];

        let totalPage = Math.ceil(data.length / this.state.contentPerPage);

        if (data) {
            data.map((item, index) => {
                if (index >= this.state.contentPerPage * (page - 1) && index < this.state.contentPerPage * page) {
                    htmlContentPost.push(
                        <Post key={index} author={item.admin.name} image={StorageURL(item.embed)} category={item.category?.translation?.name} date={item.created_at} description={item.translation?.description} detail={item} title={item.translation?.title} />
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

        this.setState({ currentPage: page, htmlContentPost: htmlContentPost, htmlContentListPagination: htmlContentListPagination });
    }

    render() {
        return (
            <>
                {this.state.htmlContent}

                <div className='container-width d-flex flex-wrap px-20 py-2 py-md-5'>
                    <div className='col-12 col-md-8 d-flex flex-column justify-content-between pb-2 pb-md-0 pe-md-3' id='post'>
                        <div>
                            {this.state.htmlContentPost}
                        </div>
                        <div className='align-items-center d-flex pt-5'>
                            {this.state.htmlContentListPagination}
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
        )
    }
}

export default News
