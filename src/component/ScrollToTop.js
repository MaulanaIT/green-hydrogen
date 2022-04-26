import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import $ from 'jquery';
import WOW from 'wowjs';

export default function ScrollToTop() {

    const location = useLocation();

    useEffect(() => {
        document.getElementById('preloader').style = 'display: block;';

        window.scrollTo(0, 0);

        setTimeout(() => {
            if (document.body.offsetTop < 10) {
                let wow = new WOW.WOW({
                    live: false
                });
                wow.init();
            }
        }, 600);

        $('.preloader').delay(2000).fadeOut(500);
    }, [location.pathname]);

    return (
        <></>
    )
}
