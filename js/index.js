require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import Output from './components/output';


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Output />, document.getElementById('root'))
);