import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';


class App extends Component {
    render() {
        return (
            <div className="main-wrap">
                <Navigation />
            </div>
          
        );
    }
}

export default App;
