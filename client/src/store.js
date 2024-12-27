
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Ensure this path is correct

const initialState = {};

// Middleware
const middleware = [thunk];

// Redux DevTools Extension setup
const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

// Create store
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
