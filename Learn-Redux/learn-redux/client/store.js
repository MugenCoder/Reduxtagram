import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the Root Reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create an Object for the Default data
const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;