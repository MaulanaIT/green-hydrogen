import React, { Component } from 'react'

import { StorageURL, Translate } from './helper';

import Sponsor1 from '../assets/sponsor-1.png';
import Sponsor2 from '../assets/sponsor-2.png';
import Sponsor3 from '../assets/sponsor-3.png';

import axios from 'axios';

export class Sponsor extends Component {

    state = {
        htmlContent: []
    }

    componentDidMount() {
        axios('https://admin.greenhydrogen.my.id/api/sponsor').then(response => {
            let data = response.data.data.sponsors;

            if (data.length > 0) {
                let htmlContent = [];

                data.map((item, index) => {
                    htmlContent.push(
                        <li key={index} className="slide-item"><figure className="image"><a href="#"><img src={StorageURL(item.image)} alt="" /></a></figure></li>
                    )
                });

                this.setState({ htmlContent: htmlContent });
            }
        });
    }

    render() {
        return (
            <div className="clients-section-two">
                <div className="container-width">
                    <div className="sec-title text-center style-two">
                        <span className="fw-bold title"><Translate title={`Event Sponsors`} /></span>
                        <h2><Translate title={`Partners & Sponsors`} /></h2>
                    </div>

                    <div className="sponsors-outer wow fadeInUp">
                        <ul className="sponsors">
                            {this.state.htmlContent}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sponsor
