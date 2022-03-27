import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope, FaLongArrowAltRight, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import GoogleMapReact from 'google-map-react';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import BackgroundDateIdle from '../assets/event/background-date-idle.png';
import BackgroundDateSelected from '../assets/event/background-date-selected.png';
import IconMaps from '../assets/our-activities/icon-maps.png';

import Sponsor from '../component/Sponsor';
import EventItem from '../component/EventItem';

function Text() {
    return (
        <div style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            width: 40,
            height: 40,
            left: -40 / 2,
            top: -40 / 2,

            border: '5px solid #f44336',
            borderRadius: 40,
            backgroundColor: 'white',
            textAlign: 'center',
            color: '#3f51b5',
            fontSize: 12,
            fontWeight: 'bold',
            padding: 4
        }}>Test</div>
    )
}

export default function ContactUs() {
    return (
        <>
            <div className='fluid-section-two' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <div className='align-items-center container-width d-flex flex-column justify-content-center h-100'>
                    <p className='fw-bold mt-lg-5 text-center text-size-20 text-size-lg-25'>ABOUT US</p>
                    <p className='text-center text-size-5 text-size-lg-8'>About Us | Contact Us</p>
                </div>
            </div>

            <div className='container-width py-5'>
                <p className='primary-color'>CONTACT US</p>
                <div className='d-flex flex-wrap justify-content-center'>
                    <div className='col-12 col-lg-6 pb-5 pb-lg-0 pe-lg-2'>
                        <p className='fw-bold pb-3 text-black text-size-15 text-size-lg-15'>Get in Touch</p>
                        <input type="text" name='input-name' id='input-name' className='input-field-contact-us mb-2' placeholder='Your Name' />
                        <input type="text" name='input-email' id='input-email' className='input-field-contact-us mb-2' placeholder='Your Email' />
                        <input type="text" name='input-subject' id='input-subject' className='input-field-contact-us mb-2' placeholder='Subject' />
                        <textarea name="input-question" id="input-question" className='input-field-contact-us mb-2' placeholder='Your Question' cols="30" rows="10"></textarea>
                        <button type='button' className='btn d-flex d-lg-none primary-background-color text-white'>Send Message</button>
                    </div>
                    <div className='col-12 col-lg-6 d-flex flex-column justify-content-between pt-3 pt-lg-0 pb-lg-3 ps-lg-2'>
                        <div>
                            <p className='fw-bold pb-3 text-black text-size-15 text-size-lg-15'>Follow Us</p>
                            <div className='align-items-center d-flex flex-wrap justify-content-evenly justify-content-lg-start pb-5'>
                                <div className='contact-us-icon-container me-lg-2'>
                                    <FaFacebookF className='text-secondary' />
                                </div>
                                <div className='contact-us-icon-container me-lg-2'>
                                    <FaTwitter className='text-secondary' />
                                </div>
                                <div className='contact-us-icon-container me-lg-2'>
                                    <FaInstagram className='text-secondary' />
                                </div>
                                <div className='contact-us-icon-container'>
                                    <FaYoutube className='text-secondary' />
                                </div>
                            </div>
                            <p className='fw-bold pb-3 text-black text-size-15 text-size-lg-15'>Call for Support</p>
                            <p className='pb-4 text-secondary'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Green Hydrogen</p>
                            <p className='text-black'><FaPhone className='me-2' /> +62 21 315 4685 </p>
                        </div>
                        <div className='d-none d-lg-flex'>
                            <button type='button' className='btn primary-background-color text-white'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='align-items-center container-width row gx-lg-2 py-2 py-lg-5'>
                <div className='col-12 col-lg-6 pb-4 pb-lg-0 text-center position-relative'>
                    <GoogleMapReact id='maps' defaultCenter={{ lat: -6.99022241690672, lng: 110.4229737758179 }} defaultZoom={11} style={{ height: '400px' }}>
                        <Text lat={-6.99022241690672} lng={110.4229737758179}>teststststststs</Text>
                    </GoogleMapReact>
                </div>
                <div className='col-12 col-lg-6 ps-lg-3'>
                    <p className='text-black text-size-5 text-size-lg-5'>OUR OFFICE</p>
                    <p className='fw-bold text-black text-size-10 text-size-lg-12'>Helping you every step of the way</p>
                    <div className='py-4 row gx-2'>
                        <div className='col-auto'>
                            <button type='button' className='primary-background-color py-1 text-white' style={{ borderRadius: '24px 0 0 24px', width: '150px' }}>Office Address</button>
                        </div>
                        <div className='col-auto'>
                            <button type='button' className='bg-white primary-color py-1 text-white' style={{ border: '1px solid #6EC624', borderRadius: '0 24px 24px 0', width: '150px' }}>Direction</button>
                        </div>
                    </div>
                    <p className='pb-1 text-secondary'>Contact Support</p>
                    <p className='pb-1 text-secondary'><FaEnvelope /> contact@greenenergy.com</p>
                    <p className='pb-4 text-secondary'><FaPhone /> (021) 5555 3333</p>
                    <p className='pb-1 text-secondary'>Location</p>
                    <p className='pb-1 text-secondary'><FaMapMarkerAlt /> See Google Map <FaLongArrowAltRight /></p>
                </div>
            </div>

            <Sponsor />
        </>
    );
}
