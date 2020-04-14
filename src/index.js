import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducers';

// const enhancers = compose(
//    window.devToolsExtensions ? window.devToolsExtensions() : f => f     
// );

const store = createStore(reducer, devToolsEnhancer());
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
    document.getElementById('app')
);

