import React from 'react';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import BackgroundDateIdle from '../assets/event/background-date-idle.png'
import BackgroundDateSelected from '../assets/event/background-date-selected.png'
import Separator from '../assets/company-directories/separate.png';

import Sponsor from '../component/Sponsor';
import EventItem from '../component/EventItem';

export default function Event() {
    return (
        <>
            <div className='fluid-section-two' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <div className='align-items-center container-width d-flex flex-column justify-content-center h-100'>
                    <p className='fw-bold mt-lg-5 text-center text-size-20 text-size-lg-25'>NEWS & EVENT</p>
                    <p className='text-center text-size-5 text-size-lg-8'>News & Event | Event Schedule Detail</p>
                </div>
            </div>

            <div className='align-items-center container-width d-flex flex-column justify-content-center py-5' style={{ maxWidth: '600px' }}>
                <p className='mb-2 text-center text-black text-size-10 text-size-lg-10' style={{ lineHeight: '2rem' }}>Event Schedule Detail</p>
                <p className='mb-2 text-black text-center' style={{ lineHeight: '1.6rem' }}>Contrary to popular belief,
                    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Green Hydrogen</p>
                <img src={Separator} alt="" />
            </div>

            <div className='container-width row'>
                <div className='col-auto d-flex flex-row flex-lg-column gap-lg-3 justify-content-start'>
                    <div className='p-4' style={{ background: `url(${BackgroundDateSelected}) no-repeat`, backgroundSize: '100% 100%', height: '150px', width: '150px' }}>
                        <p className='fw-bold text-size-5 text-size-lg-10'>24</p>
                        <p>April, 2022</p>
                        <p>First Day</p>
                    </div>
                    <div className='p-4' style={{ background: `url(${BackgroundDateSelected}) no-repeat`, backgroundSize: '100% 100%', height: '150px', width: '150px' }}>
                        <p className='fw-bold text-size-5 text-size-lg-10'>28</p>
                        <p>April, 2022</p>
                        <p>First Day</p>
                    </div>
                    <div className='p-4' style={{ background: `url(${BackgroundDateSelected}) no-repeat`, backgroundSize: '100% 100%', height: '150px', width: '150px' }}>
                        <p className='fw-bold text-size-5 text-size-lg-10'>30</p>
                        <p>April, 2022</p>
                        <p>First Day</p>
                    </div>
                    <div className='p-4' style={{ background: `url(${BackgroundDateSelected}) no-repeat`, backgroundSize: '100% 100%', height: '150px', width: '150px' }}>
                        <p className='fw-bold text-size-5 text-size-lg-10'>31</p>
                        <p>April, 2022</p>
                        <p>First Day</p>
                    </div>
                </div>
                <div className='col-12 col-lg px-3 px-lg-5'>
                    <EventItem />
                    <EventItem />
                    <EventItem />
                </div>
            </div>

            <Sponsor />
        </>
    );
}
