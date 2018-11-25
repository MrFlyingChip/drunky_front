import {
    CHECK_COOKIES,
    ADD_COMMENT,
    ADD_TO_FAVOURITES,
    DELETE_COMMENT,
    FETCH_USER_DATA,
    LIKE_PRODUCT,
    LOG_IN,
    LOGOUT,
    REMOVE_FROM_FAVOURITES,
    SIGN_UP,
    UNLIKE_PRODUCT,
    UPDATE_COMMENT
} from '../constants/User';
import {API_PATH} from "../constants/Drunky";
import {browserHistory} from 'react-router';

export function checkCookies() {
    return (dispatch) => {
        const username = window.localStorage.getItem('rr_username') || '';
        const role = window.localStorage.getItem('rr_role') || '';
        if (username !== '') {
            dispatch({
                type: LOG_IN,
                role: role,
                username: username,
                isAuth: true
            })
        }
    }
}

export function logOut() {
    return (dispatch) => {
        window.localStorage.setItem('rr_username', '');
        window.localStorage.setItem('rr_role', '');
        dispatch({
            type: LOGOUT,
            isError: false
        })
    }
}

export function signUp(payload) {
    return (dispatch) => {
        const xhr = new XMLHttpRequest();
        const URL = API_PATH + 'user/signUp';
        xhr.open("POST", URL, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({user: payload}));
        let result = JSON.parse(xhr.response);
        if (!result.error) {
            browserHistory.push('/');
            dispatch({
                type: SIGN_UP,
                isError: false
            })
        } else {
            dispatch({
                type: SIGN_UP,
                isError: true
            })
        }
    }
}

export function logIn(payload) {
    return (dispatch) => {
        const xhr = new XMLHttpRequest();
        const URL = API_PATH + 'user/logIn';
        xhr.open("POST", URL, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(payload));
        let result = JSON.parse(xhr.response);
        if (!result.error) {
            browserHistory.push('/');
            window.localStorage.setItem('rr_username', result.username);
            window.localStorage.setItem('rr_role', result.role);
            dispatch({
                type: LOG_IN,
                isError: false,
                username: result.username,
                isAuth: true,
                role: result.role
            })
        } else {
            dispatch({
                type: LOG_IN,
                isError: true,
                isAuth: false
            })
        }
    }
}

