import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
//import {robots} from './robots'
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots})
//const store = createStore(searchRobots, applyMiddleware(thunkMiddlewaree, logger))
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			 document.getElementById('root'));

//Provider component takes care of passing down the store to the App components
//// If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
