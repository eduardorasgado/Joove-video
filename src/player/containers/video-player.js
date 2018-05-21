import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';

class VideoPlayerContainer extends Component{
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
	}

	togglePlay = (event) => {
		this.setState({
			pause: !this.state.pause,
		});
	}

	componentDidMount(){
		this.setState({
			pause: (!this.props.autoplay)
		});
	}

	formattingTime(sec_num){
		var hours   = Math.floor(sec_num / 3600);
	    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	    var seconds = sec_num - (hours * 3600) - (minutes * 60);

	    if (hours   < 10) {hours   = "0"+hours;}
	    if (minutes < 10) {minutes = "0"+minutes;}
	    if (seconds < 10) {seconds = "0"+seconds;}

	    if (hours == "00") {
	    	//just in case there is no hours
	    	return minutes+":"+seconds;
	    }
		return hours+":"+minutes+":"+seconds;
	}

	handleLoadedMetadata = event => {
		this.video = event.target;
		var sec_num = parseInt(this.video.duration);

		var beautyTime = this.formattingTime(sec_num);

		this.setState({
			duration: beautyTime,
		});
	}

	handleTimeMediaUpdate = (event) => {
		var sec_num = parseInt(this.video.currentTime);

		var currTime = this.formattingTime(sec_num);

		this.setState({
			currentTime:	currTime,
		});
	}

	render(){
		return(
				<VideoPlayerLayout>
					<Title title={"La historia sin final-open movies HD"}/>
					<VideoPlayerControls>
						<PlayPause
						pause={this.state.pause}  
						handleClick={this.togglePlay}
						/>
						<Timer 
							duration={this.state.duration}
							currentTime ={this.state.currentTime} 
						/>
					</VideoPlayerControls>
					<Video 
						autoplay={this.props.autoplay}
						pause={this.state.pause}
						handleMetadata={this.handleLoadedMetadata}
						handleTimeUpdate={this.handleTimeMediaUpdate}
						src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
					/>
				</VideoPlayerLayout>
			);
	}
}

export default VideoPlayerContainer