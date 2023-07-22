const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const axios = require("axios");

//constants
const TODOS_REQUEST = 'TODOS_REQUEST';
const TODOS_SUCCESS = 'TODOS_SUCCESS';
const TODOS_FAILD = 'TODOS_FAILD';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

//state
const initialState = {
    todos: [],
    isloading: false,
    error: null
}

//action
const todosRequest = () => {
    return {
        type: TODOS_REQUEST
    }
}
const todosSuccess = (todos) => {
    return {
        type: TODOS_SUCCESS,
        payload: todos
    }
}
const todosFaild = (error) => {
    return {
        type: TODOS_FAILD,
        payload: error
    }
}

//reducer
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                isloading: true
            }
        case TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                isloading: false
            }
        case TODOS_FAILD:
            return {
                ...state,
                error: action.payload,
                isloading: false
            }
        default:
            return state;
    }
}

// async action
const fetchData = () => {
    return (dispatch) => {
        dispatch(todosRequest());
        axios.get(API_URL)
            .then((response) => {
                const todos = response.data;
                dispatch(todosSuccess(todos));
            })
            .catch((error) => {
                dispatch(todosFaild(error.message));
            })
    }
}

//store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
}
)

store.dispatch(fetchData());