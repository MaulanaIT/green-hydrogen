import React, { Component } from 'react';

import LogoPertamina from '../assets/green-hydrogen-indonesia-stakeholder/logo-pertamina.png';

export class StakeholderItem extends Component {
    render() {
        return (
            <>
                <div className='stakeholder-item-background'>
                    <div className='stakeholder-item-content'>
                        <div className='header'>
                            <p className='pb-2 fw-bold text-size-8 text-size-lg-10'>PT. Pertamina (Persero)</p>
                            <div className='tag-container'>
                                <div className='tag text-size-1 text-size-lg-2'>Stakeholder</div>
                                <div className='tag text-size-1 text-size-lg-2'>Company</div>
                            </div>
                            <div className='align-items-center d-flex flex-wrap gap-4'>
                                <p className='text-size-1 text-size-lg-2'>GREEN ENERGY <span className='fw-bold'>30%</span></p>
                                <p className='text-size-1 text-size-lg-2'>SUSTAINABLE <span className='fw-bold'>40%</span></p>
                            </div>
                        </div>
                        <div className='logo'>
                            <img src={LogoPertamina} alt="" />
                        </div>
                        <div className='description'>
                            <div className='align-items-center d-flex gap-4 justify-content-end pb-4'>
                                <div>
                                    <p className='fw-bold text-black'>BUDGET</p>
                                    <p className='fw-bold text-black'>8 BILLION $</p>
                                </div>
                                <div>
                                    <p className='fw-bold text-black'>TARGET</p>
                                    <p className='fw-bold text-black'>2020 - 2024</p>
                                </div>
                            </div>
                            <p className='text-black'>PT Pertamina (Persero) continues to push its business portofolio towards green energy. One that is being studied is the use of hydrogen. Pertamina has determined the development of green and blue hydrogen in its business plan portofolio.</p>
                            <br />
                            <p className='text-black'>PT Pertamina (Persero) has budgeted around US$ 8 billion or One hundred fifteen trillion rupiah (assuming and exchange rate of Rp. 14,400 per US$) for investment in the development of power, gas and new renewable energy plants during 2020-2024.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default StakeholderItem