import React, { Component } from 'react';

class Breadcrumb extends Component {
	render() {
		return(
			<ol className="breadcrumb">
		        <li className="breadcrumb-item">
		          <a href="#">Dashboard</a>
		        </li>
		        <li className="breadcrumb-item active">My Dashboard</li>
		    </ol>
		);
	}
}

export default Breadcrumb;