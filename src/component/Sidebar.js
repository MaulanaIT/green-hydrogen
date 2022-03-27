import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa';

import style from '../css/sidebar.module.css';

export class Sidebar extends Component {

    componentDidMount() {
        let dropdownMenu = document.querySelectorAll(`.${style.dropdown}`);

        dropdownMenu.forEach(menu => {
            menu.addEventListener('click', function() {
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
    }

    render() {
        return (
            <div className={style.container}>
                <div id='sidebar-menu' className={style['top-container']}>
                    <ul>
                        <li><Link to={'/green-hydrogen/overview'}>Green Hydrogen Overview</Link></li>
                        <li><Link to={'/green-hydrogen/production'}>Green Hydrogen Production</Link></li>
                        <li className={style.dropdown}>
                            <div>
                                Green Hydrogen In Indonesia
                                <i><FaChevronDown /></i>
                            </div>
                            <ul className={style['dropdown-menu']}>
                                <li><Link to={'/green-hydrogen/in-indonesia/overview'}>Overview Green Hydrogen In Indonesia</Link></li>
                                <li><Link to={'/green-hydrogen/in-indonesia/potential'}>Indonesia Green Hydrogen Potential</Link></li>
                                <li><Link to={'/green-hydrogen/in-indonesia/legal-framework'}>Legal Framework</Link></li>
                                <li><Link to={'/green-hydrogen/in-indonesia/stakeholder-mapping'}>Stakeholder Mapping</Link></li>
                                <li><Link to={'/green-hydrogen/in-indonesia/initiation-action'}>Initiation & Action</Link></li>
                                <li><Link to={'/green-hydrogen/in-indonesia/development-progress'}>Hydrogen Development Progress</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={style['bottom-container']}>
                    <div className={style.button}>Hydrogen</div>
                    <div className={style.button}>Hydrogen Indonesia</div>
                    <div className={style.button}>Indonesia Target</div>
                </div>
            </div>
        )
    }
}

export default Sidebar