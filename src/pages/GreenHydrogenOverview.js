import React, { Component } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import LatestNews from '../component/LatestNews';
import Sidebar from '../component/Sidebar';
import { ConfigAPI, StorageURL, Translate } from '../component/helper';

import BackgroundSubscribe from '../assets/background-subscribe.png';

import axios from 'axios';
import i18next from 'i18next';
import { sanitize } from 'dompurify';

export class GreenHydrogenOverview extends Component {

    state = {
        chartDegree: 0,

        htmlContent: [],
        htmlContentArticle: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 13 : 14}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];
            let htmlContentArticle = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className="fluid-section-one" style={{ backgroundImage: `url('${StorageURL(item?.content?.background_overview_1_picture_1)}')` }}>
                                <div className='container-width h-100'>
                                    <div className="outer-box clearfix">

                                        {/*  Content Column */}
                                        <div className="content-column">
                                            <div className="inner-column">
                                                <div>
                                                    <p className='fw-bold text-center text-lg-start primary-color text-size-10 text-size-lg-15'>{item?.content?.left_title_1}</p>
                                                    <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'>{item?.content?.left_title_2}</p>
                                                    <p className='text-center text-lg-start' dangerouslySetInnerHTML={{ __html: item?.content?.left_description_1 }}></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (item.order == '1') {
                        htmlContentArticle.push(
                            <div key={index} className='container-article-section container-article-section-flex gap-4'>
                                <div className='col-12 green-overview-chart-container position-relative'>
                                    <iframe id='chart' height={400} width={460} style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, 0%)' }}>
                                    </iframe>
                                </div>
                                <div className='col-12 col-md d-flex flex-column justify-content-center py-3 px-20'>
                                    <p className='fw-bold m-0 text-black text-start text-size-lg-8 text-size-6'>{item?.content?.right_title_1}</p>
                                    <p className='m-0 text-black' dangerouslySetInnerHTML={{ __html: item?.content?.right_description_1 }}></p>
                                </div>
                            </div>
                        )
                    } else if (item.order == '3') {
                        htmlContentArticle.push(
                            <div key={index} className='container-article-section'>
                                <div className='d-flex flex-column justify-content-center h-100 mx-autoposition-relative w-100' style={{ background: '#293D32' }}>
                                    <p className='fw-bold p-3 text-size-8 text-size-lg-10' style={{ background: `url('${BackgroundSubscribe}') no-repeat`, backgroundSize: '110% 110%', backgroundPosition: 'center' }}><Translate title={`Colour code of hydrogen`} /></p>
                                    <div className='position-relative w-100' style={{ height: '400px', perspective: '1000px' }}>
                                        <div className="next" onClick={() => this.RotateChartCarousel('next')}><FaAngleRight className='text-size-15 text-size-lg-30' /></div>
                                        <div className="prev" onClick={() => this.RotateChartCarousel('prev')}><FaAngleLeft className='text-size-15 text-size-lg-30' /></div>
                                        <div className="chart-carousel">
                                            <div className="item a">
                                                <p className='title'><Translate title={`Green`} /></p>
                                                <Translate title={`Made through electrolysis using renewable electricity. Electricity is used to split water into hydrogen and oxygen.`} />
                                            </div>
                                            <div className="item b">
                                                <p className='title'><Translate title={`Blue`} /></p>
                                                <Translate title={`Sourced from fossil fuel. However, the CO2 is captured and stored underground (carbon sequestration).`} />
                                            </div>
                                            <div className="item c">
                                                <p className='title'><Translate title={`Grey`} /></p>
                                                <Translate title={`Hydrogen made from natural gas in a process called steam reformation. in which high temperate steam is used to split methane gas at high pressures.`} />
                                            </div>
                                            <div className="item d">
                                                <p className='title'><Translate title={`Brown`} /></p>
                                                <Translate title={`Made from Lignite (in a process like grey hydrogen) with no carbon capture. Even more carbon intensive than black and grey hydrogen. Lignite is compressed peat and generates a lot of carbon dioxide when combusted.`} />
                                            </div>
                                            <div className="item e">
                                                <p className='title'><Translate title={`Red`} /></p>
                                                <Translate title={`Produced through the high-temperature catalytic splitting of water using nuclear power thermal as an energy source.`} />
                                            </div>
                                            <div className="item f">
                                                <p className='title'><Translate title={`Turquoise`} /></p>
                                                <Translate title={`Produced through pyrolysis. In pyrolysis instead of polluting CO2 gas a solid carbon by-product is produced. The feedstock is methane of even waste plastics. Pyrolysis works by heating products to an extremely high temperature in an inert atmosphere. The emissions relate to the fuel needed to heat the reaction.`} />
                                            </div>
                                            <div className="item g">
                                                <p className='title'><Translate title={`Pink`} /></p>
                                                <Translate title={`Pink hydrogen is generated through electrolysis powered by nuclear energy. Nuclear-produced hydrogen can also be referred to as purple hydrogen or red hydrogen.`} />
                                            </div>
                                            <div className="item h">
                                                <p className='title'><Translate title={`White`} /></p>
                                                <Translate title={`White hydrogen is a naturally-occurring geological hydrogen found in underground deposits and created through fracking. There are no strategies to exploit this hydrogen at present.`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (item.order == '4') {
                        htmlContentArticle.push(
                            <div key={index} className='container-article-section'>
                                <p className='text-black px-20' dangerouslySetInnerHTML={{ __html: item?.content?.middle_description_1 }}></p>
                            </div>
                        );
                    } else if (item.order == '5') {
                        htmlContentArticle.push(
                            <div key={index} className='container-article-section'>
                                <div className='container-article-section-flex'>
                                    <div className='banner-container-image col-12 col-lg-6'>
                                        <img src={StorageURL(item?.content?.left_picture_1)} alt="" className='w-100' />
                                    </div>
                                    <div className='col d-flex flex-column justify-content-center p-3' style={{ background: `url('${StorageURL(item?.content?.right_picture_1)}') no-repeat`, backgroundSize: '110% 110%', backgroundPosition: 'center' }}>
                                        <p className='fw-bold m-0 text-size-lg-8 text-size-6'>{item?.content?.right_title_1}</p>
                                        <p className='m-0' dangerouslySetInnerHTML={{ __html: item?.content?.right_description_1 }}></p>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (item.order == '6') {
                        htmlContentArticle.push(
                            <React.Fragment key={index}>
                                <div className='container-article-section'>
                                    <p className='text-black px-20' dangerouslySetInnerHTML={{ __html: sanitize(item?.content?.middle_description_1) }}></p>
                                </div>

                                <div className='container-article-section'>
                                    <div className='banner-container-image landscape'>
                                        <img src={StorageURL(item?.content?.middle_picture_1)} alt="" className='w-100' />
                                    </div>
                                    <div className='px-20'>
                                        <p className='fw-bold text-black text-size-6 text-size-lg-8'>{item?.content?.left_title_1}</p>
                                        <p className='text-black' dangerouslySetInnerHTML={{ __html: sanitize(item?.content?.middle_description_2) }}></p>
                                    </div>
                                </div>

                                <div className='container-article-section'>
                                    <div className='banner-container-image landscape'>
                                        <img src={StorageURL(item?.content?.middle_picture_2)} alt="" className='w-100' />
                                    </div>
                                    <div className='px-20'>
                                        <p className='fw-bold text-black text-size-6 text-size-lg-8'>{item?.content?.left_title_2}</p>
                                        <p className='text-black' dangerouslySetInnerHTML={{ __html: sanitize(item?.content?.middle_description_3) }}></p>
                                    </div>
                                </div>

                                <div className='container-article-section'>
                                    <div className='banner-container-image landscape'>
                                        <img src={StorageURL(item?.content?.middle_picture_3)} alt="" className='w-100' />
                                    </div>
                                    <div className='px-20'>
                                        <p className='text-black' dangerouslySetInnerHTML={{ __html: sanitize(item?.content?.left_description_1) }}></p>
                                    </div>
                                </div>

                                <div className='container-article-section'>
                                    <div className='banner-container-image landscape'>
                                        <img src={StorageURL(item?.content?.middle_picture_4)} alt="" className='w-100' />
                                    </div>
                                    <div className='px-20'>
                                        <p className='text-black' dangerouslySetInnerHTML={{ __html: sanitize(item?.content?.middle_description_4) }}></p>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    }
                });
            }

            this.setState({ htmlContent: htmlContent, htmlContentArticle: htmlContentArticle }, () => {
                if (document.getElementById('chart')) document.getElementById('chart').src = '/chart/index.html';
            });
        });
    }

    RotateChartCarousel = (type = 'next') => {
        let CurrentDegree = this.state.chartDegree;

        let Carousel = document.querySelector('.chart-carousel');

        if (type == "next") {
            CurrentDegree = CurrentDegree - 45;
        }
        if (type == "prev") {
            CurrentDegree = CurrentDegree + 45;
        }

        Carousel.style = `
            -webkit-transform: rotateY(${CurrentDegree}deg); 
            -moz-transform: rotateY(${CurrentDegree}deg); 
            -o-transform: rotateY(${CurrentDegree}deg); 
            transform: rotateY(${CurrentDegree}deg)`;

        this.setState({ chartDegree: CurrentDegree });
    }

    render() {

        return (
            <>
                {this.state.htmlContent}

                <div className='container-article container-width'>
                    <Sidebar />
                    <div className='col-12 col-lg ps-lg-3'>
                        {this.state.htmlContentArticle}
                        <div className='d-flex gap-3'>
                            <div className='button-tag'>Hydrogen</div>
                            <div className='button-tag'>Hydrogen Indonesia</div>
                            <div className='button-tag'>Indonesia Target</div>
                        </div>
                    </div>
                </div>

                <LatestNews />
            </>
        )
    }
}

export default GreenHydrogenOverview