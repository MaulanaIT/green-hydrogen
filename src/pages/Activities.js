import React from 'react';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import Separator from '../assets/company-directories/separate.png';

import Sponsor from '../component/Sponsor';

export default function Activities() {
    return (
        <>
            <div className='fluid-section-two' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <div className='align-items-center container-width d-flex flex-column justify-content-center h-100'>
                    <p className='fw-bold mt-lg-5 text-center text-size-20 text-size-lg-25'>ABOUT US</p>
                    <p className='text-center text-size-5 text-size-lg-8'>About Us | Our Activities</p>
                </div>
            </div>

            <div className='align-items-center container-width d-flex flex-column justify-content-center mx-auto p-5' style={{ maxWidth: '600px' }}>
                <p className='mb-2 text-center text-black text-size-10 text-size-lg-10' style={{ lineHeight: '2rem' }}>Event Schedule Detail</p>
                <p className='mb-2 text-black text-center' style={{ lineHeight: '1.6rem' }}>Contrary to popular belief,
                    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Green Hydrogen</p>
                <img src={Separator} alt="" />
            </div>

            <div className='container-width'>
                <div className='align-items-center row gx-lg-2 justify-content-lg-center mx-auto py-3' style={{ borderRadius: '12px', maxWidth: '800px' }}>
                    <div className='col-6 col-lg-auto m-0 pb-2 pb-lg-0'>
                        <button type='button' className='gradient-background-color py-1 px-4 text-white w-100'>Show All</button>
                    </div>
                    <div className='col-6 col-lg-auto m-0 pb-2 pb-lg-0'>
                        <button type='button' className='bg-light py-1 px-4 w-100'>Technology</button>
                    </div>
                    <div className='col-6 col-lg-auto m-0 pb-2 pb-lg-0'>
                        <button type='button' className='bg-light py-1 px-4 w-100'>Business</button>
                    </div>
                    <div className='col-6 col-lg-auto m-0'>
                        <button type='button' className='bg-light py-1 px-4 w-100'>Non Profit</button>
                    </div>
                    <div className='col-6 col-lg-auto m-0'>
                        <button type='button' className='bg-light py-1 px-4 w-100'>Education</button>
                    </div>
                </div>
                <div className='align-items-center row gx-lg-2 justify-content-center mx-auto py-3'>
                    <div className='col-12 col-sm-6 col-lg-auto m-0 pb-2 pb-lg-0'>
                        <div className='bg-light mx-auto' style={{ height: '300px', width: '300px' }}></div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-auto m-0 pb-2 pb-lg-0'>
                        <div className='bg-light mx-auto' style={{ height: '300px', width: '300px' }}></div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-auto m-0 pb-2 pb-lg-0'>
                        <div className='bg-light mx-auto' style={{ height: '300px', width: '300px' }}></div>
                    </div>
                </div>
            </div>

            <Sponsor />
        </>
    );
}
