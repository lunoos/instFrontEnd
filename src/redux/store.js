// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authReducer';
import feedReducer from './reducers/feedReducer';
import profileReducer from './reducers/profileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
  profile: profileReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;