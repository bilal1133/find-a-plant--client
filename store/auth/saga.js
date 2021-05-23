import { all, call, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import AuthRepository from '../../repositories/AuthRepositry';
import {
    actionTypes,
    loginSuccess,
    logOutSuccess,
    authError,
    loading,
} from './action';

const modalSuccess = (type, message = 'You are login successful!') => {
    notification[type]({
        message: 'Wellcome',
        description: message,
    });
};

const modalWarning = (type) => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};
const modalError = (msg) => {
    notification['error']({
        message: 'ERROR',
        description: msg,
    });
};

function* loginSaga(data) {
    try {
        yield put(loading(true));
        yield put(authError(null));
        const data1 = yield AuthRepository.login(data.payload);
        yield put(loginSuccess(data1));
        modalSuccess('success');
    } catch (err) {
        const error = err.response.data.message[0].messages[0].message;
        modalError(error);
        yield put(authError(error));
    }
    yield put(loading(false));
}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}
function* registerLocalSaga({ payload }) {
    try {
        yield put(loading(true));
        yield put(authError(null));
        let response = yield call(AuthRepository.registerLocal, payload.data);
        yield put(loginSuccess(response));
        modalSuccess('success', 'Account Created successful!');
        if (payload.callback) {
            payload.callback();
        }
        // modalWarning('warning');
    } catch (err) {
        console.log('error.response', err.response.data.message[0]);
        yield put(
            authError(
                'Email or Phone No is Already Taken. Login or Try with another PhoneNo or Email !'
            )
        );
    }
    yield put(loading(false));
}
function* updateUserSaga(data) {
    try {
        yield put(loading(true));
        yield put(authError(null));
        let response = yield call(AuthRepository.updateUserData, data.payload);
        yield put(loginSuccess(response));
        modalSuccess('success', 'Updated successful!');
        if (data.payload.callback) {
            data.payload.callback();
        }
    } catch (err) {
        yield put(
            authError(
                'Phone No is Already Taken. Please Try with another PhoneNo !'
            )
        );
    }
    yield put(loading(false));
}
function* loginSocial(data) {
    try {
        console.log('In social Login', data);
        yield put(loading(true));
        yield put(authError(null));
        let response = yield call(AuthRepository.socialLogin, data.payload);
        console.log(response);
        yield put(loginSuccess(response));
        modalSuccess('success', 'Login  successful!');
        // console.log('response', response);
    } catch (err) {
        modalError('Unable to Login Please Try Again !');
        yield put(authError('Unable to Login Please Try Again !'));
    }
    yield put(loading(false));
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_LOCAL, registerLocalSaga)]);
    yield all([takeEvery(actionTypes.UPDATE_USER, updateUserSaga)]);
    yield all([takeEvery(actionTypes.SOCIAL_LOGIN, loginSocial)]);
}
