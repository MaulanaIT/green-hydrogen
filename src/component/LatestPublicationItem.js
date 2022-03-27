import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaLongArrowAltRight } from 'react-icons/fa';

import BackgroundLatestPublication from '../assets/home/background-item-latest-publication.png';

export class LatestPublicationItem extends Component {
    render() {
        return (
            <div className='col-12 col-lg-6 wow fadeIn'>
                <div className='publication-card'>
                    <div className='d-flex'>
                        <div className='align-items-center col-5 d-flex justify-content-center'>
                            <img src={BackgroundLatestPublication} alt="" className='w-100' />
                        </div>
                        <div className='col-7 d-flex flex-column justify-content-center ps-2 px-lg-3'>
                            <p className='fw-bold text-black text-size-6 text-size-lg-8'>Hydrogen Renewable Energy</p>
                            <p className='text-black'>Contrary to popular belief, Lorem Ipsum 45 BC,
                                making it over 2000 years old. Richard McClintock
                            </p>
                            <p className='pb-2 pt-4 text-black'>#Hydrogen #Global</p>
                            <Link to={'/'} className='fw-bold text-decoration-none text-black text-size-4 text-size-lg-5'>Read More <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LatestPublicationItem