import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import data from '../../data/mock.json';


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
}); 

let store = createStore(
    rootReducer,
    {
        products: data.catalog 
    }
   
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
