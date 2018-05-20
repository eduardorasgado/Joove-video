import React, { Component } from 'react';
import SearchLayout from '../components/search-layout';

class Search extends Component{
	state = {
		value: "",
	}

	handleSubmit = (event) => {
		event.preventDefault();
		window.alert("Pick a boo! "+this.input.value);
		}

	setInputRef = element => {
		this.input = element;
	}

	handleInputChange = event => {
		this.setState({
			value: event.target.value.replace(" ","-"),
		});
	}

	render(){
		{/*We user ref for pass some unique id
				 element through components*/}
		return(
			<SearchLayout
				setRef={this.setInputRef}
				handleChange={this.handleInputChange}
				handleSubmit={this.handleSubmit}
				value={this.state.value}
			/>
			);
	}
}
export default Search;