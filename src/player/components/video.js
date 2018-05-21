import React, { Component } from 'react';
import './video.css';

class Video extends Component {
	togglePlay(){
		if (this.props.pause){
			this.video.play()
		} else{
			this.video.pause()
		}
		
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.pause !== this.props.pause){
			this.togglePlay();
		}
	}

	//We extract again an element from html
	setRef = element => {
		this.video = element;
	}

	render(){
		
		const {
			handleMetadata
		} = this.props

		return(
				<div className="Video">
					<video 
						autoPlay={this.props.autoplay}
						src={this.props.src}
						ref={this.setRef}
						onLoadedMetadata={handleMetadata}
						/>
				</div>
			);
	}

}

export default Video