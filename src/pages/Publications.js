import React from 'react';
import { FaBuilding, FaCalendar, FaEnvelope, FaLock, FaLongArrowAltLeft, FaLongArrowAltRight, FaSearch } from 'react-icons/fa';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import IconVideoBanner1 from '../assets/company-directories/icon-video-banner-1.png';
import Separator from '../assets/company-directories/separate.png';

import LatestNews from '../component/LatestNews';
import PublicationItem from '../component/PublicationItem';
import Sponsor from '../component/Sponsor';

export default function Publications() {
    return (
        <>
            <div className='align-items-center d-flex flex-column fluid-section-two justify-content-center' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <p className='fw-bold text-size-20 text-size-lg-25'>PUBLICATION</p>
                <p className='text-size-5 text-size-lg-8'>Publication</p>
            </div>

            <div className='align-items-center d-flex flex-column justify-content-center mx-auto p-5' style={{ maxWidth: '600px' }}>
                <p className='mb-2 text-center text-black text-size-10 text-size-lg-10' style={{lineHeight: '2rem'}}>Publication</p>
                <p className='mb-2 text-black text-center' style={{ lineHeight: '1.6rem' }}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC, making it over 2000 years old. Green Hydrogen
                </p>
                <img src={Separator} alt="" />
            </div>

            <div className='p-5'>
                <div className='align-items-center bg-black row gx-lg-2 justify-content-center mx-auto p-3' style={{ borderRadius: '12px', maxWidth: '800px' }}>
                    <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                        <div className='position-relative w-100'>
                            <div className='icon-input-field-filter' >
                                <FaSearch />
                            </div>
                            <input type="text" name='input-search' id='input-search' className='input-field-filter text-white' placeholder='Search' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                        <div className='position-relative w-100'>
                            <div className='icon-input-field-filter' >
                                <FaCalendar />
                            </div>
                            <input type="text" name='input-filter-by-years' id='input-filter-by-years' className='input-field-filter text-white' placeholder='Filter By Years' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                        <div className='position-relative w-100'>
                            <div className='icon-input-field-filter' >
                                <FaCalendar />
                            </div>
                            <input type="text" name='input-filter-by-region' id='input-filter-by-region' className='input-field-filter text-white' placeholder='Filter By Region' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 m-0'>
                        <div className='position-relative w-100'>
                            <div className='icon-input-field-filter' >
                                <FaCalendar />
                            </div>
                            <input type="text" name='input-filter-by-topic' id='input-filter-by-topic' className='input-field-filter text-white' placeholder='Filter By Topic' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto row gx-4 gy-4 p-2 p-lg-5' style={{ maxWidth: '1200px' }}>
                <PublicationItem />
                <PublicationItem />
                <PublicationItem />
                <PublicationItem />
                <PublicationItem />
                <PublicationItem />
                <PublicationItem />
                <PublicationItem />
                <PublicationItem />
                <PublicationItem />
                <PublicationItem />
                <PublicationItem />

                <div className='align-items-center mx-auto d-flex justify-content-center' style={{ maxWidth: '1200px' }}>
                    <div className='p-4'>
                        <p className='cursor-pointer text-black'><FaLongArrowAltLeft /></p>
                    </div>
                    <div className='p-4'>
                        <p className='cursor-pointer text-black'>1</p>
                    </div>
                    <div className='p-4'>
                        <p className='cursor-pointer text-black'>2</p>
                    </div>
                    <div className='p-4'>
                        <p className='cursor-pointer text-black'>3</p>
                    </div>
                    <div className='p-4'>
                        <p className='cursor-pointer text-black'>4</p>
                    </div>
                    <div className='p-4'>
                        <p className='cursor-pointer text-black'>5</p>
                    </div>
                    <div className='p-4'>
                        <p className='cursor-pointer text-black'><FaLongArrowAltRight /></p>
                    </div>
                </div>
            </div>

            <LatestNews />

            <Sponsor />
        </>
    );
}
