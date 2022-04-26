import React, { Component } from 'react';
import { FaBuilding, FaEnvelope, FaLock, FaLongArrowAltLeft, FaLongArrowAltRight, FaSearch, FaRegCalendar, FaUserCircle, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';

import { divIcon } from 'leaflet';
import { useMemo, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import IconVideoBanner1 from '../assets/company-directories/icon-video-banner-1.gif';
import Logo from '../assets/logo.png';

import ComponentDirectoriesItem from '../component/ComponentDirectoriesItem';
import { CheckInputValidity, CheckTextareaValidity, ConfigAPI, HideLoader, InputFormatNumber, InputValidation, IsJsonString, ShowLoader, StorageURL, Translate } from '../component/helper';
import LatestNews from '../component/LatestNews';
import LatestPost from '../component/LatestPost';

import axios from 'axios';
import moment from 'moment';
import i18next from 'i18next';

function DraggableMarker(props) {
    const [draggable, setDraggable] = useState(true)
    const [position, setPosition] = useState([0.7893, 113.9213])
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }

                props.SetLocationMap(marker.getLatLng());
            },
        }),
        [],
    )

    const iconMarkup = renderToStaticMarkup(<FaMapMarkerAlt className='position-relative text-danger text-size-lg-10' style={{ left: '50%', top: '-100%', transform: 'translate(-50%, -50%)' }} />);
    const customMarkerIcon = divIcon({
        html: iconMarkup,
    });

    return (
        <Marker
            icon={customMarkerIcon}
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
        </Marker>
    )
}


export class CompanyDirectories extends Component {

