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

let initialState = {
    products: [],
    product: {},
    ingredients: [],
    ingredient: {},
    tools: [],
    tool: {},
    filterTypes: [],
    filterType: {},
    filters: [],
    filter: {},
    isLoaded: false,
    isError: false
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case ADD_FILTER:
            return {...state, isLoaded: action.isLoaded, filter: action.payload, isError: action.isError};
        case ADD_TOOL:
            return {...state, isLoaded: action.isLoaded, tool: action.payload, isError: action.isError};
        case ADD_PRODUCT:
            return {...state, isLoaded: action.isLoaded, product: action.payload, isError: action.isError};
        case ADD_INGREDIENT:
            return {...state, isLoaded: action.isLoaded, ingredient: action.payload, isError: action.isError};
        case ADD_FILTER_TYPE:
            return {...state, isLoaded: action.isLoaded, filterType: action.payload, isError: action.isError};
        case DELETE_TOOL:
            return {...state, isLoaded: action.isLoaded, tools: action.payload, isError: action.isError};
        case DELETE_PRODUCT:
            return {...state, isLoaded: action.isLoaded, products: action.payload, isError: action.isError};
        case DELETE_INGREDIENT:
            return {...state, isLoaded: action.isLoaded, ingredients: action.payload, isError: action.isError};
        case DELETE_FILTER_TYPE:
            return {...state, isLoaded: action.isLoaded, filterTypes: action.payload, isError: action.isError};
        case DELETE_FILTER:
            return {...state, isLoaded: action.isLoaded, filters: action.payload, isError: action.isError};
        case FETCH_ALL_TOOLS:
            return {...state, isLoaded: action.isLoaded, tools: action.payload, isError: action.isError};
        case FETCH_ALL_PRODUCTS:
            return {...state, isLoaded: action.isLoaded, products: action.payload, isError: action.isError};
        case FETCH_ALL_INGREDIENTS:
            return {...state, isLoaded: action.isLoaded, ingredients: action.payload, isError: action.isError};
        case FETCH_PRODUCT_FILTER_TYPES:
            return {...state, isLoaded: action.isLoaded, filterTypes: action.payload, isError: action.isError};
        case FETCH_FILTER_FILTER_TYPES:
            return {...state, isLoaded: action.isLoaded, filters: action.payload, isError: action.isError};
        case FETCH_FILTER:
            return {...state, isLoaded: action.isLoaded, filter: action.payload, isError: action.isError};
        case FETCH_TOOL:
            return {...state, isLoaded: action.isLoaded, tool: action.payload, isError: action.isError};
        case FETCH_PRODUCT:
            return {...state, isLoaded: action.isLoaded, product: action.payload, isError: action.isError};
        case FETCH_INGREDIENT:
            return {...state, isLoaded: action.isLoaded, ingredient: action.payload, isError: action.isError};
        case FETCH_FILTER_TYPE:
            return {...state, isLoaded: action.isLoaded, filterType: action.payload, isError: action.isError};
        case UPDATE_FILTER:
            return {...state, isLoaded: action.isLoaded, filter: action.payload, isError: action.isError};
        case UPDATE_TOOL:
            return {...state, isLoaded: action.isLoaded, tool: action.payload, isError: action.isError};
        case UPDATE_PRODUCT:
            return {...state, isLoaded: action.isLoaded, product: action.payload, isError: action.isError};
        case UPDATE_INGREDIENT:
            return {...state, isLoaded: action.isLoaded, ingredient: action.payload, isError: action.isError};
        case UPDATE_FILTER_TYPE:
            return {...state, isLoaded: action.isLoaded, filterType: action.payload, isError: action.isError};
        default:
            return state;
    }
}