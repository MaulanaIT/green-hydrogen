import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PublicationItem extends Component {
    render() {
        return (
            <>
                <div className='col-12 col-lg-4 wow fadeIn'>
                    <div className='publication-card'>
                        <div className='d-flex'>
                            <div className='bg-secondary col-4 pe-4'>

                            </div>
                            <div className='col-8 ps-2 py-2 px-lg-4 py-lg-4'>
                                <p className='fw-bold text-size-lg-4 text-black'>Hydrogen Renewable Energy</p>
                                <p className='text-black'>Contrary to popular belief, Lorem Ipsum 45 BC,
                                    making it over 2000 years old. Richard McClintock
                                </p>
                                <p className='text-black'>#Hydrogen #Global</p>
                                <Link to={'/'} className='text-size-lg-3 fw-bold text-decoration-none text-black'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PublicationItem