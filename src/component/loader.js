import React, { Component } from 'react';

import '../css/loader.css';

class loader extends Component {
    render() {
        return (
            <div id="loader" className="overlay d-none">
                <div className="popup-loader">
                    <div className="col-12 d-flex flex-row flex-wrap justify-content-center pb-2">
                        <div className="loader"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default loader;