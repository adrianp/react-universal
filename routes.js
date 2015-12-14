import AppComponent from './components/app.js';
import IndexComponent from './components/index.js';


export const routes = {
    'path': '',
    'component': AppComponent,
    'childRoutes': [
        {
            'path': '/',
            'component': IndexComponent

        }
    ]
};
