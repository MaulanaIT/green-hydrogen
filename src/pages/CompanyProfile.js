import React, { Component } from 'react'
import { FaPhone, FaRegEnvelope, FaGlobeAmericas, FaMapMarkerAlt } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';

import L, { divIcon } from 'leaflet';
import { useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import { ConfigAPI, OpenGoogleMaps, StorageURL, Translate } from '../component/helper'

import Logo from '../assets/logo.png';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import axios from 'axios';

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
        if (sessionStorage.getItem('data')) {
            this.setState({ profile: JSON.parse(sessionStorage.getItem('data')) });
        } else {
            axios.get('https://admin.greenhydrogen.my.id/api/company_directory/profile', ConfigAPI(localStorage.getItem('token'))).then(response => {
                if (response.data) {
                    this.setState({ profile: response.data.data.user });
                }
            });
        }
    }

    render() {
        return (
            <>
                <div className='fluid-section-two position-relative' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                    <div className='align-items-center container-width d-flex flex-wrap justify-content-between h-100 px-20'>
                        <div className='col-12 col-md-6 text-center text-lg-start'>
                            <p className='fw-bold text-size-6 text-size-lg-8'><Translate title={`Company Directories`} /></p>
                            <p className='text-size-3 text-size-lg-4'><Translate title={`Company Profile`} /></p>
                        </div>
                        <div className='col-12 col-md-6 mt-0 text-center text-lg-end'>
                            <p className='text-size-3 text-size-lg-4'><Translate title={`Hydrogen Indonesia`} /></p>
                        </div>
                    </div>
                </div>

                <div className='container-width pt-5 pb-3 px-20'>
                    <p className='fw-bold text-black text-size-4 text-size-lg-5'>{this.state.profile.name}</p>
                    <p className='pb-2 text-black' dangerouslySetInnerHTML={{__html: this.state.profile.description}}></p>
                </div>

                <div className='align-items-center container-width d-flex justify-content-between pt-3 pb-3 px-20'>
                    <div className='col-12 col-lg-6'>
                        <p className='fw-bold text-black text-size-4 text-size-lg-5'><Translate title={`Region`} /> {this.state.profile?.region?.name}</p>
                        <p className='pb-2 text-black text-size-3 text-size-lg-4'><Translate title={`Contact`} />: {this.state.profile.contact}</p>
                    </div>
                    <div className='col-6 d-none d-lg-block text-end'>
                        <img src={StorageURL(this.state.profile.image)} alt="" height={84} />
                    </div>
                </div>
                <div className='align-items-center container-width d-flex flex-wrap py-0'>
                    <div className='col-12 col-md-6' style={{ height: 400 }}>
                        <img src={StorageURL(this.state.profile.photo)} alt="" className='h-100 w-100' />
                    </div>
                    <div className='col-12 col-md-6 pb-4 pb-md-0 text-center position-relative'>
                        <MapContainer center={[0.7893, 113.9213]} zoom={4} style={{ height: 400, width: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <CustomMarker lat={this.state.profile.lat} lng={this.state.profile.lng} name={this.state.profile.name} />
                        </MapContainer>
                    </div>
                </div>

                <div className='container-width d-flex flex-wrap px-20 pt-3 pt-lg-5'>
                    <div className='col-12 col-md-6 pb-4 pb-lg-0 pe-lg-2'>
                        <p className='fw-bold pb-2 text-black text-size-4 text-size-lg-5'><Translate title={`Contact Support`} /></p>
                        <p className='pb-2 text-black'><FaRegEnvelope className='me-2' /> {this.state.profile.email}</p>
                        <p className='pb-2 text-black'><FaPhone className='me-2' /> {this.state.profile.contact}</p>
                        <p className='pb-2 text-black'><FaGlobeAmericas className='me-2' /> {this.state.profile.website}</p>
                    </div>
                    <div className='col-12 col-md-6 ps-lg-2'>
                        <p className='fw-bold pb-2 text-black text-size-4 text-size-lg-5'><Translate title={`Address`} /></p>
                        <p className='pb-2 text-black'>{this.state.profile.address}</p>
                        <a href={this.state.profile.website} className='d-block pb-4 primary-color'><FaGlobeAmericas className='me-2' /> {this.state.profile.website}</a>
                    </div>
                </div>
            </>
        )
    }
}

export default CompanyProfile