import React, { Component } from 'react'

import BackgroundSubscribe from '../assets/background-subscribe.png';
import IconPulauIndonesia from '../assets/green-hydrogen-indonesia/icon-pulau-indonesia.png';

import LatestNews from '../component/LatestNews';
import Sidebar from '../component/Sidebar';
import { ConfigAPI, StorageURL, Translate } from '../component/helper';
import i18next from 'i18next';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class GreenHydrogenIndonesia extends Component {

    state = {
        htmlContent: [],
        htmlContentArticle: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/22`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];
            let htmlContentArticle = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className="fluid-section-one" style={{ background: `url(${StorageURL(item?.content?.background_hydrogen_in_indo_picture_1)}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='container-width h-100'>
                                    <div className="outer-box clearfix">
                                        {/*  Content Column */}
                                        <div className="content-column">
                                            <div className="inner-column">
                                                <div>
                                                    <p className='fw-bold primary-color text-center text-lg-start text-size-10 text-size-lg-15'>{item?.content?.left_title_1}</p>
                                                    <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'>{item?.content?.left_title_2}</p>
                                                    <p className='text-center text-lg-start' dangerouslySetInnerHTML={{ __html: item?.content?.left_description_1 }}></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Content Column */}
                                        <div className="content-column d-none d-lg-flex ps-lg-5">
                                            <div className="inner-column">
                                                <div>
                                                    <img src={StorageURL(item?.content?.right_picture_1)} alt="" className='h-100 mw-100' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '1') {
                        htmlContent.push(
                            <div key={index} className='container-width d-flex flex-wrap justify-content-center py-3 py-lg-5 position-relative' style={{ perspective: '100rem' }}>
                                <div className='col-12 col-lg-4 d-flex flex-column justify-content-center px-20 py-lg-5'>
                                    <p className='fw-bold primary-color text-center text-lg-start text-size-10 text-size-lg-15'><Translate title={`TARGET`} /></p>
                                    <p className='primary-color text-center text-lg-start'><Translate title={`Energy Mix in 2020 is 11,2% and is targeted to reach 28% in 2030. 2020 reach 64.36 MTCO2e of GHG emission reduction, plan 2030 reach 314 MTCO2e of GHG emission reduction`} /></p>
                                    <p className='fw-bold primary-color text-center text-lg-start text-size-10 text-size-lg-15'><Translate title={`IN INDONESIA`} /></p>
                                </div>
                                <div className='align-items-stretch col-12 col-lg-8 d-none d-sm-flex justify-content-center overflow-visible pe-5 py-4' style={{ transform: 'rotateY(-30deg)' }}>
                                    <div className='d-flex g-2 flex-column pe-2'>
                                        <div className='col pb-2'>
                                            <div className='green-indonesia-overview-item small'>
                                                <p className='fw-bold text-size-8 text-size-lg-10'><Translate title={`Clean Power 31.80`} /></p>
                                                <p><Translate title={`Million Ton`} /> Co<sup>2</sup>e </p>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='green-indonesia-overview-item small'>
                                                <p className='text-size-3 text-size-lg-5'><Translate title={`Energy Efficiency`} /></p>
                                                <p className='fw-bold text-size-8 text-size-lg-10'>96.33</p>
                                                <p><Translate title={`Million Ton`} /> Co<sup>2</sup>e </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column pe-2'
                                    >
                                        <div className='d-flex pb-2'>
                                            <div className='col pe-2'>
                                                <div className='align-items-center d-flex green-indonesia-overview-item small'>
                                                    <div className='col-6 pe-2'>
                                                        <p className='text-size-3 text-size-lg-5 word-wrap'><Translate title={`Fuel Switching`} /></p>
                                                    </div>
                                                    <div className='col-6'>
                                                        <p className='fw-bold text-size-8 text-size-lg-10'>10.02</p>
                                                        <p><Translate title={`Million Ton`} /> Co<sup>2</sup>e </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='align-items-center d-flex green-indonesia-overview-item small'>
                                                    <div className='col-6 pe-2'>
                                                        <p className='text-wrap text-size-3 text-size-lg-5 word-wrap'><Translate title={`Post Mining Reclamation`} /></p>
                                                    </div>
                                                    <div className='col-6'>
                                                        <p className='fw-bold text-size-8 text-size-lg-10'>5.46</p>
                                                        <p><Translate title={`Million Ton`} /> Co<sup>2</sup>e </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='green-indonesia-overview-item position-relative' style={{ flex: 1 }}>
                                            <img src={IconPulauIndonesia} alt="" className='w-100' />
                                            <p><Translate title={`Indonesia Target of Reduction`} /></p>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <div className='col pb-2'>
                                            <div className='green-indonesia-overview-item small'>
                                                <p className='text-size-3 text-size-lg-5'><Translate title={`Renewable Energy`} /></p>
                                                <p className='fw-bold text-size-8 text-size-lg-10'>179.42</p>
                                                <p><Translate title={`Million Ton`} /> Co<sup>2</sup>e </p>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='green-indonesia-overview-item small'>
                                                <p className='text-size-3 text-size-lg-5'><Translate title={`Total Target of Reduction`} /></p>
                                                <p className='fw-bold text-size-8 text-size-lg-10'>314.03</p>
                                                <p><Translate title={`Million Ton`} /> Co<sup>2</sup>e </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (item.order == '2') {
                        htmlContentArticle.push(
                            <div key={index} className='container-article-section px-20'>
                                <p className='text-black' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_1 }}></p>
                            </div>
                        )
                    } else if (item.order == '3') {
                        htmlContentArticle.push(
                            <div key={index} className='container-article-section container-article-section-flex gap-0'>
                                <div className='banner-container-image col-12 col-sm-auto'>
                                    <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='w-100' />
                                </div>
                                <div className='col d-flex flex-column justify-content-center p-3' style={{ background: `url('${BackgroundSubscribe}') no-repeat`, backgroundSize: '110% 110%', backgroundPosition: 'center' }}><p className='fw-bold m-0 px-20 text-start text-size-lg-12 text-size-6' dangerouslySetInnerHTML={{ __html: item?.content?.right_description_1 }}></p>
                                </div>
                            </div>
                        );
                    } else if (item.order == '4') {
                        htmlContentArticle.push(
                            <div key={index} className='container-article-section container-article-section-flex flex-row-reverse'>
                                <div className='banner-container-image col-12 col-lg-auto'>
                                    <img src={StorageURL(item?.content?.right_picture_1)} alt="" className='w-100' />
                                </div>
                                <div className='col d-flex flex-column justify-content-center p-3'>
                                    <p className='fw-bold m-0 text-black text-start text-size-lg-12 text-size-6' dangerouslySetInnerHTML={{ __html: item?.content?.left_description_1 }}></p>
                                </div>
                            </div>
                        );
                    } else if (item.order == '5') {
                        htmlContentArticle.push(
                            <div key={index} className='container-article-section px-20'>
                                <table className='align-center table table-bordered table-hover table-sriped w-100'>
                                    <thead className='align-middle text-center'>
                                        <tr>
                                            <th className='text-center'>No.</th>
                                            <th>Mitigation Action</th>
                                            <th>2020 Emission Reduction (Ton CO<sup>2</sup>e)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-center'>1.</td>
                                            <td>Energy Efficiency</td>
                                            <td>12.968.198</td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>2.</td>
                                            <td>New and Renewable Energy</td>
                                            <td>34.291.037</td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>3.</td>
                                            <td>Low Carbon Fuel</td>
                                            <td>8.398.804</td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>4.</td>
                                            <td>Green Power Plant Technology</td>
                                            <td>5.908.594</td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>5.</td>
                                            <td>Others</td>
                                            <td>2.790.370</td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>6.</td>
                                            <td>Total</td>
                                            <td>64.357.004</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        );
                    } else if (item.order == '6') {
                        htmlContentArticle.push(
                            <React.Fragment key={index}>
                                <p className='fw-bold text-black text-size-8 text-size-lg-10' dangerouslySetInnerHTML={{ __html: item?.content?.middle_title_1 }}></p>
                                <ul className='ps-4 text-black'>
                                    <li style={{ listStyleType: 'disc' }} dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_1 }}></li>
                                    <li style={{ listStyleType: 'disc' }} dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_2 }}></li>
                                    <li style={{ listStyleType: 'disc' }} dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_3 }}></li>
                                    <li style={{ listStyleType: 'disc' }} dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_4 }}></li>
                                    <li style={{ listStyleType: 'disc' }} dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_5 }}></li>
                                    <li style={{ listStyleType: 'disc' }} dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_6 }}></li>
                                </ul>
                            </React.Fragment>
                        );
                    } else if (item.order == '7') {
                        htmlContentArticle.push(
                            <div key={index} className='container-article-section px-20'>
                                <div className='p-3' style={{ border: '2px solid #6EC624' }}>
                                    <p className='text-black' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_1 }}></p>
                                </div>
                            </div>
                        );
                    } else if (item.order == '8') {
                        htmlContentArticle.push(
                            <React.Fragment key={index}>
                                <div className='container-article-section px-20'>
                                    <p className='text-black' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_1 }}></p>
                                </div>

                                <div className='container-article-section'>
                                    <div className='banner-container-image landscape'>
                                        <img src={StorageURL(item?.content?.middle_picture_1)} alt="" className='w-100' />
                                    </div>
                                    <div className='px-20'>
                                        <p className='text-black' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_2 }}></p>
                                    </div>
                                </div>

                                <div className='container-article-section'>
                                    <div className='banner-container-image landscape'>
                                        <img src={StorageURL(item?.content?.middle_picture_2)} alt="" className='w-100' />
                                    </div>
                                    <div className='px-20'>
                                        <p className='text-black' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_3 }}></p>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    } else if (item.order == '9') {
                        htmlContentArticle.push(
                            <div key={index} className='d-flex gap-3'>
                                <Link to={`${item?.content?.left_button_link_1}`} className='button-tag'>{item?.content?.left_button_1}</Link>
                                <Link to={`${item?.content?.left_button_link_1}`} className='button-tag'>{item?.content?.left_button_2}</Link>
                                <Link to={`${item?.content?.left_button_link_1}`} className='button-tag'>{item?.content?.left_button_3}</Link>
                            </div>
                        );
                    }
                });
            }

            this.setState({ htmlContent: htmlContent, htmlContentArticle: htmlContentArticle });
        });
    }

    render() {
        return (
            <>
                {this.state.htmlContent}

                <div className='container-article container-width'>
                    <Sidebar />
                    <div className='col-12 col-lg ps-lg-3'>
                        {this.state.htmlContentArticle}
                    </div>
                </div>

                <LatestNews />
            </>
        )
    }
}

export default GreenHydrogenIndonesia
