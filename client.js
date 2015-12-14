import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import {routes} from './routes';


const contentDOM = document.getElementById('content');

ReactDOM.render(
        <Router routes={routes} history={createBrowserHistory()} />,
        contentDOM
);
