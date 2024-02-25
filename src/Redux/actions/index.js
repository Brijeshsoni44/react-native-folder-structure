/* eslint-disable prettier/prettier */
import {
  LOGIN_STARTED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_STARTED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_STARTED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../constant/actionTypes';

import {createAction} from '../utils/reduxUtils';

// login action method
export const loginRequest = requestBody =>
  createAction(LOGIN_REQUEST, {requestBody});
export const loginStarted = () => createAction(LOGIN_STARTED);
export const loginSuccess = response => createAction(LOGIN_SUCCESS, {response});
export const loginFailure = () => createAction(LOGIN_FAILURE);

// Signup action method
export const signupRequest = requestBody =>
  createAction(SIGNUP_REQUEST, {requestBody});
export const signupStarted = () => createAction(SIGNUP_STARTED);
export const signupSuccess = response =>
  createAction(SIGNUP_SUCCESS, {response});
export const signupFailure = () => createAction(SIGNUP_FAILURE);

//profile action method
export const logoutRequest = requestBody =>
  createAction(LOGOUT_REQUEST, {requestBody});
export const logoutStarted = () => createAction(LOGOUT_STARTED);
export const logoutSuccess = response =>
  createAction(LOGOUT_SUCCESS, {response});
export const logoutFailure = () => createAction(LOGOUT_FAILURE);
