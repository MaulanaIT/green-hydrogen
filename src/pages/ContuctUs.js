import React, { Component } from 'react'
import { FaFacebookF, FaInstagram, FaEnvelope, FaLongArrowAltRight, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';

import { divIcon } from 'leaflet';
import { useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import Logo from '../assets/logo.png';

import { ConfigAPI, OpenGoogleMaps, StorageURL, Translate } from '../component/helper';
import axios from 'axios';
import i18next from 'i18next';

function CustomMarker(props) {
    const markerRef = useRef(null)

    const iconMarkup = renderToStaticMarkup(
        <div className='pin-marker'>
            <FaMapMarkerAlt />
            <p className='name'>{props.name}</p>
        </div>
    );
    const customMarkerIcon = divIcon({
        html: iconMarkup,
    });

    return (
        <Marker
            icon={customMarkerIcon}
            eventHandlers={{
                click: () => {
                    OpenGoogleMaps(props.lat, props.lng);
                }
            }}
            position={[props.lat, props.lng]}
            ref={markerRef}>
        </Marker>
    )
}

export class ContuctUs extends Component {

    state = {
        htmlContent: [],
        htmlContentAddress: [],
        htmlContentSocialMediaDescription: [],
        htmlContentSocialMediaTitle: [],
        htmlContentSocialMedia: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 45 : 46}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];
            let htmlContentAddress = [];
            let htmlContentSocialMediaDescription = [];
            let htmlContentSocialMediaTitle = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className='fluid-section-two position-relative' style={{ background: `url(${StorageURL(item?.content?.background_contactus_picture_1)}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='align-items-center container-width d-flex flex-wrap justify-content-center h-100 px-20'>
                                    <div className='col-12 col-md-6 text-center text-lg-start'>
                                        <p className='fw-bold text-size-6 text-size-lg-8'><Translate title={`ABOUT US`} /></p>
                                        <p className='text-size-3 text-size-lg-4'><Translate title={`About Us | Contact Us`} /></p>
                                    </div>
                                    <div className='col-12 col-md-6 mt-0 text-center text-lg-end'>
                                        <p className='text-size-3 text-size-lg-4'><Translate title={`Hydrogen Indonesia`} /></p>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '1') {
                        htmlContentSocialMediaTitle.push(
                            <p className='dropdown-item fw-bold pb-3 text-black text-size-6 text-size-lg-8'>{item?.content?.right_title_1}</p>
                        );
                        htmlContentSocialMediaDescription.push(
                            <React.Fragment key={index}>
                                <p className='fw-bold pb-3 text-black text-size-6 text-size-lg-8'>{item?.content?.right_title_2}</p>
                                <p className='pb-4' dangerouslySetInnerHTML={{ __html: item?.content?.right_description_1 }}></p>
                            </React.Fragment>
                        );
                    } else if (item.order == '2') {
                        htmlContentAddress.push(
                            <React.Fragment key={index}>
                                <div className='col-12 col-lg-6 px-20 py-5 wow fadeInRight' data-wow-delay="0.4s" dangerouslySetInnerHTML={{ __html: item?.content?.right_description_1 }}>
                                </div>
                                {/* <p className='text-black text-size-5 text-size-lg-5'><Translate title={`OUR OFFICE`} /></p>
                                <p className='fw-bold text-black text-size-6 text-size-lg-8'><Translate title={`Helping you every step of the way`} /></p>
                                <p className='fw-bold pt-2 pb-1 text-secondary text-size-3 text-size-lg-5'>Perkumpulan Ekonomi Indonesia Jerman (EKONID)</p>
                                <p className='cursor-pointer hover-text-button pb-4 text-secondary' onClick={() => OpenGoogleMaps(-6.1955487561156435, 106.8253066155895)}>Jl. H. Agus Salim No.115, RT.1/RW.5, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10031</p>
                                <p className='pb-1 text-secondary'><Translate title={`Contact Support`} /></p>
                                <p className='pb-1 text-secondary'><FaEnvelope /> juwadiharjo@ekonid.id</p>
                                <p className='pb-4 text-secondary'><FaPhone /> (021) 315 4685</p>
                                <p className='pb-1 text-secondary'><Translate title={`Location`} /></p>
                                <p className='cursor-pointer hover-text-button pb-1 text-secondary' onClick={() => OpenGoogleMaps(-6.1955487561156435, 106.8253066155895)}><FaMapMarkerAlt /> <Translate title={`See Google Map`} /> <FaLongArrowAltRight /></p> */}
                            </React.Fragment>
                        );
                    }
                });
            }

            this.setState({ htmlContent: htmlContent, htmlContentAddress: htmlContentAddress, htmlContentSocialMediaDescription: htmlContentSocialMediaDescription, htmlContentSocialMediaTitle: htmlContentSocialMediaTitle });
        });

        this.GetSocialMedia();
    }

    GetSocialMedia = () => {
        axios.get('https://admin.greenhydrogen.my.id/api/social_media', ConfigAPI()).then(response => {
            let data = response.data.data.socialmedia;

            let htmlContentSocialMedia = [];

            if (data) {
                data.map((item, index) => {
                    htmlContentSocialMedia.push(
                        <React.Fragment key={index}>
                            <a key={0} href={item?.source?.toLowerCase() === 'facebook' ? item?.link : '#'} target={'_blank'} className='contact-us-icon-container me-lg-2'>
                                <FaFacebookF className='text-secondary' />
                            </a>
                            <a key={1} href={item?.source?.toLowerCase() === 'twitter' ? item?.link : '#'} target={'_blank'} className='contact-us-icon-container me-lg-2'>
                                <FaTwitter className='text-secondary' />
                            </a>
                            <a key={2} href={item?.source?.toLowerCase() === 'instagram' ? item?.link : '#'} target={'_blank'} className='contact-us-icon-container me-lg-2'>
                                <FaInstagram className='text-secondary' />
                            </a>
                            <a key={3} href={item?.source?.toLowerCase() === 'youtube' ? item?.link : '#'} target={'_blank'} className='contact-us-icon-container'>
                                <FaYoutube className='text-secondary' />
                            </a>
                        </React.Fragment>
                    );
                })
            }

            this.setState({ htmlContentSocialMedia: htmlContentSocialMedia });
        });
    }

    render() {
        return (
            <>
                {this.state.htmlContent}

                <div className='container-width px-20 pb-3 pt-5'>
                    <div className='align-items-center d-flex flex-wrap justify-content-center wow fadeInLeft' data-wow-delay="0.2s">
                        <div className='col-12 col-lg-6 pb-5 pb-lg-0 pe-lg-2'>
                            <input type="text" name='input-name' id='input-name' className='input-field-contact-us mb-2' placeholder='Your Name' />
                            <input type="text" name='input-email' id='input-email' className='input-field-contact-us mb-2' placeholder='Your Email' />
                            <input type="text" name='input-subject' id='input-subject' className='input-field-contact-us mb-2' placeholder='Subject' />
                            <textarea name="input-question" id="input-question" className='input-field-contact-us' placeholder='Your Question' cols="30" rows="6"></textarea>
                            <button type='button' className='btn d-flex justify-content-center primary-background-color text-white w-100' style={{ borderRadius: 8 }}><Translate title={`Send Message`} /></button>
                        </div>
                        <div className='col-12 col-lg-6 d-flex flex-column justify-content-between pt-3 pt-lg-0 pb-lg-3 ps-lg-2 wow fadeInRight' data-wow-delay="0.2s">
                            <div>
                                {this.state.htmlContentSocialMediaTitle}
                                <div className='align-items-center d-flex dropdown-item flex-wrap justify-content-evenly justify-content-lg-start pb-3'>
                                    {this.state.htmlContentSocialMedia}
                                </div>
                                {this.state.htmlContentSocialMediaDescription}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='align-items-center container-width row gx-lg-2 pb-5 pt-3 px-20'>
                    <div className='col-12 col-lg-6 pb-4 pb-lg-0 text-center position-relative wow fadeInLeft' data-wow-delay="0.4s">
                        <MapContainer center={[0.7893, 113.9213]} zoom={4} style={{ height: 400, width: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <CustomMarker lat={-6.1955487561156435} lng={106.8253066155895} name={`Perkumpulan Ekonomi Indonesia Jerman (EKONID)`} />
                        </MapContainer>
                    </div>
                    {this.state.htmlContentAddress}
                </div>
            </>
        )
    }
}

export default ContuctUs
