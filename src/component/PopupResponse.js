import React, { Component } from 'react'

export class PopupResponse extends Component {
    render() {
        return (
            <div id='popup-response' className='popup-response-container'>
                <div className='card'>
                    <p id='popup-response-text'></p>
                </div>
            </div>
        )
    }
}

export default PopupResponse