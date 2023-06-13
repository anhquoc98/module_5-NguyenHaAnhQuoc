

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import axios from "axios";

const store = createStore(rootReducer, applyMiddleware(thunk));



export const getPosts = () => {
    return (dispatch) => {
        dispatch({ type: 'GET_POSTS_REQUEST' });

        // Gọi API để lấy danh sách bài đăng
        axios
            .get('https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts')
            .then((response) => {
                dispatch({ type: 'GET_POSTS_SUCCESS', payload: response.data });
            })
            .catch((error) => {
                dispatch({ type: 'GET_POSTS_ERROR', error });
            });
    };
};


export default store;