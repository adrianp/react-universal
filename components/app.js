import {Link} from 'react-router';
import React from 'react';

export default class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome to my App</h2>

                {/* navigation present on all pages */}
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>

                {/* the actual content of the page */}
                {this.props.children}
            </div>
        );
    }
}
