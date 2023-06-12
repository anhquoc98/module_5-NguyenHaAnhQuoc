import { createStore } from 'redux';

const initialState = {
    posts: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_POSTS':
            return { ...state, posts: action.payload };
        case 'CREATE_POST':
            return { ...state, posts: [...state.posts, action.payload] };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;