    state = {
        dataCompany: [],
        dataCompanyNonFilter: [],

        htmlContent: [],
        htmlContentListCompany: [],
        htmlContentListPagination: [],
        htmlContentSidebarBottom: [],
        htmlContentSidebarTop: [],

        currentPage: 1,
        contentPerPage: 5,

        mapLat: 0,
        mapLng: 0,

        pageNumber: 'one'
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 5 : 6}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className='fluid-section-two position-relative' style={{ background: `url(${StorageURL(item?.content?.background_company_picture_1)}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='align-items-center container-width d-flex flex-wrap justify-content-center h-100 px-20'>
                                    <div className='col-12 col-md-6 text-center text-lg-start'>
                                        <p className='fw-bold text-size-6 text-size-lg-8'><Translate title={`COMPANY DIRECTORIES`} /></p>
                                        <p className='text-size-3 text-size-lg-4'><Translate title={`Company Directories`} /></p>
                                    </div>
                                    <div className='col-12 col-md-6 mt-0 text-center text-lg-end'>
                                        <p className='text-size-3 text-size-lg-4'><Translate title={`Hydrogen Indonesia`} /></p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                });
            }

            this.setState({ htmlContent: htmlContent });
        });

        axios.get('https://admin.greenhydrogen.my.id/api/company_directory', ConfigAPI()).then(response => {
            let data = response.data.data.company_directories;

            let htmlContentListCompany = [];
            let htmlContentListPagination = [];

            let totalPage = Math.ceil(data.length / this.state.contentPerPage);

            if (data) {
                data.map((item, index) => {
                    if (index >= this.state.contentPerPage * (this.state.currentPage - 1) && index < this.state.contentPerPage * this.state.currentPage) {
                        let description = IsJsonString(item.description) ? JSON.parse(item.description).filter(data => data.language === i18next.language)[0].description : item.description;

                        htmlContentListCompany.push(
                            <ComponentDirectoriesItem key={index} companyName={item.company_name} country={item?.address} description={description} detail={item} image={StorageURL(item?.photo)} name={item?.name} region={item?.region?.name} />
                        );
                    }
                });

                for (let i = 1; i <= totalPage; i++) {
                    htmlContentListPagination.push(
                        <div key={i} className={`${(i === this.state.currentPage) ? 'active' : ''} pagination-list`} onClick={() => this.SelectPage(i)}>
                            <p className='pagination-item'>{i}</p>
                        </div>
                    );
                }

                if (totalPage > 1) {
                    htmlContentListPagination.push(
                        <div key={this.state.contentPerPage} className='pagination-list' onClick={() => this.SelectPage(this.state.currentPage >= data.length / this.state.contentPerPage ? this.state.currentPage : this.state.currentPage + 1)}>
                            <p className='pagination-item'><FaLongArrowAltRight /></p>
                        </div>
                    );
                }
            }

            this.setState({ dataCompany: data, dataCompanyNonFilter: data, htmlContentListCompany: htmlContentListCompany, htmlContentListPagination: htmlContentListPagination });
        });

        axios.get('https://admin.greenhydrogen.my.id/api/news/home', ConfigAPI()).then(response => {
            let dataSidebarBottom = response.data.data.sidebar_down;
            let dataSidebarTop = response.data.data.sidebar_up;

            let htmlContentSidebarBottom = [];
            let htmlContentSidebarTop = [];

            if (dataSidebarBottom.length > 0) {
                dataSidebarBottom.map((item, index) => {
                    if (index === 0) {
                        htmlContentSidebarBottom.push(
                            <p key={index - 1} className='fw-bold mb-3 text-black text-size-5 text-size-lg-5' style={{ textTransform: 'uppercase' }}><Translate title={`Latest`} /> {item?.category?.translation?.name} <Translate title={`Post`} /></p>
                        );
                    }

                    htmlContentSidebarBottom.push(
                        <LatestPost key={index} image={StorageURL(item?.embed)} date={item?.created_at} detail={item} title={item?.translation?.title} />
                    );
                });
            }

            if (dataSidebarTop.length > 0) {
                // dataSidebarTop.map((item, index) => {
                htmlContentSidebarTop.push(
                    <div className='bg-white' style={{ borderRadius: 12 }}>
                        <div className='container-image image-news overflow-hidden' style={{ borderRadius: 12 }}>
                            <img src={StorageURL(dataSidebarTop[0]?.embed)} alt="" />
                        </div>
                        <div className='px-3'>
                            <p className='align-items-center d-flex py-3 text-black'><FaRegCalendar className='me-2' /> {moment(dataSidebarTop[0]?.created_at).format('MMMM DD, YYYY')}</p>
                            <Link to={`/news-event/news/${dataSidebarTop[0]?.translation?.title}`} state={{ data: dataSidebarTop[0] }} className='fw-bold hover-text-button text-clamp text-size-5 text-size-lg-6'>{dataSidebarTop[0]?.translation?.title}</Link>
                            <p className='my-2 text-clamp text-secondary' dangerouslySetInnerHTML={{ __html: dataSidebarTop[0]?.translation?.description }}></p>
                            <p className='align-items-center d-flex py-3 text-black'><FaUserCircle className='text-size-10 text-size-lg-10 me-2' /> {dataSidebarTop[0]?.admin?.name}</p>
                        </div>
                    </div>
                );
                // });
            }

            this.setState({ htmlContentSidebarBottom: htmlContentSidebarBottom, htmlContentSidebarTop: htmlContentSidebarTop });
        });
    }

    Filter = () => {
        let search = document.getElementById('input-search').value;
        let years = document.getElementById('input-filter-by-years').value;
        let region = document.getElementById('input-filter-by-region').value;
        let topic = document.getElementById('input-filter-by-topic').value;

        let data = this.state.dataCompanyNonFilter;

        data = data.filter(item => {
            if (item?.description?.toLowerCase().includes(search.toLowerCase()) && moment(item?.created_at).format('YYYY').includes(years) && item?.region?.name?.toLowerCase().includes(region.toLowerCase()) && item?.description?.toLowerCase().includes(topic.toLowerCase())) {
                return item;
            }
        });

        let htmlContentListCompany = [];
        let htmlContentListPagination = [];

        let totalPage = Math.ceil(data.length / this.state.contentPerPage);

        if (data) {
            data.map((item, index) => {
                if (index >= this.state.contentPerPage * (this.state.currentPage - 1) && index < this.state.contentPerPage * this.state.currentPage) {
                    let description = IsJsonString(item.description) ? JSON.parse(item.description).filter(data => data.language === i18next.language)[0].description : item.description;

                    htmlContentListCompany.push(
                        <ComponentDirectoriesItem key={index} companyName={item.company_name} country={item?.address} description={description} detail={item} image={StorageURL(item?.photo)} name={item?.name} region={item?.region?.name} />
                    );
                }
            });

            for (let i = 1; i <= totalPage; i++) {
                htmlContentListPagination.push(
                    <div key={i} className={`${(i === this.state.currentPage) ? 'active' : ''} pagination-list`} onClick={() => this.SelectPage(i)}>
                        <p className='pagination-item'>{i}</p>
                    </div>
                );
            }

            if (totalPage > 1) {
                htmlContentListPagination.push(
                    <div key={this.state.contentPerPage} className='pagination-list' onClick={() => this.SelectPage(this.state.currentPage >= data.length / this.state.contentPerPage ? this.state.currentPage : this.state.currentPage + 1)}>
                        <p className='pagination-item'><FaLongArrowAltRight /></p>
                    </div>
                );
            }
        }

        this.setState({ dataCompany: data, htmlContentListCompany: htmlContentListCompany, htmlContentListPagination: htmlContentListPagination });
    }

    Login = () => {
        if (CheckInputValidity('login-form')) {
            const formData = new FormData();

            let email = document.getElementById('input-login-email').value;
            let password = document.getElementById('input-login-password').value;

            formData.append('email', email);
            formData.append('password', password);

            axios.post('https://admin.greenhydrogen.my.id/api/company_directory/login', formData, ConfigAPI()).then(response => {
                if (response.data.data.token) {
                    if (document.getElementById('remember-login').checked) {
                        localStorage.setItem('token', response.data.data.token);
                    } else {
                        sessionStorage.setItem('token', response.data.data.token);
                    }

                    window.location.href = '/company-profile';
                }
            });
        }
    }

    Register = () => {
        if (CheckInputValidity(`signup-step-five`)) {

            ShowLoader();

            const formData = new FormData();

            let companyName = document.getElementById('input-register-company-name').value;
            let email = document.getElementById('input-register-email').value;
            let password = document.getElementById('input-register-password').value;
            let contact = document.getElementById('input-register-contact').value;
            let website = document.getElementById('input-register-website').value;
            let companyDescription = document.getElementById('input-register-company-description').value;
            let companyAddress = document.getElementById('input-register-company-address').value;
            // let companyAddressDetail = document.getElementById('input-register-company-address-detail').value;
            let photo = document.getElementById('input-register-photo').files[0];

            formData.append('name', companyName);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('contact', contact);
            formData.append('website', website);
            formData.append('description', companyDescription);
            formData.append('address', companyAddress);
            formData.append('photo', photo);
            formData.append('lat', this.state.mapLat);
            formData.append('lng', this.state.mapLng);

            axios.post('https://admin.greenhydrogen.my.id/api/company_directory/register', formData, ConfigAPI()).then(response => {
                document.getElementById('popup-response').classList.add('active');
                document.getElementById('popup-response-text').innerHTML = 'Registrasi data berhasil...';

                HideLoader();

                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }).catch(error => {
                document.getElementById('popup-response').classList.add('active');
                document.getElementById('popup-response-text').innerHTML = 'Terjadi kesalahan dalam proses registrasi...';

                HideLoader();

                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            });
        }
    }

    SelectPage = (page) => {
        let data = this.state.dataCompany;

        let htmlContentListCompany = [];
        let htmlContentListPagination = [];

        let totalPage = Math.ceil(data.length / this.state.contentPerPage);

        if (data) {
            data.map((item, index) => {
                if (index >= this.state.contentPerPage * (page - 1) && index < this.state.contentPerPage * page) {
                    let description = IsJsonString(item.description) ? JSON.parse(item.description).filter(data => data.language === i18next.language)[0].description : item.description;

                    htmlContentListCompany.push(
                        <ComponentDirectoriesItem key={index} companyName={item.company_name} country={item?.address} description={description} detail={item} image={StorageURL(item?.photo)} name={item?.name} region={item?.region?.name} />
                    );
                }
            });

            if (!(page == 1)) {
                htmlContentListPagination.push(
                    <div className='pagination-list' onClick={() => this.SelectPage(this.state.currentPage === 1 ? this.state.currentPage : this.state.currentPage - 1)}>
                        <p className='pagination-item'><FaLongArrowAltLeft /></p>
                    </div>
                );
            }

            for (let i = 1; i <= totalPage; i++) {
                htmlContentListPagination.push(
                    <div key={i} className={`${(i === page) ? 'active' : ''} pagination-list`} onClick={() => this.SelectPage(i)}>
                        <p className='pagination-item'>{i}</p>
                    </div>
                );
            }

            if (!(page == totalPage)) {
                htmlContentListPagination.push(
                    <div className='pagination-list' onClick={() => this.SelectPage(page >= data.length / this.state.contentPerPage ? page : page + 1)}>
                        <p className='pagination-item'><FaLongArrowAltRight /></p>
                    </div>
                );
            }
        }

        this.setState({ currentPage: page, htmlContentListCompany: htmlContentListCompany, htmlContentListPagination: htmlContentListPagination });
    }

    SetLocationMap = (data) => {
        this.setState({ mapLat: data.lat, mapLng: data.lng });
    }

    SignupBack = (currentNumber, nextNumber) => {
        document.getElementById(`signup-step-${currentNumber}`).classList.add('d-none');
        document.getElementById(`signup-step-${currentNumber}`).classList.remove('d-flex');

        document.getElementById(`signup-step-${nextNumber}`).classList.remove('d-none');
        document.getElementById(`signup-step-${nextNumber}`).classList.add('d-flex');
    }

    SignupStep = (currentNumber, nextNumber) => {
        if (CheckInputValidity(`signup-step-${currentNumber}`) || CheckTextareaValidity(`signup-step-${currentNumber}`)) {
            document.getElementById(`signup-step-${currentNumber}`).classList.add('d-none');
            document.getElementById(`signup-step-${currentNumber}`).classList.remove('d-flex');

            document.getElementById(`signup-step-${nextNumber}`).classList.remove('d-none');
            document.getElementById(`signup-step-${nextNumber}`).classList.add('d-flex');
        }

        this.setState({ pageNumber: nextNumber });
    }

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
                {this.state.htmlContent}

                <div className='align-items-stretch container-width d-flex flex-wrap justify-content-center py-3 py-lg-5 px-20'>
                    {(localStorage.getItem('token') || sessionStorage.getItem('token')) ?
                        <div className='background-join-video col-12 col-lg-4 py-5' style={{ borderRadius: 12 }}>
                            <img src={IconVideoBanner1} alt="" className='h-100 w-100' />
                        </div>
                        :
                        <>
                            <div id='signup-form' className='col-12 col-lg d-flex flex-wrap'>
                                <form id='signup-step-one' className='align-items-stretch d-flex flex-wrap'>
                                    <div className='background-signup col-12 col-lg-4'>
                                        <div className='text-center'>
                                            <img src={Logo} alt="" />
                                            <div className='text-center pt-3 pt-lg-5'>
                                                <p className='text-size-lg-8 text-size-6'><Translate title={`Have an Account`} />?</p>
                                                <p><Translate title={`go to the login page great amount of new opportunities`} />!</p>
                                            </div>
                                        </div>
                                        <div className='pb-4 pt-5 w-100'>
                                            <button type='button' className='text-size-lg-3 text-size-2' onClick={() => { window.open('https://admin.greenhydrogen.my.id/company/login', '_blank') }}><Translate title={`Login`} /></button>
                                        </div>
                                    </div>
                                    <div className='bg-white col-12 col-lg-8 py-3 px-lg-5'>
                                        <p className='fw-bold primary-color text-center text-size-5 text-size-lg-6'><Translate title={`Register your company here`} /></p>
                                        <p className='mb-3 primary-color text-center text-size-3 text-size-lg-4'><Translate title={`to find out the latest project and be connected to your new potential network in Green Hydrogen Indonesia`} /></p>
                                        <label htmlFor="input-register-company-name" className='text-black text-center w-100'><Translate title={`Company Name`} /></label>
                                        <div className='mb-2 position-relative w-100'>
                                            <div className='icon-input-field-join-us' >
                                                <FaBuilding />
                                            </div>
                                            <input type="text" name='input-register-company-name' id='input-register-company-name' className='input-field-join-us' error-text="Company name is required" onChange={InputValidation} required />
                                        </div>
                                        <label htmlFor="input-register-email" className='text-black text-center w-100'><Translate title={`Email`} /></label>
                                        <div className='mb-2 position-relative w-100'>
                                            <div className='icon-input-field-join-us' >
                                                <FaEnvelope />
                                            </div>
                                            <input type="email" name='input-register-email' id='input-register-email' className='input-field-join-us' autoComplete='username' error-text="Email is not valid" onChange={InputValidation} required />
                                        </div>
                                        <label htmlFor="input-register-password" className='text-black text-center w-100'><Translate title={`Password`} /></label>
                                        <div className='position-relative w-100'>
                                            <div className='icon-input-field-join-us' >
                                                <FaLock />
                                            </div>
                                            <input type="password" name='input-register-password' id='input-register-password' className='input-field-join-us' minLength={8} autoComplete="current-password" error-text="Password minimal 8 character" onChange={InputValidation} required />
                                        </div>
                                        <p className='p-2 text-center text-secondary text-size-2 text-size-lg-2'><Translate title={`Are you already user?`} /><span className='cursor-pointer ms-2 primary-color' onClick={() => { window.open('https://admin.greenhydrogen.my.id/company/login', '_blank') }}><Translate title={`Login`} /></span></p>
                                        <button type='button' className='fw-bold p-2 secondary-background-color secondary-hover-color text-white w-100' onClick={() => this.SignupStep('one', 'two')}><Translate title={`JOIN US`} /></button >
                                    </div>
                                </form>
                                <form id='signup-step-two' className='align-items-stretch d-none flex-wrap'>
                                    <div className='bg-white d-flex flex-column justify-content-center gap-2 col-12 col-lg-4 p-3'>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 1</p>
                                            <p className='text-white'>Registration</p>
                                        </div>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 2</p>
                                            <p className='text-white'>Company Identity</p>
                                        </div>
                                        <div className='step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 3</p>
                                            <p className='text-white'>Description Company & Project</p>
                                        </div>
                                        <div className='step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 4</p>
                                            <p className='text-white'>Company Address</p>
                                        </div>
                                        <div className='step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 5</p>
                                            <p className='text-white'>Mapping</p>
                                        </div>
                                    </div>
                                    <div className='bg-white d-flex flex-column justify-content-between col-12 col-lg-8 py-3 px-lg-5'>
                                        <div>
                                            <p className='mb-4 text-black text-size-6 text-size-lg-8'><Translate title={`Join us and discover great amount of new opportunities`} />!</p>
                                            <label htmlFor="input-register-contact" className='text-black text-center w-100'><Translate title={`Contact Number`} /></label>
                                            <div className='mb-2 position-relative w-100'>
                                                <div className='icon-input-field-join-us' >
                                                    <FaBuilding />
                                                </div>
                                                <input type="text" name='input-register-contact' id='input-register-contact' className='input-field-join-us' error-text="Contact is required" onChange={InputValidation} required onInput={InputFormatNumber} />
                                            </div>
                                            <label htmlFor="input-register-website" className='text-black text-center w-100'><Translate title={`Website`} /></label>
                                            <div className='mb-2 position-relative w-100'>
                                                <div className='icon-input-field-join-us' >
                                                    <FaEnvelope />
                                                </div>
                                                <input type="text" name='input-register-website' id='input-register-website' className='input-field-join-us' required />
                                            </div>
                                        </div>
                                        <div className='button-step-container'>
                                            <button type='button' className='fw-bold p-2 secondary-background-color secondary-hover-color text-white w-100' onClick={() => this.SignupBack('two', 'one')}><Translate title={`Previous`} /></button>
                                            <button type='button' className='fw-bold p-2 secondary-background-color secondary-hover-color text-white w-100' onClick={() => this.SignupStep('two', 'three')}><Translate title={`Next`} /></button>
                                            <button type='button' className='fw-bold p-2 secondary-background-color-disabled text-white w-100'><Translate title={`Finish`} /></button>
                                        </div>
                                    </div>
                                </form>
                                <form id='signup-step-three' className='align-items-stretch d-none flex-wrap'>
                                    <div className='bg-white d-flex flex-column justify-content-center gap-2 col-12 col-lg-4 p-3'>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 1</p>
                                            <p className='text-white'>Registration</p>
                                        </div>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 2</p>
                                            <p className='text-white'>Company Identity</p>
                                        </div>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 3</p>
                                            <p className='text-white'>Description Company & Project</p>
                                        </div>
                                        <div className='step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 4</p>
                                            <p className='text-white'>Company Address</p>
                                        </div>
                                        <div className='step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 5</p>
                                            <p className='text-white'>Mapping</p>
                                        </div>
                                    </div>
                                    <div className='bg-white d-flex flex-column justify-content-between col-12 col-lg-8 py-3 px-lg-5'>
                                        <div>
                                            <p className='mb-4 text-black text-size-6 text-size-lg-8'><Translate title={`Join us and discover great amount of new opportunities`} />!</p>
                                            <label htmlFor="input-register-company-description" className='text-black text-center w-100'><Translate title={`Company Detail`} /></label>
                                            <div className='mb-2 position-relative w-100'>
                                                <textarea name='input-register-company-description' id='input-register-company-description' className='input-field-join-us' cols="30" rows="6" minLength={20} error-text="Company detail required minimal 20 character" onChange={InputValidation} required></textarea>
                                            </div>
                                        </div>
                                        <div className='button-step-container'>
                                            <button type='button' className='fw-bold p-2 secondary-background-color secondary-hover-color text-white w-100' onClick={() => this.SignupBack('three', 'two')}><Translate title={`Previous`} /></button>
                                            <button type='button' className='fw-bold p-2 secondary-background-color secondary-hover-color text-white w-100' onClick={() => this.SignupStep('three', 'four')}><Translate title={`Next`} /></button>
                                            <button type='button' className='fw-bold p-2 secondary-background-color-disabled text-white w-100'><Translate title={`Finish`} /></button>
                                        </div>
                                    </div>
                                </form>
                                <form id='signup-step-four' className='align-items-stretch d-none flex-wrap'>
                                    <div className='bg-white d-flex flex-column justify-content-center gap-2 col-12 col-lg-4 p-3'>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 1</p>
                                            <p className='text-white'>Registration</p>
                                        </div>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 2</p>
                                            <p className='text-white'>Company Identity</p>
                                        </div>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 3</p>
                                            <p className='text-white'>Description Company & Project</p>
                                        </div>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 4</p>
                                            <p className='text-white'>Company Address</p>
                                        </div>
                                        <div className='step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 5</p>
                                            <p className='text-white'>Mapping</p>
                                        </div>
                                    </div>
                                    <div className='bg-white d-flex flex-column justify-content-between col-12 col-lg-8 py-3 px-lg-5'>
                                        <div>
                                            <p className='mb-4 text-black text-size-6 text-size-lg-8'><Translate title={`Join us and discover great amount of new opportunities`} />!</p>
                                            <label htmlFor="input-register-company-address" className='text-black text-center w-100'><Translate title={`Company Address`} /></label>
                                            <div className='mb-2 position-relative w-100'>
                                                <div className='icon-input-field-join-us' >
                                                    <FaBuilding />
                                                </div>
                                                <input type="text" name='input-register-company-address' id='input-register-company-address' className='input-field-join-us' error-text="Address is required" onChange={InputValidation} required />
                                            </div>
                                            <div id='map' className='mb-2 position-relative w-100'>
                                                {(this.state.pageNumber === 'four') ?
                                                    <MapContainer center={[0.7893, 113.9213]} zoom={4} style={{ height: 210, width: '100%' }}>
                                                        <TileLayer
                                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                        />
                                                        <DraggableMarker SetLocationMap={this.SetLocationMap} />
                                                    </MapContainer>
                                                    :
                                                    null
                                                }
                                            </div>
                                        </div>
                                        <div className='button-step-container'>
                                            <button type='button' className='fw-bold p-2 secondary-background-color secondary-hover-color text-white w-100' onClick={() => this.SignupBack('four', 'three')}><Translate title={`Previous`} /></button>
                                            <button type='button' className='fw-bold p-2 secondary-background-color secondary-hover-color text-white w-100' onClick={() => this.SignupStep('four', 'five')}><Translate title={`Next`} /></button>
                                            <button type='button' className='fw-bold p-2 secondary-background-color-disabled text-white w-100'><Translate title={`Finish`} /></button>
                                        </div>
                                    </div>
                                </form>
                                <form id='signup-step-five' className='align-items-stretch d-none flex-wrap'>
                                    <div className='bg-white d-flex flex-column justify-content-center gap-2 col-12 col-lg-4 p-3'>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 1</p>
                                            <p className='text-white'>Registration</p>
                                        </div>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 2</p>
                                            <p className='text-white'>Company Identity</p>
                                        </div>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 3</p>
                                            <p className='text-white'>Description Company & Project</p>
                                        </div>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 4</p>
                                            <p className='text-white'>Company Address</p>
                                        </div>
                                        <div className='active step'>
                                            <p className='fw-bold text-size-3 text-size-lg-5 text-white'>Step 5</p>
                                            <p className='text-white'>Mapping</p>
                                        </div>
                                    </div>
                                    <div className='bg-white d-flex flex-column justify-content-between col-12 col-lg-8 py-3 px-lg-5'>
                                        <div>
                                            <p className='mb-4 text-black text-size-6 text-size-lg-8'><Translate title={`Join us and discover great amount of new opportunities`} />!</p>
                                            <label htmlFor="input-register-photo" className='text-black text-center w-100'><Translate title={`Your Company Profile Photo`} /></label>
                                            <div className='company-directory-upload-photo'>
                                                <input type="file" name='input-register-photo' id='input-register-photo' error-text="Photo is required" accept='.png, .jpg, .jpeg' required />
                                                {/* <button type='button' className='fw-bold p-2 secondary-background-color-disabled px-5 text-white'><Translate title={`Upload`} /></button> */}
                                            </div>
                                        </div>
                                        <div className='button-step-container'>
                                            <button type='button' className='fw-bold p-2 secondary-background-color secondary-hover-color text-white w-100' onClick={() => this.SignupBack('five', 'four')}><Translate title={`Previous`} /></button>
                                            <button type='button' className='fw-bold p-2 secondary-background-color-disabled text-white w-100'><Translate title={`Next`} /></button>
                                            <button type='button' className='fw-bold p-2 secondary-background-color secondary-hover-color text-center text-white w-100' onClick={this.Register}><Translate title={`Finish`} /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <form id='login-form' className='col-12 col-lg d-none pe-lg-4'>
                                <div className='bg-white d-flex flex-column justify-content-between col-12 col-lg-8 py-3 px-lg-5'>
                                    <div>
                                        <p className='mb-4 text-black text-size-6 text-size-lg-8'><Translate title={`Login for Editing Your Company`} /></p>
                                        <p className='mb-5 text-black'><Translate title={`Enter your Email and Password`} /></p>
                                        <label htmlFor="input-login-email" className='text-black text-center w-100'><Translate title={`Email`} /></label>
                                        <div className='mb-2 position-relative w-100'>
                                            <div className='icon-input-field-join-us' >
                                                <FaEnvelope />
                                            </div>
                                            <input type="email" name='input-login-email' id='input-login-email' className='input-field-join-us' autoComplete='username' error-text='Email is not valid' onChange={InputValidation} required />
                                        </div>
                                        <label htmlFor="input-login-password" className='text-black text-center w-100'><Translate title={`Password`} /></label>
                                        <div className='position-relative w-100'>
                                            <div className='icon-input-field-join-us' >
                                                <FaLock />
                                            </div>
                                            <input type="password" name='input-login-password' id='input-login-password' className='input-field-join-us' error-text='Password is required' autoComplete="current-password" onChange={InputValidation} required />
                                        </div>
                                        <div className='align-items-center d-flex justify-content-center mb-4 p-2'>
                                            <input id='remember-login' type="checkbox" className='me-2' />
                                            <p className='text-center text-secondary text-size-2 text-size-lg-2'><Translate title={`Remember Me`} /></p>
                                        </div>
                                    </div>
                                    <button type='button' className='fw-bold p-2 secondary-background-color text-center text-white w-100' onClick={this.Login}><Translate title={`Login`} /></button>
                                    <p className='text-danger'></p>
                                </div>
                                <div className='background-join col-12 col-lg-4'>
                                    <div className='text-center'>
                                        <img src={Logo} alt="" />
                                        <div className='text-center pt-3 pt-lg-5'>
                                            <p className='text-size-lg-8 text-size-6'><Translate title={`New here`} />?</p>
                                            <p><Translate title={`Join us and discover great amount of new opportunities`} />!</p>
                                        </div>
                                    </div>
                                    <div className='pb-4 pt-5 w-100'>
                                        <button type='button' className='text-size-lg-3 text-size-2' onClick={this.SwitchSignup}><Translate title={`Join Us`} /></button>
                                    </div>
                                </div>
                            </form>
                            <div className='background-join-video col-12 col-lg-4 py-5'>
                                <img src={IconVideoBanner1} alt="" className='h-100 w-100' />
                            </div>
                        </>
                    }
                </div>

                <div className='container-width px-20'>
                    <div className='align-items-center bg-white row gx-lg-2 justify-content-center mx-auto p-3' style={{ borderRadius: '12px', maxWidth: '800px' }}>
                        <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-search' id='input-search' className='input-field-filter text-white' onChange={this.Filter} placeholder='Search' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-filter-by-years' id='input-filter-by-years' className='input-field-filter text-white' onChange={this.Filter} onInput={InputFormatNumber} placeholder='Filter By Years' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-filter-by-region' id='input-filter-by-region' className='input-field-filter text-white' onChange={this.Filter} placeholder='Filter By Region' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 m-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-filter-by-topic' id='input-filter-by-topic' className='input-field-filter text-white' onChange={this.Filter} placeholder='Filter By Topic' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-width row gx-4 gy-4 pb-2 pb-lg-5 pt-3'>
                    <div className='col-12 col-lg-8 d-flex flex-column justify-content-between pe-lg-2'>
                        <div>
                            {this.state.htmlContentListCompany}
                        </div>

                        <div className='align-items-center d-flex pt-5'>
                            {this.state.htmlContentListPagination}
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 ps-lg-2'>
                        <div className='border-bottom mb-4'>
                            {this.state.htmlContentSidebarTop}
                        </div>
                        <div className='pb-4'>
                            {this.state.htmlContentSidebarBottom}
                        </div>
                    </div>
                </div>

                <LatestNews />
            </>
        )
    }
}

export default CompanyDirectories