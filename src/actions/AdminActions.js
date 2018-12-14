import {
    FETCH_ALL_PRODUCTS,
    ADD_FILTER,
    ADD_FILTER_TYPE,
    ADD_INGREDIENT,
    ADD_PRODUCT,
    ADD_TOOL,
    DELETE_FILTER,
    DELETE_FILTER_TYPE,
    DELETE_INGREDIENT,
    DELETE_PRODUCT,
    DELETE_TOOL,
    FETCH_ALL_INGREDIENTS,
    FETCH_ALL_TOOLS,
    FETCH_FILTER,
    FETCH_FILTER_FILTER_TYPES,
    FETCH_FILTER_TYPE,
    FETCH_INGREDIENT,
    FETCH_PRODUCT,
    FETCH_PRODUCT_FILTER_TYPES,
    FETCH_TOOL,
    UPDATE_FILTER,
    UPDATE_FILTER_TYPE,
    UPDATE_INGREDIENT,
    UPDATE_PRODUCT,
    UPDATE_TOOL
} from "../constants/Admin";
import fetch from 'cross-fetch'
import {API_PATH} from "../constants/Drunky";
import {browserHistory} from 'react-router';

export function fetchAllProducts(product) {
    return (dispatch) => {
        startRequest(FETCH_ALL_PRODUCTS);
        fetch(API_PATH + 'admin/products/' + product)
            .then(res => res.json())
            .then(value => {
                dispatch(finishRequest(FETCH_ALL_PRODUCTS, false, value));
            })
            .catch(error => {
                dispatch(finishRequest(FETCH_ALL_PRODUCTS, true, []));
            })
    }
}

function startRequest(requestType){
    return (dispatch) => {
        dispatch({
            type: requestType,
            payload: [],
            isLoaded: false,
            isError: false
        });
    }
}

function finishRequest(requestType, isError, result) {
    return (dispatch) => {
        dispatch({
            type: requestType,
            payload: result,
            isLoaded: true,
            isError: isError
        });
    }
}