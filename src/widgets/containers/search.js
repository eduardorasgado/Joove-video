import React, { Component } from 'react';
import SearchLayout from '../components/search-layout';

class Search extends Component{ 

	handleSubmit = (event) => {
		event.preventDefault();
		window.alert("Pick a boo! "+this.input.value);
		}

	setInputRef = element => {
		this.input = element;
	}

	render(){
		return(
			<SearchLayout
				{/*We user ref for pass some unique id
				 element through components*/}
				setRef={this.setInputRef}
				handleSubmit={this.handleSubmit}
			/>
			);
	}
}
export default Search;