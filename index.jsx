const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
// product constants
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

//product reducer
const initialState = {
    products: ["apple"],
    count: 1
}

// action 
const getProduct = () => {
    return {
        type: GET_PRODUCT
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

const removeProduct = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product
    }
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return state;
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                count: state.count + 1
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product !== action.payload),
                count: state.count - 1
            }
        default:
            return state;
    }
}

const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProduct());
store.dispatch(addProduct("banana"));
store.dispatch(addProduct("orange"));
store.dispatch(removeProduct("banana"));


// cart reducer