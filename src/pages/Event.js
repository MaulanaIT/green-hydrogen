import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa';

import BackgroundMainBanner from '../assets/company-directories/background-main-banner.png';
import BackgroundDateIdle from '../assets/event/background-date-idle.png'
import BackgroundDateSelected from '../assets/event/background-date-selected.png'

import EventItem from '../component/EventItem';
import { ConfigAPI, StorageURL, Translate } from '../component/helper';
import axios from 'axios';
import moment from 'moment';
import LatestNews from '../component/LatestNews';
import i18next from 'i18next';

export class Event extends Component {

    state = {
        data: [],

        htmlContent: [],
        htmlContentEvent: [],
        htmlContentDate: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/content/${i18next.language}/menu/${i18next.language == 'id' ? 37 : 38}`, ConfigAPI()).then(response => {
            let data = response.data;

            let htmlContent = [];

            if (data) {
                data.map((item, index) => {
                    if (item.order == '0') {
                        htmlContent.push(
                            <div key={index} className='fluid-section-two position-relative' style={{ background: `url(${StorageURL(item?.content?.background_event_picture_1)}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='align-items-lg-start align-items-center container-width d-flex flex-column justify-content-center h-100 position-relative px-20'>
                                    <div className='text-center text-lg-start'>
                                        <p className='fw-bold text-size-6 text-size-lg-8'><Translate title={`COMPANY DIRECTORIES`} /></p>
                                        <p className='text-size-3 text-size-lg-4'><Translate title={`Company Directories`} /></p>
                                    </div>
                                    <div className='main-search'>
                                        <div className='icon-input-field-search' >
                                            <FaSearch />
                                        </div>
                                        <input type="text" name='input-search' id='input-search' className='py-2 text-white' placeholder='Search' onChange={this.Filter} />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                });
            }

            this.setState({ htmlContent: htmlContent });
        });

        axios.get('https://admin.greenhydrogen.my.id/api/event/home', ConfigAPI()).then(response => {
            let data = response.data.data.events;

            let htmlContentEvent = [];
            let htmlContentDate = [];

            if (data.length > 0) {
                data.map((item, index) => {
                    if (htmlContentEvent.length < 5 && moment(item?.date, 'YYYY-MM-DD').diff(moment(), 'hours') > 0) {
                        htmlContentEvent.push(
                            <EventItem key={index} category={item?.category?.translation?.name} description={item.translation?.description} endTime={moment(item.end_at, 'HH:mm:ss').format('HH:mm')} image={StorageURL(item.embed)} lat={item?.lat} lng={item?.lng} link={item?.link} location={item.location} speakerName={item.speaker_name} speakerTitle={item.speaker_title} startTime={moment(item.start_at, 'HH:mm:ss').format('HH:mm')} title={item.translation?.title} />
                        );

                        htmlContentDate.push(
                            <div key={index} className='cursor-pointer date-event p-4 wow fadeInLeft' data-wow-delay="0.4s" style={{ backgroundImage: `url('${BackgroundDateIdle}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '150px', width: '150px' }} onClick={(event) => this.SelectDateEvent(event, item.date)}>
                                <p className='fw-bold text-size-5 text-size-lg-10'>{moment(item.date, 'YYYY-MM-DD').format('DD')}</p>
                                <p>{moment(item.date, 'YYYY-MM-DD').format('MMMM, YYYY')}</p>
                            </div>
                        );
                    }
                });
            }

            this.setState({ data: data, htmlContentEvent: htmlContentEvent, htmlContentDate: htmlContentDate });
        });
    }

    Filter = (event) => {
        let data = this.state.data;

        let htmlContentEvent = [];
        let htmlContentDate = [];

        if (data) {
            data.map((item, index) => {
                if (htmlContentEvent.length < 5 && moment(item?.date, 'YYYY-MM-DD').diff(moment(), 'hours') > 0) {
                    if (item?.speaker_name?.includes(event.target.value) ||
                        item?.speaker_title?.includes(event.target.value) ||
                        item?.location?.includes(event.target.value) ||
                        item?.date?.includes(event.target.value) ||
                        item?.start_at?.includes(event.target.value) ||
                        item?.end_at?.includes(event.target.value) ||
                        item?.category?.translation?.name?.includes(event.target.value) ||
                        item?.translation?.title?.includes(event.target.value) ||
                        item?.translation?.description?.includes(event.target.value)) {
                        htmlContentEvent.push(
                            <EventItem key={index} category={item?.category?.translation?.name} description={item.translation?.description} endTime={moment(item.end_at, 'HH:mm:ss').format('HH:mm')} image={StorageURL(item.embed)} lat={item?.lat} lng={item?.lng} link={item?.link} location={item.location} speakerName={item.speaker_name} speakerTitle={item.speaker_title} startTime={moment(item.start_at, 'HH:mm:ss').format('HH:mm')} title={item.translation?.title} />
                        );

                        htmlContentDate.push(
                            <div key={index} className='cursor-pointer date-event p-4 wow fadeInLeft' data-wow-delay="0.4s" style={{ backgroundImage: `url('${BackgroundDateIdle}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '150px', width: '150px' }} onClick={(event) => this.SelectDateEvent(event, item.date)}>
                                <p className='fw-bold text-size-5 text-size-lg-10'>{moment(item.date, 'YYYY-MM-DD').format('DD')}</p>
                                <p>{moment(item.date, 'YYYY-MM-DD').format('MMMM, YYYY')}</p>
                            </div>
                        );
                    }
                }
            });
        }

        this.setState({ htmlContentEvent: htmlContentEvent, htmlContentDate: htmlContentDate });
    }

    SelectDateEvent = (event, date) => {
        let dateElement = document.querySelectorAll('.date-event');

        dateElement.forEach(element => {
            if (element != event.currentTarget) element.style.setProperty('background-image', `url('${BackgroundDateIdle}')`);
            else element.style.setProperty('background-image', `url('${BackgroundDateSelected}')`);
        });

        axios('https://admin.greenhydrogen.my.id/api/event/home', ConfigAPI()).then(response => {
            let data = response.data.data.events;

            if (data.length > 0) {
                let htmlContentEvent = [];

                data.map((item, index) => {
                    if (item.date === date) {
                        htmlContentEvent.push(
                            <EventItem key={index} description={item.translation?.description} endTime={item.end_at} image={StorageURL(item.embed)} location={item.location} speakerName={item.speaker_name} speakerTitle={item.speaker_title} startTime={item.start_at} title={item.translation?.title} />
                        );
                    }
                });

                this.setState({ htmlContentEvent: htmlContentEvent });
            }
        });
    }

    render() {
        return (
            <>
                {this.state.htmlContent}

                <div className='container-width row justify-content-center pt-5'>
                    <div className='col-auto d-flex flex-lg-column flex-row gap-3 justify-content-start pb-4 pb-lg-0'>
                        {this.state.htmlContentDate}
                    </div>
                    <div className='col-lg px-3 px-lg-5'>
                        {this.state.htmlContentEvent}
                    </div>
                </div>

                <LatestNews />
            </>
        )
    }
}

export default Event
