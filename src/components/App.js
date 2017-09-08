import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <nav>
                <ul className="navigation">
                    <li><Link to="/homepage">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        );
    }
}

export default App;
