import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { registerLocal, updateUser } from '../../../store/auth/action';

import { Form, Input, Radio, Spin } from 'antd';
import { connect } from 'react-redux';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    formRef = React.createRef();

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             this.props.dispatch(login());
    //             Router.push('/account/login');
    //         } else {
    //         }
    //     });
    // };
    handleLoginSubmit = (e, b) => {
        delete e.confirm;
        // let data = {
        //     address: {
        //         address: user?.address.address,
        //         apartment: user?.address.apartment,
        //         city: user?.address.city,
        //         postalCode: user?.address.postalCode,
        //         provence: user?.address.provence,
        //     },
        //     phone: user.phone,
        // };
        // // console.log(e, data);
        // if (_.isEqual(e, data)) {
        //     Router.push('/account/shipping');
        // } else
        e.provider = 'local';
        e.username = e.phone;
        this.props.dispatch(
            registerLocal({
                data: e,
                callback: () => Router.push('/'),
            })
        );
    };
    render() {
        if (this.props.error) {
            this.formRef.current.setFields([
                { errors: ['Email already Taken'], name: 'email' },
                { errors: ['Phone No is already Taken'], name: 'phone' },
            ]);
        }
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        scrollToFirstError
                        className="ps-form--account pt-1"
                        // onSubmit={this.handleSubmit}
                        onFinish={this.handleLoginSubmit}
                        ref={this.formRef}
                        
                        >
                        <ul className="ps-tab-list">
                            <li>
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="register">
                            <div className="ps-form__content">
                                <h5>Register An Account</h5>
                                <div className="form-group">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                type: 'email',
                                                message:
                                                    'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message:
                                                    'Please input your E-mail!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email address"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="first_name"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input First Name',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="string"
                                            placeholder="First Name"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="last_name"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input Last Name',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="string"
                                            placeholder="Last Name"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Phone No',
                                            },
                                            {
                                                max: 11,
                                                message:
                                                    'Please Enter Valid Phone No',
                                            },
                                            {
                                                min: 11,
                                                message:
                                                    'Please Enter Valid Phone No',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="number"
                                            placeholder="03xx-xxxxxxx"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="confirm"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (
                                                        !value ||
                                                        getFieldValue(
                                                            'password'
                                                        ) === value
                                                    ) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(
                                                        new Error(
                                                            'The two passwords that you entered do not match!'
                                                        )
                                                    );
                                                },
                                            }),
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            placeholder="Confirm Password"
                                        />
                                    </Form.Item>
                                </div>
                                {/* 
                                <Form.Item name="user_type">
                                    <Radio.Group>
                                        <Radio value="vendor">
                                            I am a Vendor
                                        </Radio>
                                        <Radio value="customer">
                                            I am a Customer
                                        </Radio>
                                    </Radio.Group>
                                </Form.Item> */}
                                {this.props.error && (
                                    <h5 style={{ color: 'red' }}>
                                        {this.props.error}
                                    </h5>
                                )}{' '}
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth"
                                        disabled={this.props.loading}
                                        style={{
                                            backgroundColor:
                                                this.props.loading && '#000000',
                                        }}>
                                        Register{' '}
                                        {this.props.loading && <Spin />}
                                    </button>
                                </div>
                            </div>
                            {/* <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.auth;
};
export default connect(mapStateToProps)(Register);
