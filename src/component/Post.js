import React, { Component } from 'react'
import { FaRegCalendar, FaUserCircle } from 'react-icons/fa';

import ImageNews from '../assets/news/image-news.jpg';

import moment from 'moment';
import { Link } from 'react-router-dom';

export class Post extends Component {

    render() {
        return (
            <div className='bg-light mb-2 mb-lg-4 wow fadeInUp' data-wow-delay="0.4s" style={{borderRadius: '12px'}}>
                <div className='container-image news-image' data-category={this.props.category} style={{height: 384}} >
                    <img src={this.props.image} alt="" />
                </div>
                <div className='p-3'>
                    <p className='align-items-center d-flex py-2 text-black text-size-3 text-size-lg-3'><FaRegCalendar className='me-2' /> {moment(this.props.date).format('MMMM DD, YYYY')}</p>
                    <Link to={`/news-event/news/detail`} state={{data: this.props.detail}} className='fw-bold hover-text-button text-clamp text-size-6 text-size-lg-8'>{this.props.title}</Link>
                    <p className='my-2 text-clamp text-secondary' dangerouslySetInnerHTML={{__html: this.props.description.replaceAll('p><p', 'p><br/><p')}}></p>
                    <p className='align-items-center d-flex hover-text-button py-2 text-black'><FaUserCircle className='text-size-10 text-size-lg-10 me-2' /> {this.props.author}</p>
                </div>
            </div>
        )
    }
}

export default Post