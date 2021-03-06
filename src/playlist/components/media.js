import React, { PureComponent } from 'react';
import './media.css';
//fue instalado aparte con npm install prop-types --save
import PropTypes from 'prop-types';

class Media extends PureComponent{
	constructor(props){
		super(props);
		//ES6 way
		/*this.handleClick = this.handleClick.bind(this);*/
		//states can change, props cant.
		this.state = {
			author: props.author,
		};
	}

	titleShortened(){
		var title = this.props.title;
		if (title.length >= 44) {
			var shortened = title.substr(0,44);
			return shortened+"...";
		}
		return title;
	}

	handleClick = (event) => {
		this.props.openModal(this.props);
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
