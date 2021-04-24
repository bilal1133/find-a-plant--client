import React, { useEffect } from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Login from '~/components/partials/account/Login';
import ContainerPage from '~/components/layouts/ContainerPage';
import { useRouter } from 'next/router';
import _ from 'lodash';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { socialLogin } from '~/store/auth/action';
const LoginPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    console.log(router.asPath.split(router.route)[1]);
    useEffect(() => {
        if (!router.query['raw[scope]']) {
            return;
        }
        let search = router.asPath.split(router.route)[1];
        dispatch(socialLogin({ provider: 'google', search }));
        // axios({
        //     method: 'GET',
        //     url: `http://localhost:1337/auth/google/callback?${search}`,
        // })
        //     .then((res) => res.data)
        //     .then(setAuth);
    }, [router.query]);
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Login',
        },
    ];
    return (
        <ContainerPage title="Login" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Login />
            </div>
        </ContainerPage>
    );
};

export default LoginPage;
