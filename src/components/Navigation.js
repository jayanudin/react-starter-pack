import React, { Component } from 'react';
import {HashRouter, NavLink, Route, Switch} from 'react-router-dom';

import Breadcrumb from './Breadcrumb';
import Footer from './Footer';

import Homepage from './Homepage';
import Pasien from './Pasien';

class Navigation extends Component {
	render() {
		return (
			<HashRouter>

                <div className="content-wrapper">
                    <div className="container-fluid">
                    	<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
						    <a className="navbar-brand" href="#">Start Bootstrap</a>
						    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="navbar-toggler-icon"></span>
						    </button>
						    <div className="collapse navbar-collapse" id="navbarResponsive">
						        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
						            <li><NavLink activeClassName='active' activeStyle={{
									color: '#cd6090' }} exact to='/'>home</NavLink></li>
									<li><NavLink activeClassName='active' activeStyle={{
									color: '#cd6090' }} exact to='/pasien'>Pasien</NavLink></li>
						        </ul>
						    </div>

						</nav>

						<Breadcrumb />

						 <Switch>
							<Route exact path='/' component={Homepage}/>
							<Route path='/pasien' component={Pasien}/>
						</Switch>

						<Footer />
						
                    </div>
                    
                </div>
				
			</HashRouter>
		);
	}
}

export default Navigation;