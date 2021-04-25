import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
import _ from 'lodash';

const Shipping = ({ user }) => {
    if (!user || !user.address) {
        return <h1>Shipping</h1>;
    }
    const { address } = user || {};
    delete address._id;
    delete address.id;
    delete address.__v;

    return (
        <div className="ps-checkout ps-section--shopping">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Shipping Information</h1>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="ps-block--shipping">
                                <div className="ps-block__panel">
                                    <h3>Contact</h3>
                                    <figure>
                                        <div className="d-flex justify-content-between flex-wrap">
                                            <span className={'m-2'}>
                                                <strong>E-mail</strong>
                                                <p>{user.email}</p>
                                            </span>
                                            <span className={'m-2'}>
                                                <strong>Name</strong>
                                                <p>{user.first_name}</p>
                                            </span>
                                            <span className={'m-2'}>
                                                <strong>Phone No</strong>
                                                <p>{user.username}</p>
                                                <p>{user.phone}</p>
                                            </span>
                                        </div>
                                    </figure>{' '}
                                    <h3>Ship to</h3>
                                    <figure className="mt-2">
                                        <div className="d-flex justify-content-around flex-wrap">
                                            {address &&
                                                Object.keys(address).map(
                                                    (key) => {
                                                        return (
                                                            <span
                                                                key={key}
                                                                className={
                                                                    'm-2'
                                                                }>
                                                                <strong>
                                                                    {_.startCase(
                                                                        key
                                                                    )}
                                                                </strong>
                                                                <p>
                                                                    {
                                                                        address[
                                                                            key
                                                                        ]
                                                                    }
                                                                </p>
                                                            </span>
                                                        );
                                                    }
                                                )}
                                        </div>
                                    </figure>
                                    <span className="mt-5 w-100 d-flex justify-content-end">
                                        <Link href="/account/checkout">
                                            <a className={'ml-auto ps-btn'}>
                                                Change
                                            </a>
                                        </Link>
                                    </span>
                                </div>
                                <h4>Shipping Method</h4>
                                {/* <div className="ps-block__panel">
                                    <figure>
                                        <h3>International Shipping</h3>
                                        <strong>$20.00</strong>
                                    </figure>
                                </div> */}
                                <div className="ps-block__footer">
                                    <Link href="/account/checkout">
                                        <a>
                                            <i className="icon-arrow-left mr-2"></i>
                                            Return to information
                                        </a>
                                    </Link>
                                    <Link href="/account/payment">
                                        <a className="ps-btn">
                                            Continue to payment
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                            <div className="ps-form__orders">
                                <ModulePaymentOrderSummary shipping={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
