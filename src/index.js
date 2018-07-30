import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';
 
import App from './App';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)



ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
       <App />
    </Provider>
, document.getElementById('root'));


