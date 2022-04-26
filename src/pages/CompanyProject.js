import React, { Component } from 'react'
import { FaMapMarker, FaPhone, FaRegEnvelope, FaGlobeAmericas, FaMapMarkerAlt } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';

import L, { divIcon } from 'leaflet';
import { useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import { OpenGoogleMaps, SetPriceFormat, StorageURL, Translate } from '../component/helper'

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';

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

export class CompanyProfile extends Component {

    state = {
        profile: []
    }

    componentDidMount() {
        this.setState({ profile: JSON.parse(sessionStorage.getItem('data')) });
    }

    render() {
        return (
            <>
                <div className='fluid-section-two' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                    <div className='align-items-center container-width d-flex flex-wrap justify-content-between h-100 px-20'>
                        <div className='col-12 col-md-6 text-center text-lg-start'>
                            <p className='fw-bold text-size-6 text-size-lg-8'><Translate title={`News & Event`} /></p>
                            <p className='text-size-3 text-size-lg-4'><Translate title={`On Going Tender & Project`} /></p>
                        </div>
                        <div className='col-12 col-md-6 mt-0 text-center text-lg-end'>
                            <p className='text-size-3 text-size-lg-4'><Translate title={`Hydrogen Indonesia`} /></p>
                        </div>
                    </div>
                </div>

                <div className='container-width py-3 px-20'>
                    <div className='align-items-center container-width d-flex flex-wrap justify-content-between h-100'>
                        <div className='col-6'>
                            <p className='fw-bold text-black text-size-6 text-size-lg-8'>{this.state.profile.company_name}</p>
                            <p className='text-black text-size-3 text-size-lg-4'>{this.state.profile.status}</p>
                        </div>
                        <div className='col-6 text-end'>
                            <img src={StorageURL(this.state.profile.logo)} alt="" height={64} />
                        </div>
                    </div>
                </div>

                <div className='container-width pt-3 pb-3 px-20'>
                    <p className='fw-bold text-black text-size-4 text-size-lg-5'>{this.state.profile.name} - {this.state.profile?.region?.name}</p>
                    <p className='pb-2 text-black'>{this.state.profile.description}</p>
                </div>

                <div className='container-width py-3 px-20'>
                    <div className='align-items-start container-width d-flex flex-wrap h-100'>
                        <div className='col-12 col-md-2'>
                            <p className='fw-bold text-black text-size-4 text-size-lg-5'><Translate title={`Member of`} /></p>
                        </div>
                        <div className='col-12 col-md-10' style={{backgroundColor: '#6EC624aa'}}>
                            <img src={StorageURL(this.state.profile.member_of_image)} alt="" height={64} />
                        </div>
                    </div>
                </div>

                <div className='align-items-center container-width pb-3 position-relative'>
                    <MapContainer center={[0.7893, 113.9213]} zoom={4} style={{ height: 400, width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <CustomMarker lat={this.state.profile.lat} lng={this.state.profile.lng} name={`${this.state.profile.company_name} - ${this.state.profile.name}`} />
                    </MapContainer>
                </div>

                <div className='container-width px-20 '>
                    <div className='d-flex flex-wrap py-3 pg-lg-0' style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.4)' }}>
                        <div className='col-12 col-md-6 pb-3 pb-lg-0 pe-lg-2'>
                            <p className='fw-bold pb-2 text-black text-size-4 text-size-lg-5'><Translate title={`Contact Support`} /></p>
                            <p className='pb-2 text-black'><FaRegEnvelope className='me-2' /> {this.state.profile.email}</p>
                            <p className='pb-2 text-black'><FaPhone className='me-2' /> {this.state.profile.contact}</p>
                            <p className='pb-2 text-black'><FaGlobeAmericas className='me-2' /> {this.state.profile.website}</p>
                        </div>
                        <div className='col-12 col-md-6 ps-lg-2'>
                            <div>
                                <p className='fw-bold pb-2 text-black text-size-4 text-size-lg-5'><Translate title={`Total Budget`} /></p>
                                <p className='pb-2 text-black'>{SetPriceFormat(this.state.profile.total_budget)}</p>
                            </div>
                            <div>
                                <p className='fw-bold pb-2 text-black text-size-4 text-size-lg-5'><Translate title={`Address`} /></p>
                                <p className='pb-2 text-black'><FaMapMarker /> {this.state.profile.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='align-items-center container-width d-flex flex-wrap py-3 px-20'>
                    <div className='col-12 col-md-6' style={{ height: 400 }}>
                        <img src={StorageURL(this.state.profile.image)} alt="" className='h-100 w-100' />
                    </div>
                    <div className='col-12 col-md-6 pb-4 pb-md-0 ps-lg-3 position-relative pt-3 pt-lg-0'>
                        <p className='fw-bold pb-2 text-black text-size-4 text-size-lg-5'>{this.state.profile.company_name}</p>
                        <p className='fw-bold pb-2 text-black text-size-4 text-size-lg-5'>{this.state.profile.name}</p>
                        <p className='fw-bold pb-2 text-black text-size-4 text-size-lg-5'>{this.state.profile?.category?.name}</p>
                        <a href={this.state.profile.website} className='d-block pb-3 primary-color' style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.4)' }}><FaGlobeAmericas className='me-2' /> {this.state.profile.website}</a>
                        <p className='py-3 text-black'><Translate title={`Member of`} /> :</p>
                        <img src={StorageURL(this.state.profile.member_of_image)} alt="" height={40} />
                    </div>
                </div>
            </>
        )
    }
}

export default CompanyProfile