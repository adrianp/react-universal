import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

// note that by using this entry point we are requsing the server-side code
import {routes} from './routes';


const contentDOM = document.getElementById('content');

ReactDOM.render(
        <Router routes={routes} history={createBrowserHistory()} />,
        contentDOM
);
