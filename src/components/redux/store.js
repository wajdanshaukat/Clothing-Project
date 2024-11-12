import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import logger from 'redux-logger';



const Middleware =  [  logger];
const store = createStore(rootReducer, applyMiddleware(...Middleware));


export default store