require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import OutputContainer from './components/output-container';


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<OutputContainer />, document.getElementById('root'))
);