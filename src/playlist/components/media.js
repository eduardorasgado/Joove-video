import React, { Component } from 'react';
import './media.css';
//fue instalado aparte con npm install prop-types --save
import PropTypes from 'prop-types';

class Media extends Component{
	/*
	state = {
		author: "EduardoRasgado",
	};
	
	*/
	constructor(props){
		super(props);
		//ES6 way
		/*this.handleClick = this.handleClick.bind(this);*/
		//states can change, props cant.
		this.nameConditioning = false;
		this.state = {
			author: props.author,
		};
	}
	
	//arrowfunction inherate his father's props ES7
	handleClick = (event) => {
		window.alert(this.props.title);
		//changing the state
		if (this.nameConditioning == false) {
			this.nameConditioning = true;
			this.setState({
				author: "ElizabethLopez",
			})
		}
		else{
			this.nameConditioning = false;
			this.setState({
				author: "EduardoRasgado",
			})
		}
	}

	render(){
		return(
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image" src={this.props.image} alt="" width={260} height={160}/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.state.author}</p>
				</div>
			</div>
			);
	}
}

//Validation with prop-types module
Media.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['video','audio']),
};

export default Media;
