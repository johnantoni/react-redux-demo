import React from 'react';
import ReactDOM from 'react-dom';

// new imports start
import { Provider } from "react-redux";

import configureStore from "store";
// new imports stop

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// changed the render

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,    
    document.getElementById('root')
);
// changed the render

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
