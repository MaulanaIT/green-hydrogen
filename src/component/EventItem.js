import React, { Component } from 'react'
import { FaMapMarkerAlt, FaRegBookmark } from 'react-icons/fa';

export class EventItem extends Component {
    render() {
        return (
            <div className='bg-light p-3 mb-3' style={{ height: '400px' }}>
                <div className='bg-white h-100 m-0 p-3 p-lg-4 row'>
                    <div className='col-12 col-lg-auto'>
                        <div className='bg-secondary mx-auto mx-lg-0' style={{ borderRadius: '50%', height: '100px', width: '100px' }}></div>
                    </div>
                    <div className="col-12 col-lg position-relative">
                        <p className='pb-2 text-secondary'>10:00 AM to 11:30 AM</p>
                        <p className='pb-4 text-black text-size-4 text-size-lg-8'>Evolution of User Interface in 2019</p>
                        <p className='pb-4 text-danger'>Richard Tea <span className='text-secondary'> - Lead Designer</span></p>
                        <p className='pb-3 text-black text-justify'>Why I say old chap, that is spiffing blimey muffy, off his nut posh so I said. Butty pardon you
                            blower owt to do with me jolly good off his nut fanny around chancer civtoria sponge t, cuppa bog
                            standard !</p>
                        <div className='row m-0'>
                            <div className='col-auto'>
                                <FaRegBookmark className='text-danger' />
                            </div>
                            <div className='col'>
                                <p className='text-black'>Business Platform</p>
                            </div>
                        </div>
                        <hr />
                        <div className='row m-0'>
                            <div className='col-auto'>
                                <FaMapMarkerAlt className='text-danger' />
                            </div>
                            <div className='col'>
                                <p className='text-black'>Event Location</p>
                                <p className='text-secondary text-size-1 text-size-lg-1'>Mirpur Dosh, Dhaka Street New York, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventItem