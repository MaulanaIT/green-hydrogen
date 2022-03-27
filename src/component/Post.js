import React, { Component } from 'react'
import { FaRegCalendar, FaUserCircle } from 'react-icons/fa';

import ImageNews from '../assets/news/image-news.jpg';

export class Post extends Component {
    render() {
        return (
            <div className='bg-light mb-2 mb-lg-4' style={{borderRadius: '12px'}}>
                <div className='news-image'>
                    <img src={ImageNews} alt="" className='w-100' />
                </div>
                <div className='p-3'>
                    <p className='align-items-center d-flex py-2 text-black text-size-3 text-size-lg-3'><FaRegCalendar className='me-2' /> Juni 20, 2022</p>
                    <p className='fw-bold text-black text-size-6 text-size-lg-8'>Association calls grant "insulting", urges industry to write to Mps</p>
                    <p className='py-2 text-size-2 text-size-lg-3 text-secondary'>The Meetings Industry Association (mia) is urging its members to write to their local MPs to express concerns that the business meetings and events sector has been forgotten in chancellor Rishi Sunak’s latest round of support.</p>
                    <p className='align-items-center d-flex py-2 text-black text-size-2 text-size-lg-3'><FaUserCircle className='text-size-10 text-size-lg-10 me-2' /> Admin Natalia</p>
                </div>
            </div>
        )
    }
}

export default Post