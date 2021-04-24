/* eslint-disable no-useless-catch */
import axios from 'axios';
import { siteName } from '~/constants/siteDetails';
import Repository, { baseUrl, serializeQuery } from './Repository';
class AuthRepository {
    // config() {
    //     return {
    //         headers: {
    //             Authorization:
    //                 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjg2MWFlZGU5Zjg0MjJhOGM5ZTFhOSIsImlhdCI6MTYxODEyODQ5NCwiZXhwIjoxNjIwNzIwNDk0fQ.l82CT2hxj5cSIfIjdp-7V7-X_QHv3HIecXVRMjwyT9g',
    //         },
    //     };
    // }

    async getToken() {
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjg2MWFlZGU5Zjg0MjJhOGM5ZTFhOSIsImlhdCI6MTYxODEyODQ5NCwiZXhwIjoxNjIwNzIwNDk0fQ.l82CT2hxj5cSIfIjdp-7V7-X_QHv3HIecXVRMjwyT9g';
        try {
            const data = JSON.parse(
                localStorage.getItem(`persist:${siteName}`)
            );
            return JSON.parse(data.auth).jwt;
        } catch (error) {
            console.log(error);
        }
    }

    async login(params) {
        try {
            const reponse = await Repository.post(`${baseUrl}/auth/local`, {
                identifier: params.username,
                password: params.password,
                // identifier: 'iqbal@gmail.com',
                // password: 'string123',
            });
            return reponse.data.user;
        } catch (error) {
            throw error;
        }
    }

    async registerLocal(data) {
        try {
            const reponse = await Repository.post(
                `${baseUrl}/auth/local/register`,
                data
            );
            return reponse.data.user;
        } catch (error) {
            throw error;
        }
    }
    async socialLogin(data) {
        try {
            const reponse = await Repository.get(
                `${baseUrl}/auth/${data.provider}/callback?${data.search}`,
                data
            );
            return reponse.data.user;
        } catch (error) {
            throw error;
        }
    }

    async updateUserData(data) {
        try {
            console.log(data);
            console.log('the config', this);
            const response = await Repository.put(
                `${baseUrl}/users/${data.id}`,
                data.data,
                {
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjg2MWFlZGU5Zjg0MjJhOGM5ZTFhOSIsImlhdCI6MTYxODY1MzQyMCwiZXhwIjoxNjIxMjQ1NDIwfQ.rIaqmEZu_n4qVhrdGBqcNfL7du1t-MLdJH96ScMjaVY',
                    },
                }
            );
            return response.data.user;
            // { error: JSON.stringify(error) }));
        } catch (error) {
            throw error;
        }

        // return reponse;
    }
}
const bilal = new AuthRepository();
bilal.getToken();
export default new AuthRepository();
