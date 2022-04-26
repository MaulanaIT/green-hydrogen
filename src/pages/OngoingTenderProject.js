import React, { Component, useEffect } from 'react';
import { FaInfoCircle, FaSearch, FaLongArrowAltRight, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';

import { divIcon, map } from 'leaflet';
import { useRef } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import ProjectItem from '../component/ProjectItem';

import LatestNews from '../component/LatestNews';
import { ConfigAPI, InputFormatNumber, OpenGoogleMaps, SetPriceFormat, StorageURL, Translate } from '../component/helper';

import axios from 'axios';
import { Link } from 'react-router-dom';

function CustomMarker(props) {
    const markerRef = useRef(null)
    const map = useMap();

    const iconMarkup = renderToStaticMarkup(
        <div className='pin-marker'>
            <FaMapMarkerAlt />
            <p className='name'>{props.name}</p>
        </div>
    );
    const customMarkerIcon = divIcon({
        html: iconMarkup,
    });

    return (
        <Marker
            key={props.index}
            icon={customMarkerIcon}
            eventHandlers={{
                click: () => {
                    props.detailProject(props.data);
                    map.flyTo([props.lat, props.lng], 16);
                }
            }}
            position={[props.lat, props.lng]}
            ref={markerRef}>
        </Marker>
    )
}
function CustomRegion(props) {
    const markerRef = useRef(null)
    const map = useMap();

    const iconMarkup = renderToStaticMarkup(
        <div className='pin-region' style={{ "--background-pin-region": props.total < 7 ? '#4fe01d' : props.total < 13 ? '#ffff00' : props.total < 19 ? '#ffa500' : props.total < 25 ? '#0095ff' : 'red' }}>
            <p className='name'>{props.total}</p>
        </div>
    );
    const customMarkerIcon = divIcon({
        html: iconMarkup,
    });

    return (
        <Marker
            key={props.index}
            icon={customMarkerIcon}
            eventHandlers={{
                click: () => {
                    map.flyTo([props.lat, props.lng], 8);
                }
            }}
            position={[props.lat, props.lng]}
            ref={markerRef}>
        </Marker>
    )
}

function MapZoom(props) {

    const map = useMap();

    useEffect(() => {
        map.on("zoomend", function () {
            props.setMapZoom(map.getZoom());
        });
    }, []);

    return (
        <></>
    )
}

export class OngoingTenderProject extends Component {

    state = {
        dataLocation: [],
        dataProject: [],
        dataProjectNonFilter: [],
        dataStatus: [],

        htmlContentMap: [],
        htmlContentMapMarker: [],
        htmlContentMapRegion: [],
        htmlContentProject: [],
        htmlContentDetailProject: [],
        htmlContentListPagination: [],

        listProvince: [
            { name: "ACEH", alt_name: "ACEH", lat: 4.36855, lng: 97.0253, total: 0 },
            { name: "SUMATERA UTARA", alt_name: "SUMATERA UTARA", lat: 2.19235, lng: 99.38122, total: 0 },
            { name: "SUMATERA BARAT", alt_name: "SUMATERA BARAT", lat: -1.34225, lng: 100.0761, total: 0 },
            { name: "RIAU", alt_name: "RIAU", lat: 0.50041, lng: 101.54758, total: 0 },
            { name: "JAMBI", alt_name: "JAMBI", lat: -1.61157, lng: 102.7797, total: 0 },
            { name: "SUMATERA SELATAN", alt_name: "SUMATERA SELATAN", lat: -3.12668, lng: 104.09306, total: 0 },
            { name: "BENGKULU", alt_name: "BENGKULU", lat: -3.51868, lng: 102.53598, total: 0 },
            { name: "LAMPUNG", alt_name: "LAMPUNG", lat: -4.8555, lng: 105.0273, total: 0 },
            { name: "KEPULAUAN BANGKA BELITUNG", alt_name: "KEPULAUAN BANGKA BELITUNG", lat: -2.75775, lng: 107.58394, total: 0 },
            { name: "KEPULAUAN RIAU", alt_name: "KEPULAUAN RIAU", lat: -0.15478, lng: 104.58037, total: 0 },
            { name: "DKI JAKARTA", alt_name: "DKI JAKARTA", lat: 6.1745, lng: 106.8227, total: 0 },
            { name: "JAWA BARAT", alt_name: "JAWA BARAT", lat: -6.88917, lng: 107.64047, total: 0 },
            { name: "JAWA TENGAH", alt_name: "JAWA TENGAH", lat: -7.30324, lng: 110.00441, total: 0 },
            { name: "DI YOGYAKARTA", alt_name: "DI YOGYAKARTA", lat: 7.7956, lng: 110.3695, total: 0 },
            { name: "JAWA TIMUR", alt_name: "JAWA TIMUR", lat: -6.96851, lng: 113.98005, total: 0 },
            { name: "BANTEN", alt_name: "BANTEN", lat: -6.44538, lng: 106.13756, total: 0 },
            { name: "BALI", alt_name: "BALI", lat: -8.23566, lng: 115.12239, total: 0 },
            { name: "NUSA TENGGARA BARAT", alt_name: "NUSA TENGGARA BARAT", lat: -8.12179, lng: 117.63696, total: 0 },
            { name: "NUSA TENGGARA TIMUR", alt_name: "NUSA TENGGARA TIMUR", lat: -8.56568, lng: 120.69786, total: 0 },
            { name: "KALIMANTAN BARAT", alt_name: "KALIMANTAN BARAT", lat: -0.13224, lng: 111.09689, total: 0 },
            { name: "KALIMANTAN TENGAH", alt_name: "KALIMANTAN TENGAH", lat: -1.49958, lng: 113.29033, total: 0 },
            { name: "KALIMANTAN SELATAN", alt_name: "KALIMANTAN SELATAN", lat: -2.94348, lng: 115.37565, total: 0 },
            { name: "KALIMANTAN TIMUR", alt_name: "KALIMANTAN TIMUR", lat: 0.78844, lng: 116.242, total: 0 },
            { name: "KALIMANTAN UTARA", alt_name: "KALIMANTAN UTARA", lat: 2.72594, lng: 116.911, total: 0 },
            { name: "SULAWESI UTARA", alt_name: "SULAWESI UTARA", lat: 0.65557, lng: 124.09015, total: 0 },
            { name: "SULAWESI TENGAH", alt_name: "SULAWESI TENGAH", lat: -1.69378, lng: 120.80886, total: 0 },
            { name: "SULAWESI SELATAN", alt_name: "SULAWESI SELATAN", lat: -3.64467, lng: 119.94719, total: 0 },
            { name: "SULAWESI TENGGARA", alt_name: "SULAWESI TENGGARA", lat: -3.54912, lng: 121.72796, total: 0 },
            { name: "GORONTALO", alt_name: "GORONTALO", lat: 0.71862, lng: 122.45559, total: 0 },
            { name: "SULAWESI BARAT", alt_name: "SULAWESI BARAT", lat: -2.49745, lng: 119.3919, total: 0 },
            { name: "MALUKU", alt_name: "MALUKU", lat: -3.11884, lng: 129.42078, total: 0 },
            { name: "MALUKU UTARA", alt_name: "MALUKU UTARA", lat: 0.63012, lng: 127.97202, total: 0 },
            { name: "PAPUA BARAT", alt_name: "PAPUA BARAT", lat: -1.38424, lng: 132.90253, total: 0 },
            { name: "PAPUA", alt_name: "PAPUA", lat: -3.98857, lng: 138.34853, total: 0 }
        ],

        currentPage: 1,
        contentPerPage: 5,

        mapZoom: 5
    }

    componentDidMount() {
        axios.get('https://admin.greenhydrogen.my.id/api/region', ConfigAPI()).then(response => {
            let data = response.data.data.regions;

            if (data) {
                this.setState({ dataLocation: data });
            }
        });

        axios.get('https://admin.greenhydrogen.my.id/api/project', ConfigAPI()).then(response => {
            let data = response.data.data.projects;

            let htmlContentMapMarker = [];
            let htmlContentMapRegion = [];
            let htmlContentProject = [];
            let htmlContentListPagination = [];

            let listProvince = this.state.listProvince;

            let totalPage = Math.ceil(data.length / this.state.contentPerPage);

            if (data) {
                data.map((item, index) => {
                    htmlContentMapMarker.push(
                        <CustomMarker index={index} data={item} lat={item.lat} lng={item.lng} detailProject={this.OpenDetailProject} name={`${item.company_name} - ${item.name}`} />
                    );

                    if (index >= this.state.contentPerPage * (this.state.currentPage - 1) && index < this.state.contentPerPage * this.state.currentPage) {
                        htmlContentProject.push(
                            <ProjectItem key={index} companyName={item.company_name} country={item.country.name} description={item.description} image={StorageURL(item.image)} member={StorageURL(item.member_of_image)} name={item.name} region={item.region.name} detail={item} />
                        );
                    }

                    let indexProvince = listProvince.findIndex(data => data.name.toLowerCase() === item?.region?.name?.toLowerCase());

                    listProvince[indexProvince].total++;
                });

                for (let i = 1; i <= totalPage; i++) {
                    htmlContentListPagination.push(
                        <div key={i} className={`${(i === this.state.currentPage) ? 'active' : ''} pagination-list`} onClick={() => this.SelectPage(i)}>
                            <p className='pagination-item'>{i}</p>
                        </div>
                    );
                }

                htmlContentListPagination.push(
                    <div className='pagination-list' onClick={() => this.SelectPage(this.state.currentPage >= data.length / this.state.contentPerPage ? this.state.currentPage : this.state.currentPage + 1)}>
                        <p className='pagination-item'><FaLongArrowAltRight /></p>
                    </div>
                );
            }

            listProvince.map((item, index) => {
                if (item.total > 0) {
                    htmlContentMapRegion.push(
                        <CustomRegion index={index} lat={item.lat} lng={item.lng} total={item.total} />
                    );
                }
            });

            this.setState({ dataProject: data, dataProjectNonFilter: data, htmlContentMap: htmlContentMapRegion, htmlContentMapMarker: htmlContentMapMarker, htmlContentMapRegion: htmlContentMapRegion, htmlContentListPagination: htmlContentListPagination, htmlContentProject: htmlContentProject, listProvince: listProvince });
        });

        axios.get('https://admin.greenhydrogen.my.id/api/project/status', ConfigAPI()).then(response => {
            let data = response.data.data.status;

            this.setState({ dataStatus: data });
        });
    }

    CloseDetailProject = () => {
        document.getElementById('detail-project').classList.remove('active');
    }

    Filter = () => {
        let years = document.getElementById('input-filter-by-years').value;
        let region = document.getElementById('input-filter-by-region').value;
        let topic = document.getElementById('input-filter-by-topic').value;

        let data = this.state.dataProjectNonFilter;

        data = data.filter(item => {
            if (item?.created_at?.includes(years) && item?.region?.name?.includes(region) &&
                item?.description?.includes(topic)) {
                return item;
            }
        });

        let htmlContentProject = [];
        let htmlContentListPagination = [];

        let totalPage = Math.ceil(data.length / this.state.contentPerPage);

        if (data) {
            data.map((item, index) => {
                if (index >= this.state.contentPerPage * (this.state.currentPage - 1) && index < this.state.contentPerPage * this.state.currentPage) {
                    htmlContentProject.push(
                        <ProjectItem key={index} companyName={item.company_name} country={item.country.name} description={item.description} image={StorageURL(item.image)} member={StorageURL(item.member_of_image)} name={item.name} region={item.region.name} detail={item} />
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
                    <div className='pagination-list' onClick={() => this.SelectPage(this.state.currentPage >= data.length / this.state.contentPerPage ? this.state.currentPage : this.state.currentPage + 1)}>
                        <p className='pagination-item'><FaLongArrowAltRight /></p>
                    </div>
                );
            }
        }

        this.setState({ dataProject: data, htmlContentListPagination: htmlContentListPagination, htmlContentProject: htmlContentProject });
    }

    FilterMap = () => {
        let location = document.getElementById('select-location').value;
        let status = document.getElementById('select-status').value;

        axios.get('https://admin.greenhydrogen.my.id/api/project', ConfigAPI()).then(response => {
            let data = response.data.data.projects;

            let htmlContentMapMarker = [];
            let htmlContentMapRegion = [];

            let listProvince = this.state.listProvince;

            listProvince.forEach(item => {
                if (item.total > 0) item.total = 0;
            });

            if (data) {
                data.map((item, index) => {
                    if (item?.region?.name?.toLowerCase().includes(location.toLowerCase()) && item?.status?.toLowerCase().includes(status.toLowerCase())) {
                        htmlContentMapMarker.push(
                            <CustomMarker index={index} data={item} lat={item.lat} lng={item.lng} detailProject={this.OpenDetailProject} name={`${item.company_name} - ${item.name}`} />
                        );

                        let indexProvince = listProvince.findIndex(data => data.name.toLowerCase() === item?.region?.name?.toLowerCase());

                        listProvince[indexProvince].total++;
                    }
                });
            }

            listProvince.map((item, index) => {
                if (item.total > 0) {
                    htmlContentMapRegion.push(
                        <CustomRegion index={index} lat={item.lat} lng={item.lng} total={item.total} />
                    );
                }
            });

            this.setState({ htmlContentMapMarker: htmlContentMapMarker, htmlContentMapRegion: htmlContentMapRegion }, () => {
                this.SetMapZoom(this.state.mapZoom);
            });
        });
    }

    OpenDetailProject = (data) => {
        let htmlContentDetailProject = [];

        if (data) {
            htmlContentDetailProject.push(
                <>
                    <div className='p-3'>
                        <div className='close' onClick={this.CloseDetailProject}><FaTimes /></div>
                        <p className='fw-bold pb-3 text-black text-center'>{data.company_name}</p>
                        <div className='align-items-center border-1 border-top d-flex py-2'>
                            <p className='col-4 fw-bold text-black text-size-1 text-size-lg-2'><Translate title={`Project`} /></p>
                            <p className='col-1 text-black text-size-1 text-size-lg-2'>:</p>
                            <p className='col-7 text-black text-end text-size-1 text-size-lg-2'>{data.name}</p>
                        </div>
                        <div className='align-items-center border-1 border-top d-flex py-2'>
                            <p className='col-4 fw-bold text-black text-size-1 text-size-lg-2'><Translate title={`Budget`} /></p>
                            <p className='col-1 text-black text-size-1 text-size-lg-2'>:</p>
                            <p className='col-7 text-black text-end text-size-1 text-size-lg-2'>{SetPriceFormat(data.total_budget)}</p>
                        </div>
                        <div className='align-items-center border-1 border-top d-flex py-2'>
                            <p className='col-4 fw-bold text-black text-size-1 text-size-lg-2'><Translate title={`Status`} /></p>
                            <p className='col-1 text-black text-size-1 text-size-lg-2'>:</p>
                            <p className='col-7 text-black text-end text-size-1 text-size-lg-2'>{data.status}</p>
                        </div>
                        <div className='align-items-center d-flex pt-3'>
                            <div className='col-6 pe-lg-2'>
                                <div className='align-items-center cursor-pointer d-flex justify-content-center third-background-color py-2 px-3 text-size-1 text-size-lg-2 text-white' onClick={() => OpenGoogleMaps(data.lat, data.lng)}>
                                    <Translate title={`Google Maps`} />
                                </div>
                            </div>
                            <div className='col-6 ps-lg-2'>
                                <Link to={'/company-project'} className='align-items-center cursor-pointer d-flex justify-content-center primary-background-color py-2 px-3 text-size-1 text-size-lg-2 text-white' onClick={() => this.PassData(data)}><Translate title={`More Info`} /></Link>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        this.setState({ htmlContentDetailProject: htmlContentDetailProject }, () => {
            document.getElementById('detail-project').classList.add('active');
        });
    }

    PassData = (data) => {
        sessionStorage.setItem('data', JSON.stringify(data));
    }

    SetMapZoom = (zoom) => {
        this.setState({ htmlContentMap: zoom >= 8 ? this.state.htmlContentMapMarker : this.state.htmlContentMapRegion, mapZoom: zoom });
    }

    render() {
        return (
            <>
                <div className='fluid-section-two' style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover', height: 84 }}>
                </div>

                <div className='position-relative overflow-hidden' style={{ height: '480px' }}>
                    <MapContainer center={[0.7893, 113.9213]} zoom={5} zoomControl={false} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MapZoom setMapZoom={this.SetMapZoom} />
                        {this.state.htmlContentMap}
                    </MapContainer>
                    <div id='detail-project' className='detail-project'>
                        {this.state.htmlContentDetailProject}
                    </div>
                </div>

                <div className='bg-white container-width my-5 p-4 px-20' style={{ borderRadius: 12 }}>
                    <div className='mb-2 w-100'>
                        <div className='align-items-center px-lg-3 py-3 row'>
                            <div className='col-12 col-lg-4'>
                                <p className='fw-bold text-black'><Translate title={`Location`} /> * <FaInfoCircle /></p>
                            </div>
                            <div className='align-items-center d-flex col-12 col-lg-8'>
                                <select name="select-location" id="select-location" className='form-select'>
                                    {(this.state.dataLocation) ?
                                        <>
                                            <option value="">Nothing selected</option>
                                            {this.state.dataLocation.map((data, index) =>
                                                <option key={index} value={data.name}>{data.name}</option>
                                            )}
                                        </>
                                        :
                                        <option value="">No Data</option>
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='border-top mb-2 w-100'>
                        <div className='align-items-center px-lg-3 py-3 row'>
                            <div className='align-items-center d-flex col-12 col-lg-4'>
                                <p className='fw-bold text-black'><Translate title={`Status`} /> <FaInfoCircle /></p>
                            </div>
                            <div className='align-items-center d-flex col-12 col-lg-8'>
                                <select name="select-status" id="select-status" className='form-select'>
                                    {(this.state.dataStatus) ?
                                        <>
                                            <option value="">Nothing selected</option>
                                            {this.state.dataStatus.map((data, index) =>
                                                <option key={index} value={data}>{data}</option>
                                            )}
                                        </>
                                        :
                                        <option value="">No Data</option>
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='justify-content-end mb-2 px-lg-3 row'>
                        <div className='col-auto'>
                            <button type='button' className='btn border text-black' style={{ borderRadius: '12px', width: '150px' }}><Translate title={`Clear All`} /></button>
                        </div>
                        <div className='col-auto'>
                            <button type='button' className='btn primary-background-color text-white' style={{ borderRadius: '12px', width: '150px' }} onClick={this.FilterMap}><Translate title={`Apply Filter`} /></button>
                        </div>
                    </div>
                </div>

                <div className='container-width px-20'>
                    <div className='align-items-center bg-white row gx-lg-2 justify-content-center mx-auto p-3' style={{ borderRadius: '12px', maxWidth: '800px' }}>
                        <div className='col-12 col-lg-4 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-filter-by-years' id='input-filter-by-years' className='input-field-filter text-white' onChange={this.Filter} onInput={InputFormatNumber} placeholder='Filter By Years' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 m-0 pb-2 pb-lg-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-filter-by-region' id='input-filter-by-region' className='input-field-filter text-white' onChange={this.Filter} placeholder='Filter By Region' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 m-0'>
                            <div className='position-relative w-100'>
                                <div className='icon-input-field-filter' >
                                    <FaSearch />
                                </div>
                                <input type="text" name='input-filter-by-topic' id='input-filter-by-topic' className='input-field-filter text-white' onChange={this.Filter} placeholder='Filter By Topic' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-5'>
                    <div className='container-width row'>
                        {this.state.htmlContentProject}

                        <div className='align-items-center d-flex justify-content-center py-5'>
                            {this.state.htmlContentListPagination}
                        </div>
                    </div>
                </div>

                <LatestNews />
            </>
        )
    }
}

export default OngoingTenderProject
