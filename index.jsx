const { createStore } = require("redux");
const { combineReducers } = require("redux");

// product constants
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// cart constants
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
const REMOVE_CART = "REMOVE_CART";


//product state
const initialState = {
    products: ["apple"],
    count: 1
}

// cart state
const initialCartState = {
    cart: ["apple"],
    count: 1
}

// product action 
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

// cart action
const getCart = () => {
    return {
        type: GET_CART
    }
}

const addCart = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
}

const removeCart = (product) => {
    return {
        type: REMOVE_CART,
        payload: product
    }
}

// product reducer
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

// cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART:
            return state;
        case ADD_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                count: state.count + 1
            }
        case REMOVE_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product !== action.payload),
                count: state.count - 1
            }
        default:
            return state;
    }
}

// root reducer
const rootReducer = combineReducers({
    productReducer,
    cartReducer
})

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProduct());
store.dispatch(addProduct("cherry"));
store.dispatch(addProduct("barry"));
store.dispatch(removeProduct("barry"));

store.dispatch(getCart());
store.dispatch(addCart("banana"));
store.dispatch(addCart("orange"));
store.dispatch(removeCart("banana"));


