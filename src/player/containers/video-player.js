import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

class VideoPlayerContainer extends Component{
	state = {
		pause: true,
	}

	togglePlay = (event) => {
		this.setState({
			pause: !this.state.pause,
		});
	}

	componentDidMount = () => {
		this.setState({
			pause: (!this.props.autoplay)
		});
	}

	render(){
		return(
				<VideoPlayerLayout>
					<Title title={"La historia sin final-open movies HD"}/>
					<PlayPause
						pause={this.state.pause}  
						handleClick={this.togglePlay}
					/>
					<Video 
					autoplay={this.props.autoplay}
						src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
					/>
				</VideoPlayerLayout>
			);
	}
}

export default VideoPlayerContainer