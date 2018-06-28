import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './layout/App';


ReactDOM.render(
    (<BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root'));

