const { createStore } = require("redux");

//constants
const Increment = "Increment";
const Decrement = "Decrement";
const Reset = "Reset";
//state
const initialState = 0;

//action creators
const increment = () => {
    return {
        type: Increment,
    };
}
const decrement = () => {
    return {
        type: Decrement,
    };
}
const reset = () => {
    return {
        type: Reset,
    };
}

//reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Increment:
            return state + 1;
        case Decrement:
            return state - 1;
        case Reset:
            return initialState;
        default:
            return state;
    }
}

//store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
}
);

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

