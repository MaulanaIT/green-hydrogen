import React, { Component } from 'react';
import { FaBuilding, FaCalendar, FaEnvelope, FaLock, FaLongArrowAltLeft, FaLongArrowAltRight, FaSearch } from 'react-icons/fa';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import IconVideoBanner1 from '../assets/company-directories/icon-video-banner-1.png';
import Separator from '../assets/company-directories/separate.png';
import Logo from '../assets/logo.png';

import ComponentDirectoriesItem from '../component/ComponentDirectoriesItem';
import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';

export class CompanyDirectories extends Component {

    SwitchLogin = () => {
        document.getElementById('login-form').classList.remove('d-none');
        document.getElementById('login-form').classList.add('d-flex');

        document.getElementById('signup-form').classList.add('d-none');
        document.getElementById('signup-form').classList.remove('d-flex');
    }

    SwitchSignup = () => {
        document.getElementById('login-form').classList.remove('d-flex');
        document.getElementById('login-form').classList.add('d-none');

        document.getElementById('signup-form').classList.add('d-flex');
        document.getElementById('signup-form').classList.remove('d-none');
    }

    render() {
        return (
            <>
                <div className='fluid-section-two' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                    <div className='align-items-center container-width d-flex flex-column justify-content-center h-100'>
                        <p className='fw-bold mt-lg-5 text-center text-size-20 text-size-lg-25'>COMPANY DIRECTORIES</p>
                        <p className='text-center text-size-5 text-size-lg-8'>Company Directorie</p>
                    </div>
                </div>

                <section className='container-width d-flex flex-wrap py-3 py-lg-5'>
                    <div id='signup-form' className='col-12 col-lg-7 d-flex flex-wrap pe-4'>
                        <div className='background-signup col-12 col-lg-4'>
                            <div className='text-center'>
                                <img src={Logo} alt="" />
                                <div className='text-center pt-3 pt-lg-5'>
                                    <p className='text-size-lg-8 text-size-6'>Have an Account?</p>
                                    <p>go to the login page great amount of new opportunities!</p>
                                </div>
                            </div>
                            <div className='pb-4 pt-5 w-100'>
                                <button type='button' className='text-size-lg-3 text-size-2' onClick={this.SwitchLogin}>Join</button>
                            </div>
                        </div>
                        <div className='bg-white col-12 col-lg-8 py-3 p-lg-5'>
                            <p className='mb-4 text-black text-size-6 text-size-lg-8'>Join us and discover great amount of new opportunities!</p>
                            <label htmlFor="input-company-name" className='text-black text-center w-100'>Company Name</label>
                            <div className='mb-2 position-relative w-100'>
                                <div className='icon-input-field-join-us' >
                                    <FaBuilding />
                                </div>
                                <input type="text" name='input-company-name' id='input-company-name' className='input-field-join-us' />
                            </div>
                            <label htmlFor="input-company-name" className='text-black text-center w-100'>Email</label>
                            <div className='mb-2 position-relative w-100'>
                                <div className='icon-input-field-join-us' >
                                    <FaEnvelope />
                                </div>
                                <input type="text" name='input-company-name' id='input-company-name' className='input-field-join-us' />
                            </div>
                            <label htmlFor="input-company-name" className='text-black text-center w-100'>Password</label>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-join-us' >
                                    <FaLock />
                                </div>
                                <input type="text" name='input-company-name' id='input-company-name' className='input-field-join-us' />
                            </div>
                            <p className='p-2 text-center text-secondary text-size-2 text-size-lg-2'>Are you already user? Login</p>
                            <button type='button' className='fw-bold p-2 secondary-background-color text-size-2 text-size-lg-3 text-white w-100'>JOIN US</button>
                        </div>
                    </div>
                    <div id='login-form' className='col-12 col-lg-7 d-none flex-wrap pe-4'>
                        <div className='bg-white col-12 col-lg-8 py-3 p-lg-5'>
                            <p className='mb-4 text-black text-size-6 text-size-lg-8'>Login for Editing Your Company</p>
                            <p className='mb-5 text-black'>Enter your Email and Password</p>
                            <label htmlFor="input-company-name" className='text-black text-center w-100'>Email</label>
                            <div className='mb-2 position-relative w-100'>
                                <div className='icon-input-field-join-us' >
                                    <FaEnvelope />
                                </div>
                                <input type="text" name='input-company-name' id='input-company-name' className='input-field-join-us' />
                            </div>
                            <label htmlFor="input-company-name" className='text-black text-center w-100'>Password</label>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-join-us' >
                                    <FaLock />
                                </div>
                                <input type="text" name='input-company-name' id='input-company-name' className='input-field-join-us' />
                            </div>
                            <div className='align-items-center d-flex justify-content-center mb-4 p-2'>
                                <input type="checkbox" className='me-2' />
                                <p className='text-center text-secondary text-size-2 text-size-lg-2'>Remember me</p>
                            </div>
                            <button type='button' className='fw-bold p-2 secondary-background-color text-size-2 text-size-lg-3 text-white w-100'>Login</button>
                        </div>
                        <div className='background-join col-12 col-lg-4'>
                            <div className='text-center'>
                                <img src={Logo} alt="" />
                                <div className='text-center pt-3 pt-lg-5'>
                                    <p className='text-size-lg-8 text-size-6'>New here?</p>
                                    <p>Join us and discover great amount of new opportunities!</p>
                                </div>
                            </div>
                            <div className='pb-4 pt-5 w-100'>
                                <button type='button' className='text-size-lg-3 text-size-2' onClick={this.SwitchSignup}>Join</button>
                            </div>
                        </div>
                    </div>
                    <div className='background-join-video col-12 col-lg-5 py-5'>
                        <img src={IconVideoBanner1} alt="" className='h-100 w-100' />
                    </div>
                </section>

                <div className='align-items-center d-flex flex-column justify-content-center mx-auto px-3 py-5' style={{ maxWidth: '600px' }}>
                    <p className='mb-2 text-center text-black text-size-10 text-size-lg-10' style={{ lineHeight: '2rem' }}>Company Directories</p>
                    <p className='mb-2 text-black text-center' style={{ lineHeight: '1.6rem' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old. Green Hydrogen</p>
                    <img src={Separator} alt="" />
                </div>

                <div className='container-width py-5'>
                    <div className='align-items-center third-background-color row gx-lg-2 justify-content-center mx-auto p-3' style={{ borderRadius: '12px', maxWidth: '800px' }}>
                        <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-search' id='input-search' className='input-field-filter text-white' placeholder='Search' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaCalendar />
                                </div>
                                <input type="text" name='input-filter-by-years' id='input-filter-by-years' className='input-field-filter text-white' placeholder='Filter By Years' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaCalendar />
                                </div>
                                <input type="text" name='input-filter-by-region' id='input-filter-by-region' className='input-field-filter text-white' placeholder='Filter By Region' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 m-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaCalendar />
                                </div>
                                <input type="text" name='input-filter-by-topic' id='input-filter-by-topic' className='input-field-filter text-white' placeholder='Filter By Topic' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-width row gx-4 gy-4 py-2 py-lg-5'>
                    <ComponentDirectoriesItem />
                    <ComponentDirectoriesItem />
                    <ComponentDirectoriesItem />
                    <ComponentDirectoriesItem />
                    <ComponentDirectoriesItem />
                    <ComponentDirectoriesItem />

                    <div className='align-items-center mx-auto d-flex justify-content-center px-5'>
                        <div className='p-3 p-md-4'>
                            <p className='cursor-pointer text-black'><FaLongArrowAltLeft /></p>
                        </div>
                        <div className='p-3 p-md-4'>
                            <p className='cursor-pointer text-black'>1</p>
                        </div>
                        <div className='p-3 p-md-4'>
                            <p className='cursor-pointer text-black'>2</p>
                        </div>
                        <div className='p-3 p-md-4'>
                            <p className='cursor-pointer text-black'>3</p>
                        </div>
                        <div className='p-3 p-md-4'>
                            <p className='cursor-pointer text-black'>4</p>
                        </div>
                        <div className='p-3 p-md-4'>
                            <p className='cursor-pointer text-black'>5</p>
                        </div>
                        <div className='p-3 p-md-4'>
                            <p className='cursor-pointer text-black'><FaLongArrowAltRight /></p>
                        </div>
                    </div>
                </div>

                <LatestNews />

                <Sponsor />
            </>
        )
    }
}

export default CompanyDirectories