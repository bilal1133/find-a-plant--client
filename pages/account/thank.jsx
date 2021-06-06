import React, { useEffect } from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Checkout from '~/components/partials/account/Checkout';
import { getCart } from '~/store/cart/action';
import { connect, useDispatch } from 'react-redux';
import ContainerPage from '~/components/layouts/ContainerPage';
import { siteName } from '~/constants/siteDetails';
import Link from 'next/link';
const CheckoutPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Thanks for Shoping',
            url: '/account/shopping-cart',
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <ContainerPage title="Thanks for Shopping" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container d-flex align-items-center flex-column">
                    <h2
                        style={{
                            fontFamily:
                                "'Playfair Display','Libre Baskerville' ",
                        }}>
                        Thank you for Shoping From {siteName}
                    </h2>
                    <h2>Your Order Will Be Delivered Within 7 working Days</h2>
                    <img
                        src="/static/img/thank.svg"
                        style={{
                            minWidth: '300px',
                            minHeight: '300px',
                            height: '100%',
                            width: '100%',
                            maxWidth: '500px',
                            maxHeight: '500px',
                            margin: '30px',
                        }}
                        alt=""
                    />
                    <h2>See you Soon</h2>
                    <Link href="/shop">
                        <a className="ps-btn ps-rounded m-5"> Shop More</a>
                    </Link>
                </div>
            </div>
        </ContainerPage>
    );
};

export default connect(({ auth }) => auth)(CheckoutPage);
