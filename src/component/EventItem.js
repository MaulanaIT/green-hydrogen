import React, { Component } from 'react'
import { FaMapMarkerAlt, FaRegBookmark, FaChevronDown } from 'react-icons/fa';
import { OpenGoogleMaps, Translate } from './helper';

export class EventItem extends Component {
    ToggleContent = (event) => {
        event.currentTarget.classList.toggle('active');
        event.currentTarget.nextSibling.querySelector('.content-event-item').classList.toggle('active');
    }

    render() {
        return (
            <div className='bg-white m-0 mb-3 mb-lg-5 p-3 p-lg-5 position-relative row wow fadeInUp' data-wow-delay="0.4s" style={{ boxShadow: '0px 0px 20px #ddd' }}>
                <div className='col-12 col-lg-auto'>
                    <div className='mb-4' style={{ background: `url(${this.props.image}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%', height: '100px', width: '100px' }}></div>
                </div>
                <div className='content-event-item-toggle' onClick={this.ToggleContent}><FaChevronDown /></div>
                <div className="col-12 col-lg position-relative">
                    <p className='pb-2 text-secondary'>{this.props.startTime} WIB - {this.props.endTime} WIB</p>
                    <p className='pb-4 text-black text-size-4 text-size-lg-8'>{this.props.title}</p>
                    <p className='pb-4 text-danger'>{this.props.speakerName} <span className='text-secondary'> - {this.props.speakerTitle}</span></p>
                    <div className='content-event-item'>
                        <p className='pb-3 text-black text-justify' dangerouslySetInnerHTML={{ __html: this.props.description }}></p>
                        <div className='row m-0'>
                            <div className='col-auto'>
                                <FaRegBookmark className='text-danger' />
                            </div>
                            <div className='col'>
                                <p className='text-black'>{this.props.category}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='row m-0'>
                            <div className='col-auto'>
                                <FaMapMarkerAlt className='text-danger' />
                            </div>
                            <div className='d-flex col'>
                                <div className='col'>
                                    <p className='text-black'><Translate title={`Event Location`} /></p>
                                    <p className='text-secondary text-size-1 text-size-lg-1' onClick={() => OpenGoogleMaps(this.props.lat, this.props.lng)}>{this.props.location}</p>
                                </div>
                                <div className='button-event col-auto ms-auto py-2 px-4' onClick={() => {
                                    window.open(this.props.link, '_blank');
                                }}>
                                    <Translate title={`See Event`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventItem