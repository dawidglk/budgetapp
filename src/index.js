import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root/Root';
import { Provider } from 'react-redux';
import store from './root/store';

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
document.getElementById('root'));
