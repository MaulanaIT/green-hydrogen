import React from 'react';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';

import Sponsor from '../component/Sponsor';

export default function OurPartners() {
    return (
        <>
            <div className='align-items-center d-flex flex-column fluid-section-two justify-content-center' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <p className='fw-bold text-size-20 text-size-lg-25'>About Us</p>
                <p className='text-size-5 text-size-lg-8'>About Us | Our Partner</p>
            </div>

            <Sponsor />
        </>
    );
}
