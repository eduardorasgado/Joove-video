import React, { Component } from 'react';
import './video.css';

class Video extends Component {
	togglePlay(){
		//play or pause video player
		if (this.props.pause){
			this.video.play()
		} else{
			this.video.pause()
		}
		
	}
	componentWillReceiveProps(nextProps){
		//checking if button pause has been pressed
		if (nextProps.pause !== this.props.pause){
			this.togglePlay();
		}
	}

	//We extract again an element from html
	setRef = element => {
		this.video = element;
	}

	render(){
		//setting global props and sending them to parent
		const {
			handleMetadata,
			handleTimeUpdate,
		} = this.props

		return(
				<div className="Video">
					<video 
						autoPlay={this.props.autoplay}
						src={this.props.src}
						ref={this.setRef}
						onLoadedMetadata={handleMetadata}
						onTimeUpdate={handleTimeUpdate}
						/>
				</div>
			);
	}

}

export default Video