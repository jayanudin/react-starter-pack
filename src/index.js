import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import Homepage from './components/Homepage';
import Contact from './components/Contact';

ReactDOM.render((
  	<BrowserRouter>
  		<div>
		    <Route path="/" component={App} />
		    <Route path="/homepage" component={Homepage} />
		    <Route path="/about" component={About} />
		    <Route path="/contact" component={Contact} />
	    </div>
	</BrowserRouter>

), document.getElementById('app'));
