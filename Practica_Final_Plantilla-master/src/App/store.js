import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// Reducers
import user from './reducers/user';
import posts from './reducers/posts';
// Creamos el Store
export default createStore(
    combineReducers({
        user,
        posts
    }),
    applyMiddleware(thunk),
);