import React from 'react';
import { siteName } from '~/constants/siteDetails';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
        <p>&copy; 2021 {siteName}. All Rights Reserved</p>
        <p>
            <span>We Using Safe Payment For:</span>
            <a href="#">
                <img
                    src="/static/img/payment-method/1.jpg"
                    alt="find-a-plant"
                />
            </a>
            <a href="#">
                <img
                    src="/static/img/payment-method/2.jpg"
                    alt="find-a-plant"
                />
            </a>
            <a href="#">
                <img
                    src="/static/img/payment-method/3.jpg"
                    alt="find-a-plant"
                />
            </a>
            <a href="#">
                <img
                    src="/static/img/payment-method/4.jpg"
                    alt="find-a-plant"
                />
            </a>
            <a href="#">
                <img
                    src="/static/img/payment-method/5.jpg"
                    alt="find-a-plant"
                />
            </a>
        </p>
    </div>
);

export default FooterCopyright;
