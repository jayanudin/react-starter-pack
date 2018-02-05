import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, NavLink, Route, Switch} from 'react-router-dom';

import App from './components/App';

import './assets/vendor/bootstrap/css/bootstrap.css';
import './assets/css/sb-admin.css';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
