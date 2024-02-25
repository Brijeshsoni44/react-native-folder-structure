/* eslint-disable prettier/prettier */
import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    SIGNUP_STARTED,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,


} from '../constant/actionTypes';
import Immutable from 'seamless-immutable';

import { createReducer } from '../utils/reduxUtils';

export const initialState = Immutable.from({
    loading: false,
    app: {
        loading: false,
        loginData: null,
        signupData: null,
    },
});

// Login
export const onLoginStarted = (state) =>
state?.merge({
        app: state.app.merge({
            loginData: initialState.app.loginData,
            loading: true,
        }),
    });
export const onLoginSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            loginData: response,
            loading: false,
        }),
    });
export const onLoginFailure = (state) =>
    state.merge({
        app: state.app.merge({
            loginData: initialState.app.loginData,
            loading: false,
        }),
    });

// Signup
export const onSignupStarted = (state) =>
    state.merge({
        app: state.app.merge({
            signupData: initialState.app.signupData,
            loading: true,
        }),
    });
export const onSignupSuccess = (state, response) =>
    state.merge({
        app: state.app.merge({
            signupData: response,
            loading: false,
        }),
    });
export const onSignupFailure = (state) =>
    state.merge({
        app: state.app.merge({
            signupData: initialState.app.signupData,
            loading: false,
        }),
    });

const appReducer = createReducer(initialState, {
    [LOGIN_STARTED]: onLoginStarted,
    [LOGIN_SUCCESS]: onLoginSuccess,
    [LOGIN_FAILURE]: onLoginFailure,

    [SIGNUP_STARTED]: onSignupStarted,
    [SIGNUP_SUCCESS]: onSignupSuccess,
    [SIGNUP_FAILURE]: onSignupFailure,

});

export default appReducer;
