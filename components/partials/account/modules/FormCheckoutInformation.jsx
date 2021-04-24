import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input, Select } from 'antd';
import { registerLocal, updateUser } from '~/store/auth/action';
import { siteName } from '~/constants/siteDetails';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

export const CheckOutLogIn = () => {
    const dispatch = useDispatch();
    const { user, error } = useSelector(({ auth }) => auth);
    if (!user.address) user.address = {};
    const handleLoginSubmit = (e) => {
        let data = {
            address: {
                address: user?.address.address,
                apartment: user?.address.apartment,
                city: user?.address.city,
                postalCode: user?.address.postalCode,
                provence: user?.address.provence,
            },
            phone: user.phone,
        };
        dispatch(updateUser({ id: user.id, data: e }));
        // console.log(e, data);
        // console.log(_.isEqual(e, data));
        // Router.push('/account/shipping');
    };
    return (
        <>
            <h1>The error {error}</h1>
            <Form
                className="ps-form__billing-info"
                initialValues={user}
                onFinish={handleLoginSubmit}>
                <h3 className="ps-form__heading">Contact information</h3>
                <div className="form-group">
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Mobile phone number!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Email or phone number"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <div className="ps-checkbox">
                        <input
                            className="form-control"
                            type="checkbox"
                            id="keep-update"
                        />
                        <label htmlFor="keep-update">
                            Keep me up to date on news and exclusive offers?
                        </label>
                    </div>
                </div>
                <h3 className="ps-form__heading">Shipping address</h3>
                <div className="form-group">
                    <Form.Item
                        name={['address', 'address']}
                        rules={[
                            {
                                required: true,
                                message: 'Enter an address!',
                            },
                            {
                                min: 8,
                                message: 'Enter valid address!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Address"
                        />
                    </Form.Item>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name={['address', 'apartment']}
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter an Apartment!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Apartment, suite, etc. (optional)"
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name={['address', 'provence']}
                                label="Provence"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Choose A Provence',
                                    },
                                ]}>
                                <Select>
                                    <Select.Option value="Punjab">
                                        Punjab
                                    </Select.Option>
                                    <Select.Option value="Sindh">
                                        Sindh
                                    </Select.Option>
                                    <Select.Option value="Balochistan">
                                        Balochistan
                                    </Select.Option>
                                    <Select.Option value="KPK">
                                        KPK
                                    </Select.Option>
                                    <Select.Option value="Gilgit">
                                        Gilgit
                                    </Select.Option>
                                </Select>
                                {/* <Input
                        className="form-control"
                        type="text"
                        placeholder="Apartment, suite, etc. (optional)"
                    /> */}
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name={['address', 'city']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter a city!',
                                    },
                                    {
                                        min: 3,
                                        message: 'Enter a valid city!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="city"
                                    placeholder="City"
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name={['address', 'postalCode']}
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter a postal oce!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="postalCode"
                                    placeholder="Postal Code"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="ps-form__submit">
                    <Link href="/account/cart">
                        <a>
                            <i className="icon-arrow-left mr-2"></i>
                            Return to shopping cart
                        </a>
                    </Link>
                    <div className="ps-block__footer">
                        <button className="ps-btn">Continue to shipping</button>
                    </div>
                </div>
            </Form>
        </>
    );
};

// export default FormCheckoutInformation;

export const CheckOutNotLogIn = () => {
    const formRef = React.createRef();
    const dispatch = useDispatch();

    const { isLoggedIn, loading, error } = useSelector(({ auth }) => auth);
    const handleLoginSubmit = (e) => {
        // console.log(e.response);
        e.provider = 'local';
        e.username = e.phone;
        dispatch(registerLocal(e));
        if (isLoggedIn) {
            Router.push('/account/shipping');
        }
    };
    return (
        <Form
            ref={formRef}
            className="ps-form__billing-info"
            onFinish={handleLoginSubmit}>
            <h3 className="ps-form__heading">Contact information</h3>
            {error && (
                <div className="row">
                    <h4>{error}</h4>
                </div>
            )}
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="first_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter your Name!',
                                },
                                {
                                    min: 3,
                                    message: 'Enter a valid name',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter your mobile phone number!',
                                },
                                {
                                    min: 11,
                                    message:
                                        'Phone number must be 11 digit long',
                                },
                                {
                                    max: 11,
                                    message:
                                        'Phone number must be 11 digit long',
                                },
                                // {
                                //     type: 'number',
                                //     message: 'Enter Valid Cell Number',
                                // },
                            ]}>
                            <Input
                                className="form-control"
                                type="number"
                                placeholder="03xx xxxxxxxxx"
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: `Please Enter password`,
                        },
                        {
                            type: 'email',
                            message: 'Please Enter a valid E-Mail',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="email"
                        placeholder={`Enter your Email`}
                    />
                </Form.Item>
            </div>
            <div className="form-group">
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: `Please Enter password`,
                        },
                        {
                            min: 5,
                            message: 'Please Enter atleat 7 chracters',
                        },
                        {
                            whitespace: false,
                            message: 'Spaces Are not Allowed In Password',
                        },
                        // {
                        //     pattern: `^.*(?=.{5,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$`,
                        //     message:
                        //         'Password Must contain 1 special chracter 1 Capital 1 Numeric Integer',
                        // },
                    ]}>
                    <Input
                        className="form-control"
                        type="password"
                        placeholder={`Password for ${siteName}`}
                    />
                </Form.Item>
            </div>
            <div className="form-group">
                <div className="ps-checkbox">
                    <input
                        className="form-control"
                        type="checkbox"
                        id="keep-update"
                    />
                    <label htmlFor="keep-update">
                        Keep me up to date on news and exclusive offers?
                    </label>
                </div>
            </div>
            <h3 className="ps-form__heading">Shipping address</h3>
            <div className="form-group">
                <Form.Item
                    name={['address', 'address']}
                    rules={[
                        {
                            required: true,
                            message: 'Enter an address!',
                        },
                        {
                            min: 8,
                            message: 'Enter valid address!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Address"
                    />
                </Form.Item>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name={['address', 'apartment']}
                            rules={[
                                {
                                    required: false,
                                    message: 'Enter an Apartment!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="Apartment, suite, etc. (optional)"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name={['address', 'provence']}
                            label="Provence"
                            rules={[
                                {
                                    required: true,
                                    message: 'Choose A Provence',
                                },
                            ]}>
                            <Select>
                                <Select.Option value="Punjab">
                                    Punjab
                                </Select.Option>
                                <Select.Option value="Sindh">
                                    Sindh
                                </Select.Option>
                                <Select.Option value="Balochistan">
                                    Balochistan
                                </Select.Option>
                                <Select.Option value="KPK">KPK</Select.Option>
                                <Select.Option value="Gilgit">
                                    Gilgit
                                </Select.Option>
                            </Select>
                            {/* <Input
                        className="form-control"
                        type="text"
                        placeholder="Apartment, suite, etc. (optional)"
                    /> */}
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name={['address', 'city']}
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter a city!',
                                },
                                {
                                    min: 3,
                                    message: 'Enter a valid city!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="city"
                                placeholder="City"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name={['address', 'postalCode']}
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter a postal oce!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="postalCode"
                                placeholder="Postal Code"
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="ps-form__submit">
                <Link href="/account/cart">
                    <a>
                        <i className="icon-arrow-left mr-2"></i>
                        Return to shopping cart
                    </a>
                </Link>
                <div className="ps-block__footer">
                    <button className="ps-btn" disabled={loading}>
                        Continue to shipping
                    </button>
                </div>
            </div>
        </Form>
    );
};
