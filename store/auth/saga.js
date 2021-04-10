import { all, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import AuthRepository from '../../repositories/AuthRepositry';
import {
    actionTypes,
    loginSuccess,
    logOutSuccess,
    authError,
    loading,
} from './action';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Wellcome back',
        description: 'You are login successful!',
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

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
