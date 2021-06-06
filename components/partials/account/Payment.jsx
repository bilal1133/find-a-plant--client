import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { Button, Form, Input, Radio, Select, Spin } from 'antd';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
import StripePayment from './stripePayment';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import checkoutRepo from '~/repositories/checkoutRepositry';
import { adress } from '~/constants/siteDetails';
import { resetCart } from '~/store/cart/action';
import Loading from '~/components/Loading';
const { Option } = Select;
import { useRouter } from 'next/router';
const Payment = ({ cart, user, isLoggedIn, dispatch }) => {
    const router = useRouter();

    const handleStripeSucess = (e) => {
        handleMakeCheckout();
    };
    const onFinish = (e) => {
        handleMakeCheckout();
    };

    const [loading, setloading] = useState(false);

    let newAdress = { ...user?.address };
    delete newAdress.__v;
    delete newAdress._id;
    delete newAdress.id;

    let data = {
        shipment_status: 'processing',
        user: user?._id,
        store: cart.cartItems[0]?.store || cart.cartItems[0]?.store._id,
        products: cart.cartItems.map((e) => e._id),
        shipping_adress: newAdress,
        contact_no: user?.phone,
        total: cart.amount,
        payment: {
            method: 'cash_on_delivery',
        },
    };
    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         router.push('/shop');
    //     }
    // }, []);
    console.log('useruseruser', user);
    const handleMakeCheckout = async () => {
        setloading(true);
        try {
            const resData = await checkoutRepo.makeCheckout(data);
            dispatch(resetCart());
            setloading(false);
            router.push('/account/thank');
        } catch (error) {
            console.log(error);
            setloading(false);
        }
    };
    // console.log('datadatadatadata', data);
    // let month = [],
    //     year = [];
    // for (let i = 1; i <= 12; i++) {
    //     month.push(i);
    // }
    // for (let i = 2019; i <= 2050; i++) {
    //     year.push(i);
    // }
    return (
        <div className="ps-checkout ps-section--shopping">
            {loading && <Loading />}
            <div className="container">
                <div className="ps-section__header">
                    <h1>Payment</h1>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="ps-block--shipping">
                                <div className="ps-block__panel">
                                    <figure>
                                        <small>Contact</small>
                                        <p>{user?.phone}</p>
                                        <Link href="/account/checkout">
                                            <a>Change</a>
                                        </Link>
                                    </figure>
                                    <figure className="m-5">
                                        <h5>Ship to</h5>
                                        <p>{user?.address.address}</p>
                                        <p>{user?.address.apartment}</p>
                                        <p>{user?.address.city}</p>
                                        <p>{user?.address.provence}</p>
                                        <Link href="/account/checkout">
                                            <a>Change</a>
                                        </Link>
                                    </figure>
                                </div>

                                <div className="ps-block--payment-method">
                                    <Form
                                        name="basic"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}>
                                        <h4>Payment Methods</h4>
                                        <Form.Item
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        'Please Select Payment Method',
                                                },
                                            ]}
                                            name={['payment', 'method']}>
                                            <Radio.Group>
                                                <Radio
                                                    value="easypaisa"
                                                    disabled
                                                    className="justify-content-center align-items-center m-2">
                                                    <div>
                                                        <p>Comming Soon</p>
                                                        <img
                                                            className="payment-img"
                                                            src="/static/img/easy-paisa.png"
                                                            alt="Easy Paisas"
                                                        />
                                                    </div>
                                                </Radio>
                                                <Radio
                                                    value="jazzcash"
                                                    disabled
                                                    className="justify-content-center align-items-center m-2">
                                                    <div>
                                                        <p>Comming Soon</p>
                                                        <img
                                                            className="payment-img"
                                                            src="/static/img/jazz-cash.png"
                                                            alt="Jazz Cash"
                                                        />
                                                    </div>
                                                </Radio>
                                                <Radio
                                                    className="m-3"
                                                    value="stripe">
                                                    <img
                                                        className="payment-img"
                                                        src="/static/img/visa.jpg"
                                                        alt="Credit Cart"
                                                    />
                                                </Radio>
                                                <Radio
                                                    className="m-3"
                                                    value={'cash_on_delivery'}>
                                                    <img
                                                        className="payment-img"
                                                        src="/static/img/cod.jpg"
                                                        alt="Cash On Delivery"
                                                    />
                                                </Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                        <Form.Item
                                            noStyle
                                            shouldUpdate={(
                                                prevValues,
                                                currentValues
                                            ) =>
                                                prevValues.payment?.method !==
                                                currentValues.payment?.method
                                            }>
                                            {(props) => {
                                                switch (
                                                    props.getFieldValue(
                                                        'payment'
                                                    )?.method
                                                ) {
                                                    case 'jazzcash':
                                                        return (
                                                            <h1>
                                                                Comming Soon
                                                            </h1>
                                                        );

                                                    // case 'cash_on_delivery':
                                                    //     return (
                                                    //         <h1>
                                                    //             Comming Soon
                                                    //         </h1>
                                                    //     );

                                                    case 'easypaisa':
                                                        return (
                                                            <h1>
                                                                Comming Soon
                                                            </h1>
                                                        );
                                                    case 'stripe':
                                                        return (
                                                            <StripePayment
                                                                amount={200}
                                                                callback={
                                                                    handleStripeSucess
                                                                }
                                                            />
                                                        );

                                                    default:
                                                        return null;
                                                }
                                            }}
                                        </Form.Item>

                                        <Form.Item
                                            noStyle
                                            shouldUpdate={(
                                                prevValues,
                                                currentValues
                                            ) =>
                                                prevValues.payment?.method !==
                                                currentValues.payment?.method
                                            }>
                                            {(props) => {
                                                return (
                                                    props.getFieldValue(
                                                        'payment'
                                                    )?.method !== 'stripe' && (
                                                        <div className="form-group">
                                                            <button className="ps-btn ps-btn--fullwidth">
                                                                Proceed
                                                                {loading && (
                                                                    <Spin />
                                                                )}
                                                            </button>
                                                        </div>
                                                    )
                                                );
                                            }}
                                        </Form.Item>
                                    </Form>
                                    {/* <div className="ps-block__content">
                                            <div className="ps-block__tab">
                                                <div className="form-group">
                                                    <label>Card Number</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Card Holders</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="row">
                                                    <div className="col-8">
                                                        <div className="form-group">
                                                            <label>
                                                                Expiration Date
                                                            </label>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <Select
                                                                        defaultValue={
                                                                            1
                                                                        }>
                                                                        {month.map(
                                                                            (
                                                                                item
                                                                            ) => (
                                                                                <Option
                                                                                    value={
                                                                                        item
                                                                                    }
                                                                                    key={
                                                                                        item
                                                                                    }>
                                                                                    {
                                                                                        item
                                                                                    }
                                                                                </Option>
                                                                            )
                                                                        )}
                                                                    </Select>
                                                                </div>
                                                                <div className="col-6">
                                                                    <Select
                                                                        defaultValue={
                                                                            2020
                                                                        }>
                                                                        {year.map(
                                                                            (
                                                                                item
                                                                            ) => (
                                                                                <Option
                                                                                    value={
                                                                                        item
                                                                                    }
                                                                                    key={
                                                                                        item
                                                                                    }>
                                                                                    {
                                                                                        item
                                                                                    }
                                                                                </Option>
                                                                            )
                                                                        )}
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label>CVV</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    */}
                                </div>
                                <div className="ps-block__footer">
                                    <Link href="/account/shipping">
                                        <a>
                                            <i className="icon-arrow-left mr-2"></i>
                                            Return to shipping
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
                            <div className="ps-form__orders">
                                <ModulePaymentOrderSummary />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(({ cart, auth }) => ({
    cart: cart,
    user: auth.user,
    isLoggedIn: auth.isLoggedIn,
}))(Payment);
// "shipment_status": "processing",
//   "user": "string",
//   "store": "string",
//   "products": [
//     "string"
//   ],
//   "shipping_adress": {
//     "id": "string",
//     "latitude": 0,
//     "longitude": 0,
//     "city": "string",
//     "address": "string",
//     "provence": "string",
//     "apartment": "string"
//   },
//   "contact_no": 0,
//   "total": 0,
//   "payment": {
//     "id": "string",
//     "method": "cash_on_delivery"
//   },
//   "payment_status": false,
