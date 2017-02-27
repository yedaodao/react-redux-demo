import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Provider} from 'react-redux';
import configureStore from '../redux/store/configureStore';

let appStore = configureStore({});
const AppWrapper = (
    <Provider store={appStore}>
        <App/>
    </Provider>
);

ReactDOM.render(AppWrapper, document.getElementById('appHolder'));

