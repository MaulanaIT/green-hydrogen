import React, { Component } from 'react'
import { FaRegCalendar } from 'react-icons/fa';

import ImageLatestPost from '../assets/news/image-latest-post.png';

export class LatestPost extends Component {
    render() {
        return (
            <div className='align-items-center d-flex flex-wrap justify-content-center mb-4'>
                <div className='col-12 col-lg-4 pb-2 pb-lg-0 pe-lg-2'>
                    <img src={ImageLatestPost} alt="" className='w-100' style={{ borderRadius: '4px' }} />
                </div>
                <div className='d-flex flex-column justify-content-center col-12 col-lg-8 pt-2 pt-lg-0 ps-lg-2'>
                    <p className='fw-bold text-black text-size-4 text-size-lg-5'>Design Requirements</p>
                    <p className='align-items-center d-flex text-secondary text-size-2 text-size-lg-3'><FaRegCalendar className='me-2' /> Juni 20, 2022</p>
                </div>
            </div>
        )
    }
}

export default LatestPost