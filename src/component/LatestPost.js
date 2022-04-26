import React, { Component } from 'react'
import { FaRegCalendar } from 'react-icons/fa';

import ImageLatestPost from '../assets/news/image-latest-post.png';
import { StorageURL } from './helper';

import moment from 'moment';
import { Link } from 'react-router-dom';

export class LatestPost extends Component {
    render() {
        return (
            <div className='align-items-center bg-white d-flex flex-wrap justify-content-center mb-4' style={{borderRadius: 12}}>
                <div className='col-12 col-lg-4 container-image overflow-hidden pe-lg-2' style={{borderRadius: 12, height: 128}}>
                    <img src={this.props.image} alt="" />
                </div>
                <div className='d-flex flex-column justify-content-center col-12 col-lg-8 p-2'>
                    <Link to={`/news-event/news/detail`} state={{data: this.props.detail}} className='fw-bold pb-2 hover-text-button text-clamp text-size-3 text-size-lg-4'>{this.props.title}</Link>
                    <p className='align-items-center d-flex text-secondary text-size-1 text-size-lg-2'><FaRegCalendar className='me-2' /> {moment(this.props.date).format('MMMM DD, YYYY')}</p>
                </div>
            </div>
        )
    }
}

export default LatestPost