import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {friendReducer} from './reducers';

const store = createStore(friendReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
