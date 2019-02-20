import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


// Reducers
import user from './reducers/user';
import posts from './reducers/posts';

// export default createStore(combineReducers({ user }));
export default createStore(
    posts,
    applyMiddleware(thunk),
);



