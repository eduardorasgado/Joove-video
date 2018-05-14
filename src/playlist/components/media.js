import React, { Component } from 'react';
import './media.css';
//fue instalado aparte con npm install prop-types --save
import PropTypes from 'prop-types';

class Media extends Component{
	render(){
		return(
			<div className="Media">
				<div className="Media-cover">
					<img className="Media-image" src={this.props.image} alt="" width={260} height={160}/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
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
