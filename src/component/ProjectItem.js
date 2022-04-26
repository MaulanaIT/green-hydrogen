import React, { Component } from 'react'
import { NavItem } from 'react-bootstrap';

import { FaLongArrowAltRight, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Translate } from './helper';

export class ComponentDirectoriesItem extends Component {

    PassData = (data) => {
        sessionStorage.setItem('data', JSON.stringify(data));
    }

    render() {
        return (
            <>
                <div className='bg-white p-4 mb-4' style={{ borderRadius: 12 }}>
                    <div className='d-flex flex-wrap wow fadeInLeft' data-wow-delay="0.4s" style={{ borderRadius: '12px', minHeight: '250px' }}>
                        <div className='col-5 p-2'>
                            <img src={this.props.image} alt="" className='w-100' />
                        </div>
                        <div className='col-7 d-flex flex-column p-4'>
                            <p className='fw-bold text-black text-size-3 text-size-lg-5'>{this.props.companyName} - {this.props.name}</p>
                            <p className='text-black'><FaMapMarker /> {(this.props.region) ? `${this.props.region}, ` : ''}{this.props.country}</p>
                            <p className='mt-2 text-clamp text-black' style={{ '--line-clamp': 5 }}>{this.props.description}</p>
                            <div className='mt-auto pt-4'>
                                <p className='fw-bold text-black'><Translate title={`Member of`} />:</p>
                                <img src={this.props.member} alt="" height={64} />
                            </div>
                            <Link to={'/company-project'} className='fw-bold hover-text-button' onClick={() => this.PassData(this.props.detail)}><Translate title={`See Detail`} /> <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ComponentDirectoriesItem