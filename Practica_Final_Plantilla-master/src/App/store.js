import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// Reducers
import user from './reducers/user';
import posts from './reducers/posts';
import songs from './reducers/songs';
// Creamos el Store
export default createStore(
    combineReducers({
        posts,
        user,
        songs
    }),
    applyMiddleware(thunk),
);

