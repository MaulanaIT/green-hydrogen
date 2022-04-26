import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa';

import style from '../css/sidebar.module.css';
import i18next, { t } from 'i18next';
import { ConfigAPI } from './helper';
import axios from 'axios';

export class Sidebar extends Component {

    state = {
        htmlContent: []
    }

    componentDidMount() {
        axios.get(`https://admin.greenhydrogen.my.id/api/menu/${i18next.language}`, ConfigAPI()).then(response => {
            let data = response.data.filter(item => item.name === 'Green Hydrogen' || item.name === 'Hidrogen Hijau');

            let htmlContent = [];

            if (data[0].subs) {
                data[0].subs.map((item, index) => {
                    if (item.subs.length > 0) {
                        htmlContent.push(
                            <li key={index} className={style.dropdown}>
                                <div>
                                    {item?.name}
                                    <i><FaChevronDown /></i>
                                </div>
                                <ul className={style['dropdown-menu']}>
                                    {item.subs.map((item2, index2) => {
                                        if (item2.subs.length > 0) {
                                            return <li key={index2} className={style.dropdown}>
                                                <div>
                                                    {item2?.name}
                                                    <i><FaChevronDown /></i>
                                                </div>
                                                <ul className={style['dropdown-menu']}>
                                                    {item2.subs.map((item3, index3) => {
                                                        if (item3.subs.length > 0) {
                                                            return <li key={index3} className={style.dropdown}>
                                                                <div>
                                                                    {item3?.name}
                                                                    <i><FaChevronDown /></i>
                                                                </div>
                                                                <ul className={style['dropdown-menu']}>
                                                                    {item3.subs.map((item4, index4) => {
                                                                        return <li key={index4}><Link to={`${item4?.link}`}>{item4?.name}</Link></li>;
                                                                    })}
                                                                </ul>
                                                            </li>
                                                        } else {
                                                            return <li key={index3}><Link to={`${item3?.link}`}>{item3?.name}</Link></li>;
                                                        }
                                                    })}
                                                </ul>
                                            </li>
                                        } else {
                                            return <li key={index2}><Link to={`${item2?.link}`}>{item2?.name}</Link></li>;
                                        }
                                    })}
                                </ul>
                            </li>
                        );
                    } else {
                        htmlContent.push(<li key={index}><Link to={`${item?.link}`}>{item?.name}</Link></li>);
                    }
                });
            }

            this.setState({ htmlContent: htmlContent }, () => {
                let dropdownMenu = document.querySelectorAll(`.${style.dropdown}`);
        
                dropdownMenu.forEach(menu => {
                    menu.addEventListener('click', function () {
                        dropdownMenu.forEach(item => {
                            if (item != this) item.classList.remove(`${style.active}`);
                            else this.classList.toggle(`${style.active}`);
                        });
                    });
                });

                let menu = document.querySelectorAll(`#sidebar-menu ul li > a`);
        
                menu.forEach(menu => {
                    if (menu.getAttribute('href') == window.location.pathname) menu.classList.add(`${style.active}`);
                    else menu.classList.remove(`${style.active}`);
                });
        
                let pathname = ['/green-hydrogen/overview', '/green-hydrogen/production'];
        
                if (!pathname.includes(window.location.pathname)) {
                    document.querySelector(`.${style.dropdown}`).classList.add(`${style.active}`);
                }
        
                window.addEventListener('scroll', function () {
                    let sidebar = document.getElementById('sidebar');
                    let rectSidebar = sidebar.getBoundingClientRect();
                    let sidebarContainer = document.getElementById('sidebar-container');
                    let rectSidebarContainer = sidebarContainer.getBoundingClientRect();
        
                    if (rectSidebarContainer.bottom <= 120 + rectSidebar.height) {
                        sidebar.classList.remove(`${style.scrollable}`);
                        sidebar.classList.add(`${style.stick_bot}`);
                    } else {
                        if (rectSidebarContainer.y <= 100) {
                            sidebar.classList.add(`${style.scrollable}`);
                            sidebar.classList.remove(`${style.stick_bot}`);
                        } else {
                            sidebar.classList.remove(`${style.scrollable}`);
                        }
                    }
                });
            });
        });
    }

    render() {
        return (
            <div id='sidebar-container' className='pe-lg-3' style={{ width: 400 }}>
                <div id='sidebar' className={style.container}>
                    <div id='sidebar-menu' className={style['top-container']}>
                        <ul>
                            {this.state.htmlContent}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar