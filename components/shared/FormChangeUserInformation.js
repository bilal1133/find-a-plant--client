import React, { useState } from 'react';
import { DatePicker, Form, Input, Radio, Select } from 'antd';
import Link from 'next/link';
import { siteName } from '~/constants/siteDetails';
import { useDispatch } from 'react-redux';
import { updateUser } from '~/store/auth/action';

const FormChangeUserInformation = ({ user, error }) => {
    if (!user) {
        return (
            <div>
                <h1>Please Login First</h1>
                <Link href="/account/login">
                    <a className="m-5 ps-btn">Login</a>
                </Link>
                <Link href="/account/regiser">
                    <a className="m-5 ps-btn ps-tn-outline">Register</a>
                </Link>
            </div>
        );
    }
    const [disabled, setdisabled] = useState(true);
    const dispatch = useDispatch();
    const handleFormSubmit = (e) => {
        let data = { data: e, id: user._id };
        dispatch(updateUser(data));
    };
    return (
        <Form
            initialValues={user}
            // ref={formRef}
            className="ps-form--account-setting"
            onFinish={handleFormSubmit}>
            <div className="ps-form__header">
                <h3 className="ps-form__heading">Account information</h3>
            </div>
            <div className="ps-form__content">
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
                                    placeholder="First Name"
                                    disabled={disabled}
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="last_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your last Name!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="string"
                                    placeholder="Last Name"
                                    disabled={disabled}
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
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
                                disabled={disabled}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: `Please Enter E-Mail`,
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
                                    disabled={disabled}
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>

                {/* <div className="form-group">
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
            */}
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
                <div className="ps-form__submit">
                    {disabled ? (
                        <div
                            className="ps-block__footer"
                            onClick={() => setdisabled(!disabled)}>
                            <button className="ps-btn">Update Profile</button>
                        </div>
                    ) : (
                        <div className="ps-block__footer">
                            <button className="ps-btn" type={'submit'}>
                                Update Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Form>

        //         <Form className="ps-form--account-setting">
        //             <div className="ps-form__header">
        //                 <h3>Account Information</h3>
        //             </div>
        //             <div className="ps-form__content">
        //                 <div className="form-group">
        //                     <Form.Item>
        //                         <Input
        //                             className="form-control"
        //                             type="text"
        //                             placeholder="Username or email address"
        //                         />
        //                     </Form.Item>
        //                 </div>
        //                 <div className="row">
        //                     <div className="col-sm-6">
        //                         <div className="form-group">
        //                             <Form.Item>
        //                                 <Input
        //                                     className="form-control"
        //                                     type="text"
        //                                     placeholder="First name"
        //                                 />
        //                             </Form.Item>
        //                         </div>
        //                     </div>
        //                     <div className="col-sm-6">
        //                         <div className="form-group">
        //                             <Form.Item>
        //                                 <Input
        //                                     className="form-control"
        //                                     type="text"
        //                                     placeholder="Last name"
        //                                 />
        //                             </Form.Item>
        //                         </div>
        //                     </div>

        //                     <div className="col-sm-6">
        //                         <div className="form-group">
        //                             <Form.item>
        //                                 <Input
        //                                     className="form-control"
        //                                     type="text"
        //                                     placeholder="Phone Number"
        //                                 />
        //                             </Form.item>
        //                         </div>
        //                     </div>
        //                     <div className="col-sm-6">
        //                         <div className="form-group">
        //                             <Form.Item>
        //                                 <Input
        //                                     className="form-control"
        //                                     type="text"
        //                                     placeholder="Email Address"
        //                                 />
        //                             </Form.Item>
        //                         </div>
        //                     </div>
        //                     <div className="col-sm-12">
        //                         <div className="form-group">
        //                             <Form.Item>
        //                                 <Input
        //                                     className="form-control"
        //                                     type="text"
        //                                     placeholder="Address"
        //                                 />
        //                             </Form.Item>
        //                         </div>
        //                     </div>
        //                     <div className="col-sm-6">
        //                         <div className="form-group">
        //                             <Form.Item>
        //                                 <Input
        //                                     className="form-control"
        //                                     type="text"
        //                                     placeholder="City"
        //                                 />
        //                             </Form.Item>
        //                         </div>
        //                     </div>
        //                     <div className="col-sm-6">
        //                         <div className="form-group">
        //                             <Input
        //                                 className="form-control"
        //                                 type="text"
        //                                 placeholder="Country"
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className="form-group submit">
        //                     <button className="ps-btn">Update profile</button>
        //                 </div>
        //             </div>
        //         </Form>
    );
};

export default FormChangeUserInformation;
