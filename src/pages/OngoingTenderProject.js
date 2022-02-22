import React from 'react';
import { FaInfoCircle, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import Separator from '../assets/company-directories/separate.png';
import ComponentDirectoriesItem from '../component/ComponentDirectoriesItem';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';

export default function OngoingTenderProject() {
    return (
        <>
            <div className='align-items-center d-flex flex-column fluid-section-two justify-content-center' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                <p className='fw-bold text-size-20 text-size-lg-25'>NEWS & EVENT</p>
                <p className='text-size-5 text-size-lg-8'>News & Event | Tender & Project</p>
            </div>

            <div className='align-items-center d-flex flex-column justify-content-center mx-auto p-5' style={{ maxWidth: '600px' }}>
                <p className='mb-2 text-center text-black text-size-10 text-size-lg-10' style={{lineHeight: '2rem'}}>Mapping Tender & Project</p>
                <p className='mb-2 text-black text-center' style={{ lineHeight: '1.6rem' }}>Contrary to popular belief,
                    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Green Hydrogen</p>
                <img src={Separator} alt="" />
            </div>

            <div className='mx-auto py-5' style={{ maxWidth: '1200px' }}>
                <div className='bg-secondary w-100' style={{ height: '400px' }}></div>
            </div>

            <div className='mx-auto py-5' style={{ maxWidth: '1200px' }}>
                <div className='border-top mb-2 w-100'>
                    <div className='align-items-center p-3 row'>
                        <div className='col-12 col-lg-4'>
                            <p className='fw-bold text-black'>Location * <FaInfoCircle /></p>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <select name="select-provinsi" id="select-provinsi" className='form-select'>
                                <option value="All">All</option>
                            </select>
                        </div>
                        <div className='align-items-center d-flex col-12 col-lg-4'>
                            <select name="select-kota" id="select-kota" className='form-select'>
                                <option value="Nothing selected">Nothing selected</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='border-top mb-2 w-100'>
                    <div className='p-3'>
                        <div className='align-items-center d-flex col-12 col-lg-4'>
                            <p className='fw-bold text-black'>Land Status <FaInfoCircle /></p>
                        </div>
                        <div className='align-items-center row py-2'>
                            <div className='col-12 col-lg-4 ps-5'>
                                <p className='text-black'>Status</p>
                            </div>
                            <div className='col-12 col-lg-8'>
                                <select name="select-provinsi" id="select-provinsi" className='form-select'>
                                    <option value="All">All</option>
                                </select>
                            </div>
                        </div>
                        <div className='align-items-center row py-2'>
                            <div className='col-12 col-lg-4 ps-5'>
                                <p className='text-black'>Sale Price</p>
                            </div>
                            <div className='col-12 col-lg-4'>
                                <div className='input-group'>
                                    <span className='input-group-text'>$</span>
                                    <input type="text" name='input-minimum-sale-price' id='input-minimum-sale-price' className='form-control' placeholder='Minimum' />
                                    <span className='input-group-text'>m<sup>2</sup></span>
                                </div>
                            </div>
                            <div className='col-12 col-lg-4'>
                                <div className='input-group'>
                                    <span className='input-group-text'>$</span>
                                    <input type="text" name='input-minimum-sale-price' id='input-minimum-sale-price' className='form-control' placeholder='Maximum' />
                                    <span className='input-group-text'>m<sup>2</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='align-items-center row py-2'>
                            <div className='col-12 col-lg-4 ps-5'>
                                <p className='text-black'>Lease Price</p>
                            </div>
                            <div className='col-12 col-lg-4'>
                                <div className='input-group'>
                                    <span className='input-group-text'>$</span>
                                    <input type="text" name='input-minimum-sale-price' id='input-minimum-sale-price' className='form-control' placeholder='Minimum' />
                                    <span className='input-group-text'>m<sup>2</sup>/year</span>
                                </div>
                            </div>
                            <div className='col-12 col-lg-4'>
                                <div className='input-group'>
                                    <span className='input-group-text'>$</span>
                                    <input type="text" name='input-minimum-sale-price' id='input-minimum-sale-price' className='form-control' placeholder='Maximum' />
                                    <span className='input-group-text'>m<sup>2</sup>/year</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-top mb-2 w-100'>
                    <div className='p-3'>
                        <div className='align-items-center row'>
                            <div className='col-12 col-lg-4'>
                                <p className='fw-bold text-black'>Plot Size <FaInfoCircle /></p>
                            </div>
                            <div className='col-12 col-lg-4'>
                                <div className='input-group'>
                                    <input type="text" name='input-minimum-sale-price' id='input-minimum-sale-price' className='form-control' placeholder='Minimum' />
                                    <span className='input-group-text'>m<sup>2</sup></span>
                                </div>
                            </div>
                            <div className='col-12 col-lg-4'>
                                <div className='input-group'>
                                    <input type="text" name='input-minimum-sale-price' id='input-minimum-sale-price' className='form-control' placeholder='Maximum' />
                                    <span className='input-group-text'>m<sup>2</sup></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='justify-content-end mb-2 row'>
                    <div className='col-12 col-lg-auto'>
                        <button type='button' className='btn border text-black' style={{ borderRadius: '12px', width: '150px' }}>Clear All</button>
                    </div>
                    <div className='col-12 col-lg-auto'>
                        <button type='button' className='btn primary-background-color text-white' style={{ borderRadius: '12px', width: '150px' }}>Apply Filter</button>
                    </div>
                </div>
            </div>

            <div className='bg-secondary p-2 p-lg-5'>
                <div className='mx-auto row' style={{ maxWidth: '1200px' }}>
                    <ComponentDirectoriesItem />
                    <ComponentDirectoriesItem />
                    <ComponentDirectoriesItem />
                    <ComponentDirectoriesItem />
                    <ComponentDirectoriesItem />
                    <ComponentDirectoriesItem />

                    <div className='align-items-center mx-auto d-flex justify-content-center pt-5' style={{ maxWidth: '1200px' }}>
                        <div className='p-4'>
                            <p className='cursor-pointer'><FaLongArrowAltLeft /></p>
                        </div>
                        <div className='p-4'>
                            <p className='cursor-pointer'>1</p>
                        </div>
                        <div className='p-4'>
                            <p className='cursor-pointer'>2</p>
                        </div>
                        <div className='p-4'>
                            <p className='cursor-pointer'>3</p>
                        </div>
                        <div className='p-4'>
                            <p className='cursor-pointer'>4</p>
                        </div>
                        <div className='p-4'>
                            <p className='cursor-pointer'>5</p>
                        </div>
                        <div className='p-4'>
                            <p className='cursor-pointer'><FaLongArrowAltRight /></p>
                        </div>
                    </div>
                </div>
            </div>

            <LatestNews />

            <Sponsor />
        </>
    );
}