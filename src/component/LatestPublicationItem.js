import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaLongArrowAltRight } from 'react-icons/fa';

import BackgroundLatestPublication from '../assets/home/background-item-latest-publication.png';
import { Translate } from './helper';

export class LatestPublicationItem extends Component {
    render() {
        return (
            <div className='col-12 col-sm-auto wow fadeInUp' data-wow-delay="0.4s" style={{ maxWidth: 230 }}>
                <div className='publication-card'>
                    <div className='primary-background-color container-image justify-content-start' style={{ borderRadius: 8, height: 250 }}>
                        <img src={this.props.image} alt="" style={{ minWidth: '90%', maxWidth: '90%' }} />
                    </div>
                    <div className='p-2'>
                        <div className='mb-2 d-flex gap-3'>
                            <p className='text-black text-size-0 text-size-lg-1'>{this.props.date}</p>
                            <p className='text-black text-size-0 text-size-lg-1'>{this.props.category}</p>
                        </div>
                        <p className='fw-bold text-black text-clamp text-size-2 text-size-lg-3' style={{ "--line-clamp": 2 }}>{this.props.title}</p>
                        <p className='text-black text-clamp text-size-0 text-size-lg-1'>{this.props.description}</p>
                        {/* <p className='mt-auto text-black'>#Hydrogen #Global</p> */}
                        <div className='d-flex justify-content-end'>
                            <a href={this.props.documents} target='_blank' rel='noopener noreferrer' className='read-more text-size-0 text-size-lg-1'><Translate title={`Read More`} /> <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LatestPublicationItem