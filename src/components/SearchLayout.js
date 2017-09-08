import React, { Component } from 'react';


class SearchLayout extends Component {
    render() {
	    return (
	      	<div className="search">
	        	<header className="search-header"></header>
	        		<div className="results">
	          			{this.props.children}
	        		</div>
	        	<div className="search-footer pagination"></div>
	     	</div>
	    );
	}
}

export default SearchLayout;
