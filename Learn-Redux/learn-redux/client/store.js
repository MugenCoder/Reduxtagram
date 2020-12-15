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

// HOT RELOAD REDUCERS DEMO
// What: accept hot reloads & rerequire the reduecer
// How: root reducer is recompiled by swapping root reducers within the Store without requiring a page reload
// Why: testing/manipulating State data that is constantly being reloaded/swapped/edited from within the Store
if(module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;