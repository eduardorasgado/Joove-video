import React, { PureComponent } from 'react';
import './media.css';
//fue instalado aparte con npm install prop-types --save
import PropTypes from 'prop-types';
//dump components
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import Fullscreen from '../../icons/components/fullscreen';

class Media extends PureComponent{
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

	titleShortened(){
		var title = this.props.title;
		if (title.length >= 44) {
			var shortened = title.substr(0,44);
			return shortened+"...";
		}
		return title;
	}

	render(){
		return(
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image" src={this.props.cover} alt="" width={218} height={120}/>
					<h3 className="Media-title">{this.titleShortened()}</h3>
					<p className="Media-author">
								{this.state.author}		
					</p>
					<Play
					 	size={15} 
					 	color={"white"}/>
					<Pause
					 	size={15} 
					 	color={"white"}/>
					<Volume
					 	size={15} 
					 	color={"white"}/>
					 <Fullscreen
					 	size={15} 
					 	color={"white"}/>	
				</div>
			</div>
			);
	}
}

//Validation with prop-types module
Media.propTypes = {
	cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['video','audio']),
};

export default Media;
