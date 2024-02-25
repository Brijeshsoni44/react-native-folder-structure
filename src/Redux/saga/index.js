/* eslint-disable prettier/prettier */
import {put, takeLatest, all} from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  SIGNUP_REQUEST,



} from '../constant/actionTypes';
import {
  loginStarted,
  loginSuccess,
  loginFailure,
  signupStarted,
  signupSuccess,
  signupFailure,

} from '../actions';
import BaseModel from '../../Model/baseModel';
import {showMessage} from '../../Utility/utility';

// Saga method for LOGIN request
export function* onLoginRequest(action) {
  try {
    yield put(loginStarted());
    const responseObj = yield BaseModel.login(action.requestBody);
    if (isValidResponseWithoutAlert(responseObj, false)) {
      yield put(loginSuccess(responseObj));
    } else {
      yield put(loginFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(loginFailure());
  }
}

// Saga method for SIGNUP request
export function* onSignupRequest(action) {
  try {
    yield put(signupStarted());
    const responseObj = yield BaseModel.signup(action.requestBody);
    if (isValidResponseWithoutAlert(responseObj, false)) {
      yield put(signupSuccess(responseObj));
    } else {
      yield put(signupFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(signupFailure());
  }
}


function isValidResponseWithoutAlert(responseObj) {
  if (responseObj && responseObj.data) {
    if (!responseObj.data.error) {
      return true;
    } else {
      return false;
    }
  } else {
    setTimeout(() => {
      showMessage(true, 'Internal Server Error');
    }, 100);
    return false;
  }
}

export function* actionWatcher() {
  yield takeLatest(LOGIN_REQUEST, onLoginRequest);
  yield takeLatest(SIGNUP_REQUEST, onSignupRequest);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
