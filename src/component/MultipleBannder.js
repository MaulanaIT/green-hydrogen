import React from 'react'

export default function MultipleBannder() {
    return (
        <div className='d-flex flex-wrap vh-100'>
            <div className='col-12 col-lg-6 border-bottom'>
                <div className='align-items-center bg-secondary d-flex fw-bold justify-content-center h-100 text-black text-size-lg-10 text-size-10 w-100'>Banner</div>
            </div>
            <div className='col-12 col-lg-6 border-bottom'>
                <div className='align-items-center bg-secondary d-flex fw-bold justify-content-center h-100 text-black text-size-lg-10 text-size-10 w-100'>Banner</div>
            </div>
        </div>
    )
}
