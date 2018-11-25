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

let initialState = {
    username: '',
    email: '',
    image: '',
    role: '',
    isAuth: false,
    isError: false
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {...state, username: action.username, role: action.role, isAuth: action.isAuth, isError: action.isError};
        case SIGN_UP:
            return {...state, isError: action.isError};
        case LOGOUT:
            return {...initialState};
        default:
            return state;
    }
}