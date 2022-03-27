import React from 'react';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';

import Sponsor1 from '../assets/sponsor-1.png';
import Sponsor2 from '../assets/sponsor-2.png';
import Sponsor3 from '../assets/sponsor-3.png';

export default function OurPartners() {
    return (
        <>
            <div className='fluid-section-two' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <div className='align-items-center container-width d-flex flex-column justify-content-center h-100'>
                    <p className='fw-bold mt-lg-5 text-center text-size-20 text-size-lg-25'>ABOUT US</p>
                    <p className='text-center text-size-5 text-size-lg-8'>About Us | Our Partner</p>
                </div>
            </div>

            <section className='container container-width pt-5'>
                <div className='d-flex flex-lg-row flex-column-reverse flex-wrap'>
                    <div className='col-12 col-lg-6 pb-4 pe-lg-3'>
                        <div className='our-partner-logo text-center'>
                            <img src={Sponsor1} alt="" className='h-100' />
                        </div>
                        <p className='fw-bold py-4 primary-color text-size-8 text-size-lg-10'>The Deutsche Gesellschaft für Internationale Zusammenarbeit  (GIZ)</p>
                        <p className='text-black text-justify'>The Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH (English: German Corporation for International Cooperation GmbH), often shortened to simply GIZ, is a German development agency headquartered in Bonn and Eschborn that provides services in the field of international development cooperation and international education work. GIZ's main commissioning party is Germany's Federal Ministry for Economic Cooperation and Development (BMZ). GIZ is dedicated to building a future worth living around the world.</p>
                        <div className='our-partner-logo text-center mt-4'>
                            <img src={Sponsor2} alt="" className='h-100' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 pb-4 ps-lg-3'>
                        <div className='our-partner-logo text-center'>
                            <img src={Sponsor3} alt="" className='h-100' />
                        </div>
                        <p className='fw-bold py-4 primary-color text-size-8 text-size-lg-10'>Business Scouts for Development</p>
                        <p className='text-black text-justify'>Business Scouts for Development work as development policy experts in around 40 countries across the globe. On behalf of the German Federal Ministry for Economic Development and Cooperation (BMZ), they advise German, European and local companies on development policy matters and promote responsible business engagement through cooperation projects. They are development policy ex-perts who advise German, European and local companies on the opportunities for promotion, financing and cooperation available through German and European development cooperation, facilitate networking with potential partners and initiate cooperation projects. In addition, by supporting business and learning partnerships, the transfer of expertise and targeted support for trade fair participation they not only generate new opportunities for trade but also improve prospects for local job creation.</p>
                    </div>
                </div>
            </section>

            <section className='container container-article-section container-width mb-2'>
                <p className='fw-bold primary-color text-size-8 text-size-lg-10'>The German-Indonesian Chamber of Commerce and Industry (AHK Indonesien / EKONID)</p>
            </section>

            <section className='container container-article-section container-width'>
                <p className='text-black text-justify'>The German-Indonesian Chamber of Commerce and Industry (AHK Indonesien / EKONID) acts as a strategic interface between the German and Indonesian economies. We represent the mutual interest in business relationships of German and Indonesian companies, organizations and institutions. Our main activity is to support companies from both nations in exploring new areas of investment and establishing business relationships. We are a meeting point, information center and first point of contact for companies interested in doing business in and with Indonesia.
                    <br /><br />
                    EKONID offers a variety of services under the DEinternational brand - from general market information to services specially tailored to the respective company for a successful market entry, e.g. business partner search, support in legal questions and participation in trade fairs.
                    <br /><br />
                    In addition to its main location in Jakarta, the chamber of commerce is represented in Surabaya by an office, the so-called Wisma Jerman - a cooperation between the Goethe-Institute and EKONID, which is supported by the German Embassy Jakarta. Wisma Jerman offers language courses, events and the services from the EKONID service portfolio.</p>
            </section>
        </>
    );
}
