import React from 'react';
import {
    CheckOutLogIn,
    CheckOutNotLogIn,
} from './modules/FormCheckoutInformation';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
const Checkout = ({ isLoggedIn }) => { 
    return (
        <div className="ps-checkout ps-section--shopping">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Checkout Information</h1>
                </div>
                <div className="ps-section__content">
                    <div className="ps-form--checkout">
                        <div className="ps-form__content">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                    {isLoggedIn ? (
                                        <CheckOutLogIn />
                                    ) : (
                                        <CheckOutNotLogIn />
                                    )}
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                                    <div className="ps-form__orders">
                                        <h3>Your order</h3>
                                        <ModulePaymentOrderSummary />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
