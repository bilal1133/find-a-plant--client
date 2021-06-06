import React, { Component } from 'react';
import Link from 'next/link';
import Form from 'antd/lib/form/Form';
import { Input, Select } from 'antd';
import { accountLinks } from '~/constants/UserDashboard';

class Addresses extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        <img src="/static/img/users/3.jpg" />
                                        <figure>
                                            <figcaption>Hello</figcaption>
                                            <p>username@gmail.com</p>
                                        </figure>
                                    </div>
                                    <div className="ps-widget__content">
                                        <ul>
                                            {accountLinks.map((link) => (
                                                <li
                                                    key={link.text}
                                                    className={
                                                        link.active
                                                            ? 'active'
                                                            : ''
                                                    }>
                                                    <Link href={link.url}>
                                                        <a>
                                                            <i
                                                                className={
                                                                    link.icon
                                                                }></i>
                                                            {link.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>
                                                        <i className="icon-power-switch"></i>
                                                        Logout
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-section--account-setting">
                                <div className="ps-section__content">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            {/* <figure className="ps-block--address"> */}
                                            <Form>
                                                <div className="form-group">
                                                    <Form.Item
                                                        name={[
                                                            'address',
                                                            'address',
                                                        ]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Enter an address!',
                                                            },
                                                            {
                                                                min: 8,
                                                                message:
                                                                    'Enter valid address!',
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
                                                                name={[
                                                                    'address',
                                                                    'apartment',
                                                                ]}
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            'Enter an Apartment!',
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
                                                                name={[
                                                                    'address',
                                                                    'provence',
                                                                ]}
                                                                label="Provence"
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'Choose A Provence',
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
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <Form.Item
                                                                name={[
                                                                    'address',
                                                                    'city',
                                                                ]}
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'Enter a city!',
                                                                    },
                                                                    {
                                                                        min: 3,
                                                                        message:
                                                                            'Enter a valid city!',
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
                                                                name={[
                                                                    'address',
                                                                    'postalCode',
                                                                ]}
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            'Enter a postal oce!',
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
                                            </Form>
                                            {/* </figure> */}
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                    Shipping address
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    <p>
                                                        You Have Not Set Up This
                                                        Type Of Address Yet.
                                                    </p>
                                                    <Link href="/account/edit-address">
                                                        <a>Edit</a>
                                                    </Link>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Addresses;
