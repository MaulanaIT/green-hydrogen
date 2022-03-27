import React, { Component } from 'react'

import BackgroundMainBanner from '../assets/green-hydrogen-indonesia/background-main-banner.png';
import BackgroundBanner1 from '../assets/green-hydrogen-indonesia/background-banner-1.png';
import BackgroundBanner2 from '../assets/green-hydrogen-indonesia/background-banner-2.png';
import BackgroundSubscribe from '../assets/background-subscribe.png';
import IconMainBanner from '../assets/green-hydrogen-indonesia/icon-main-banner.png';
import IconPulauIndonesia from '../assets/green-hydrogen-indonesia/icon-pulau-indonesia.png';
import IconBanner1 from '../assets/green-hydrogen-indonesia/icon-banner-1.png';
import IconBanner2 from '../assets/green-hydrogen-indonesia/icon-banner-2.png';
import IconBanner3 from '../assets/green-hydrogen-indonesia/icon-banner-3.png';
import IconBanner4 from '../assets/green-hydrogen-indonesia/icon-banner-4.png';

import LatestNews from '../component/LatestNews';
import MultipleBannder from '../component/MultipleBannder';
import Sponsor from '../component/Sponsor';
import Sidebar from '../component/Sidebar';
import { Translate } from '../component/helper';

export class GreenHydrogenIndonesia extends Component {

    state = {
        TableEmissionReduction: []
    }

    componentDidMount() {
        this.GenerateTableEmissionReduction();
    }

    GenerateTableEmissionReduction = () => {
        let htmlTableEmissionReduction = this.state.TableEmissionReduction;
        let dataMitigationAction = [
            'Energy Efficiency', 'New and Renewable Energy', 'Low Carbon Fuel', 'Green Power Plant Technology', 'Others', 'Total'
        ]
        let dataEmissionReduction = [
            '12.968.198', '34.291.037', '8.398.804', '5.908.594', '2.790.370', '64.357.004'
        ]

        for (let i = 0; i < dataMitigationAction.length; i++) {
            htmlTableEmissionReduction.push(
                <tr>
                    <td className='text-center'>{i + 1}.</td>
                    <td>{dataMitigationAction[i]}</td>
                    <td>{dataEmissionReduction[i]}</td>
                </tr>
            );
        }

        this.setState({ TableEmissionReduction: htmlTableEmissionReduction });
    }

    render() {
        return (
            <>
                {/*  Fluid Section One */}
                <section className="fluid-section-one" style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover' }}>
                    <div className='container-width h-100'>
                        <div className="outer-box clearfix">
                            {/*  Content Column */}
                            <div className="content-column">
                                <div className="inner-column">
                                    <div>
                                        <p className='fw-bold primary-color text-center text-lg-start text-size-10 text-size-lg-15'><Translate title={`GREEN HYDROGEN`} /></p>
                                        <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'><Translate title={`IN INDONESIA`} /></p>
                                        <p className='text-center text-lg-start'><Translate title={`The industrial sector in Indonesia is supposed to draw a map of its energy process to choose the more effective and efficient energy using blue hydrogen or green hydrogen; this still becomes homework for the Indonesian industry. Until now, a feasibility study on this matter is still being prepared.`} /></p>
                                    </div>
                                </div>
                            </div>
                            {/*  Content Column */}
                            <div className="content-column d-none d-lg-flex ps-lg-5">
                                <div className="inner-column">
                                    <div>
                                        <img src={IconMainBanner} alt="" className='h-100 mw-100' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Fluid Section One */}

                <section className='container-width d-flex flex-wrap justify-content-center py-3 py-lg-5 position-relative' style={{ perspective: '100rem' }}>
                    <div className='col-12 col-lg-4 d-flex flex-column justify-content-center py-lg-5'>
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
                </section>

                <div className='container-article container-width'>
                    <Sidebar />
                    <div>
                        <section className='container-article-section'>
                            <p className='text-black'><Translate title={`Currently, in the green hydrogen sector, the Indonesian government needs a supply of economic financing from investors. The hydrogen price itself is still not stable; the price is still moving. The Green hydrogen price range is between 2-6 dollars/kg.`} />
                                <br /><br />
                                <Translate title={`In Indonesia, almost all major sectors are trying to manage this green hydrogen, but all of them are still being developed with no significant results. Most industries in Indonesia make fuel cells the heart of hydrogen itself. Unfortunately, there has been no specific regulation regarding green hydrogen in Indonesia. In general, if the nuclear energy sector has been developed in Indonesia, producing Green Hydrogen will be enormous in the future.`} /></p>
                        </section>

                        <section className='container-article-section container-article-section-flex gap-0'>
                            <div className='banner-container-image col-12 col-sm-auto'>
                                <img src={IconBanner1} alt="" className='w-100' />
                            </div>
                            <div className='col d-flex flex-column justify-content-center p-3' style={{ background: `url('${BackgroundSubscribe}') no-repeat`, backgroundSize: '110% 110%', backgroundPosition: 'center' }}>
                                <p className='fw-bold m-0 text-start text-size-lg-12 text-size-6'>
                                <Translate title={`Most industries in Indonesia make fuel cells the heart of hydrogen itself`} /></p>
                            </div>
                        </section>

                        <section className='container-article-section container-article-section-flex flex-row-reverse'>
                            <div className='banner-container-image col-12 col-lg-auto'>
                                <img src={IconBanner2} alt="" />
                            </div>
                            <div className='col d-flex flex-column justify-content-center p-3'>
                                <p className='fw-bold m-0 text-black text-start text-size-lg-12 text-size-6'>
                                <Translate title={`Most industries in Indonesia make fuel cells the heart of hydrogen itself`} /></p>
                            </div>
                        </section>

                        <section className='container-article-section'>
                            {/* <div className='table-responsive'> */}
                            <table className='align-center table table-bordered table-hover table-sriped w-100'>
                                <thead className='align-middle text-center'>
                                    <tr>
                                        <th className='text-center'><Translate title={`No.`} /></th>
                                        <th><Translate title={`Mitigation`} /> Action</th>
                                        <th><Translate title={`2020 Emission Reduction`} /> (Ton CO<sup>2</sup>e)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.TableEmissionReduction}
                                </tbody>
                            </table>
                            <div>
                                <p className='fw-bold text-black text-size-8 text-size-lg-10'><Translate title={`Emission reduction is accelerated through`} />:</p>
                                <ul className='ps-4 text-black'>
                                    <li style={{ listStyleType: 'disc' }}><Translate title={`Provision of electricity through NRE generators`} /></li>
                                    <li style={{ listStyleType: 'disc' }}><Translate title={`Application of energy efficiency`} /></li>
                                    <li style={{ listStyleType: 'disc' }}><Translate title={`Use of Biofuels`} /></li>
                                    <li style={{ listStyleType: 'disc' }}><Translate title={`Implementation of Biomass Cofiring to reduce coal consumption for coal PP`} /></li>
                                    <li style={{ listStyleType: 'disc' }}><Translate title={`Utilization of electric vehicles and`} /></li>
                                    <li style={{ listStyleType: 'disc' }}><Translate title={`Transition to low-carbon fuels and clean generation technologies`} /></li>
                                </ul>
                            </div>
                            {/* </div> */}
                        </section>

