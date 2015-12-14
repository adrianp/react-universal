import express from 'express';
import http from 'http';
import * as codes from 'http-codes';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';

import AppComponent from './components/app.js';
import IndexComponent from './components/index.js';


const routes = {
    'path': '',
    'component': AppComponent,
    'childRoutes': [
        {
            'path': '/',
            'component': IndexComponent

        }
    ]
};

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    match({routes, 'location': req.url}, (err, redirect, props) => {
        if (err) {
            res.status(codes.INTERNAL_SERVER_ERROR).send(err.message);
        } else if (redirect) {
            res.redirect(codes.MOVED_TEMPORARILY,
                `${redirect.pathname}${redirect.search}`
            );
        } else if (props) {
            const markup = renderToString(<RoutingContext {...props} />);
            res.render('index', {markup});
        } else {
            res.sendStatus(codes.NOT_FOUND);
        }

    });
});

const server = http.createServer(app);
server.listen(3000);
server.on('listening', () => {
    console.log('Listening on 3000');
});
