import React from 'react';
import { FaRegCalendar, FaUserCircle, FaSearch } from 'react-icons/fa';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';

import ImageSideNews from '../assets/news/image-side-news.png';
import LatestPost from '../component/LatestPost';

import Post from '../component/Post';
import Sponsor from '../component/Sponsor';

export default function News() {
    return (
        <>
            <div className='fluid-section-two' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <div className='align-items-center container-width d-flex flex-column justify-content-center h-100'>
                    <p className='fw-bold mt-lg-5 text-center text-size-20 text-size-lg-25'>NEWS & EVENT</p>
                    <p className='text-center text-size-5 text-size-lg-8'>News & Event | News</p>
                </div>
            </div>

            <section className='container-width d-flex flex-wrap py-2 py-md-5'>
                <div className='col-12 col-md-8 pb-2 pb-md-0 pe-md-3'>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className='col-12 col-md-4 pt-2 pt-md-0 ps-md-3'>
                    <div className='border-bottom mb-4'>
                        <div className='d-none d-md-block mb-4 position-relative w-100'>
                            <div className='icon-input-field-search' >
                                <FaSearch />
                            </div>
                            <input type="text" name='input-search' id='input-search' className='input-field-search py-2 text-white' placeholder='Search' />
                        </div>
                        <div className='image-news'>
                            <img src={ImageSideNews} alt="" className='w-100' />
                        </div>
                        <p className='align-items-center d-flex py-2 text-black text-size-2 text-size-lg-3'><FaRegCalendar className='me-2' /> Juni 20, 2022</p>
                        <p className='fw-bold text-black text-size-6 text-size-lg-8'>Principle Of Design</p>
                        <p className='py-2 text-size-2 text-size-lg-3 text-secondary'>Our impartial global network of nearly 100 national Member Committees connects energy leaders, industries, governments, innovators and experts across the world.</p>
                        <p className='align-items-center d-flex py-2 text-black text-size-2 text-size-lg-3'><FaUserCircle className='text-size-10 text-size-lg-10 me-2' /> Admin Natalia</p>
                    </div>
                    <div className='pb-4'>
                        <p className='fw-bold text-black text-size-5 text-size-lg-5'>Latest Post</p>
                        <LatestPost />
                        <LatestPost />
                        <LatestPost />
                        <LatestPost />
                        <LatestPost />
                    </div>
                    <div className='pb-4'>
                        <p className='fw-bold pb-4 text-black text-center text-lg-start text-size-5 text-size-lg-5'>Categories</p>
                        <p className='fw-bold pb-3 text-secondary text-center text-lg-start text-size-3 text-size-lg-3'>BUSINESS</p>
                        <p className='fw-bold pb-3 text-secondary text-center text-lg-start text-size-3 text-size-lg-3'>TECHNOLOGY</p>
                        <p className='fw-bold pb-3 text-secondary text-center text-lg-start text-size-3 text-size-lg-3'>HYDROGEN</p>
                        <p className='fw-bold pb-3 text-secondary text-center text-lg-start text-size-3 text-size-lg-3'>PROCESS</p>
                        <p className='fw-bold pb-3 text-secondary text-center text-lg-start text-size-3 text-size-lg-3'>INSIGHT</p>
                        <p className='fw-bold pb-3 text-secondary text-center text-lg-start text-size-3 text-size-lg-3'>TRAVEL</p>
                    </div>
                    <div className='pb-4'>
                        <p className='fw-bold pb-4 text-black text-center text-lg-start text-size-5 text-size-lg-5'>Categories</p>
                        <div className='align-items-center d-flex flex-wrap'>
                            <div className='col-6 col-md-auto p-2'>
                                <div className='bg-light px-5 py-2' style={{ borderRadius: '8px' }}>
                                    <p className='fw-bold text-black text-size-3 text-size-lg-3'>HYDROGEN</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-auto p-2'>
                                <div className='bg-light px-5 py-2' style={{ borderRadius: '8px' }}>
                                    <p className='fw-bold text-black text-size-3 text-size-lg-3'>ENERGY</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-auto p-2'>
                                <div className='bg-light px-5 py-2' style={{ borderRadius: '8px' }}>
                                    <p className='fw-bold text-black text-size-3 text-size-lg-3'>TECHNOLOGY</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-auto p-2'>
                                <div className='bg-light px-5 py-2' style={{ borderRadius: '8px' }}>
                                    <p className='fw-bold text-black text-size-3 text-size-lg-3'>DESIGN</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-auto p-2'>
                                <div className='bg-light px-5 py-2' style={{ borderRadius: '8px' }}>
                                    <p className='fw-bold text-black text-size-3 text-size-lg-3'>RENEWABLE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Sponsor />
        </>
    );
}
