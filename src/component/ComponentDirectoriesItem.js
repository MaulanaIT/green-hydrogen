import React, { Component } from 'react'

import { FaLongArrowAltRight, FaMapMarker } from 'react-icons/fa';

export class ComponentDirectoriesItem extends Component {
    render() {
        return (
            <>
                <div className='col-12 col-lg-6 m-0 row g-4'>
                    <div className='bg-white d-flex flex-wrap' style={{ borderRadius: '12px', minHeight: '250px' }}>
                        <div className='bg-light col-5 p-2'></div>
                        <div className='col-7 d-flex flex-column p-4'>
                            <p className='fw-bold text-black text-size-5 text-size-lg-8'>Jababeka Industrial</p>
                            <p className='text-black'><FaMapMarker /> Mampang, Prapatan</p>
                            <p className='mt-2 text-black'>Contrary to popular belief, Lorem Ipsum 45 BC, making it over 2000 years old. potential bla bla</p>
                            <p className='fw-bold mt-auto text-black'>Learn More <FaLongArrowAltRight /></p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ComponentDirectoriesItem