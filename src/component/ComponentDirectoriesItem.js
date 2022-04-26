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
                <div className='bg-white p-4 mb-4' style={{borderRadius: 12}}>
                    <div className='d-flex flex-wrap m-0 wow fadeInLeft' data-wow-delay="0.4s" style={{ borderRadius: '12px' }}>
                        <div className='col-sm-5 container-image p-sm-2' style={{height: 200}}>
                            <img src={this.props.image} alt="" />
                        </div>
                        <div className='col-sm-7 d-flex flex-column py-2 py-sm-0 p-sm-4'>
                            <p className='fw-bold text-black text-clamp text-size-3 text-size-lg-5' style={{"--line-clamp": 1}}>{this.props.name}</p>
                            <p className='text-black text-clamp' style={{"--line-clamp": 1}}><FaMapMarker /> {(this.props.region) ? `${this.props.region}, ` : ''}{this.props.country}</p>
                            <p className='mt-2 text-clamp text-black' style={{'--line-clamp': 5}} dangerouslySetInnerHTML={{__html: this.props.description?.replaceAll('p><p', 'p><br/><p')}}></p>
                            <Link to={'/company-profile'} className='fw-bold mt-auto hover-text-button' onClick={() => this.PassData(this.props.detail)}><Translate title={`See Detail`} /> <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ComponentDirectoriesItem