                        <section className='container-article-section p-3' style={{ border: '2px solid #6EC624' }}>
                            <p className='text-black'><Translate title={`Indonesia tries to optimize all resources in the country to create national energy resilience and independence and try to reduce the import in particular crude and gasoline which is currently the input are being increase and most of LPG are still imported and now trying to use develop the coal through the gasification and for LPG substitution and use renewable energy with the priority in solar power plant and to optimize by fuel production.`} /></p>
                        </section>

                        <section className='container-article-section'>
                            <p className='text-black'><Translate title={`Beyond 2035 Indonesia try to reach the target of clean energy development and approach for the net zero emission.`} /></p>
                            <ul className='text-black'>
                                <li>1.&ensp;<Translate title={`Nuclear`} /></li>
                                <li>2.&ensp;<Translate title={`Hydrogen`} /></li>
                            </ul>
                        </section>

                        <section className='container-article-section'>
                            <div className='banner-container-image landscape'>
                                <img src={IconBanner3} alt="" />
                            </div>
                            <div>
                                <p className='text-black'><Translate title={`Hydrogen and battery would be the game changer who will be the first champion to the future of clean energy development.`} /></p>
                                <ul className='text-black'>
                                    <li><Translate title={`Consideration of Utilizing Hydrogen`} />:</li>
                                    <li>-&ensp;<Translate title={`Renewable development (23% of energy by 2035)`} /></li>
                                    <li>-&ensp;<Translate title={`GHG emission reduction (29% by 2030)`} /></li>
                                    <li><Translate title={`Current Condition and Challenges`} />:</li>
                                    <li>-&ensp;<Translate title={`Oversupplied on electricity sector`} /></li>
                                    <li>-&ensp;<Translate title={`Decline on national crude palm oil production`} /></li>
                                    <li>-&ensp;<Translate title={`Minimizing subsidy in energy sectors (BBM and electricity)`} /></li>
                                    <li><Translate title={`Consideration of using Hydrogen`} />:</li>
                                    <li>-&ensp;<Translate title={`Shifting oversupply of electricity`} /></li>
                                    <li>-&ensp;<Translate title={`Creating a new market for renewable energy`} /></li>
                                    <li>-&ensp;<Translate title={`Energy storage solution for off-grid-systems`} /></li>
                                    <li>-&ensp;<Translate title={`Better energy density than battery`} /></li>
                                    <li>-&ensp;<Translate title={`May reducing consumption by enabling fuel cells vehicles`} /></li>
                                </ul>
                            </div>
                        </section>

                        <section className='container-article-section'>
                            <div className='banner-container-image landscape'>
                                <img src={IconBanner4} alt="" />
                            </div>
                            <div>
                                <p className='text-black'><Translate title={`Hydrogen Condition in Indonesia`} />:</p>
                                <ul className='text-black'>
                                    <li>-&ensp;<Translate title={`Indonesia has not drafted or issued specific on hydrogen policy`} /></li>
                                    <li>-&ensp;<Translate title={`The development of hydrogen utilizations in Indonesia mostly utilizes fossil energy sources`} /></li>
                                    <li>-&ensp;<Translate title={`The recent green hydrogen price is 3.5 Euro/kg and is predicted to decrease by 2025 within the price range 1.5 Euro/kg`} /></li>
                                    <li>-&ensp;<Translate title={`PT. HDF Energy initiates to develop HYBRID GREEN HYDROGEN using Solar PV/Wind in Sumba Island; capacity of 7-8 MW at daytime from solar and 1-2 MW at nighttime from hydrogen storage (preliminary study on competition prices with generation cost)`} /></li>
                                    <li>-&ensp;<Translate title={`The cooperation between BPPT and Toshiba, Japan.`} /></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>

                <LatestNews />

                <Sponsor />
            </>
        )
    }
}

export default GreenHydrogenIndonesia
