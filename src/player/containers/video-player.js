import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import formattingTime from '../components/utilities';
import ProgressBar from  '../components/progress-bar';
import Spinner from '../components/spinner';
import VolumeComponent from '../components/volume';
import FullscreenComponent from '../components/fullscreen';

class VideoPlayerContainer extends Component{
	/*Pause is for showing play/pause button,
	  duration is the formatted length of video for showing in view
	  durationRaw is for calculating the progressbar position
	  currentTime helps to show progressbar actual time in view,
	  progressActualTime is the actual time not formatted for client calculations
	*/
	state = {
		pause: true,
		duration: 0,
		durationRaw: 0,
		currentTime: 0,
		progressActualTime: 0,
		loading: true,
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

	handleLoadedMetadata = event => {
		//calculating the video total duration
		this.video = event.target;
		var sec_num = parseInt(this.video.duration);

		var beautyTime = formattingTime(sec_num);

		//setting formatted duration and raw pure seconds duration
		this.setState({
			duration: beautyTime,
			durationRaw: parseInt(this.video.duration),
		});
	}

	handleTimeMediaUpdate = (event) => {
		//actual video position on time
		var sec_num = parseInt(this.video.currentTime);

		//actual video position in time raw not formatting
		var timeHundred = ((parseInt(this.video.currentTime) * 100) / this.state.durationRaw);

		//formatting the time
		var currTime = formattingTime(sec_num);

		this.setState({
			currentTime: currTime,
			progressActualTime: timeHundred,
		});
	}

	handleProgressChange = (event) => {
		console.log(event.target.value);
		//bring the range in progressbar value(0-100) and converting to 
		//real time in video for changing the actualtime in video-player
		this.video.currentTime = (event.target.value * this.state.durationRaw) / 100;
	}

	handleSeeking = (event) => {
		//component is loading
		this.setState({
			loading:true,
		});
		//Showing button play 
		this.togglePlay();
	}

	handleSeeked = (event) => {
		//showingbutton pause
		this.togglePlay();
		//component finished loading
		this.setState({
			loading:false,
		});

	}

	handleReady = (event) => {
		//whe the video is ready loaded from server, not when seeking
		this.setState({
			loading:false,
		});
	}

	handleVolumeChange = (event) => {
		//reading value from range in component volume
		//and set it to video metadata volume
		this.video.volume = event.target.value;
	}

	handleFSClick = (event) => {
		//Browser API use to fullscreen

		//if is fullscreen, make it normal
		if (document.mozFullScreen) {
			//mozilla
			document.mozCancelFullScreen();
		} 
		else if(document.webkitIsFullScreen){
			//chrome, zafari
			document.webkitExitFullscreen();
		}
		//if not fullscreen, do it
		else if(this.player.mozRequestFullScreen){
			//mozilla
			this.player.mozRequestFullScreen();
		}
		else if(this.player.webkitRequestFullScreen){
			//chrome, zafari
			this.player.webkitRequestFullScreen();
		}
	}

	setRef = element => {
		this.player = element;
	}

	render(){
		return(
				<VideoPlayerLayout
					setRef={this.setRef}
				>
					<Title title={this.props.titleMedia}/>
					<VideoPlayerControls>
						<PlayPause
						pause={this.state.pause}  
						handleClick={this.togglePlay}
						/>
						<Timer 
							duration={this.state.duration}
							currentTime ={this.state.currentTime} 
						/>
						<ProgressBar
							handleProgressChange={this.handleProgressChange}
							progress={this.state.progressActualTime}
						 />
						<VolumeComponent
							handleVolumeChange={this.handleVolumeChange}
						/>
						<FullscreenComponent
						handleFullscreenClick={this.handleFSClick} 
						/>
					</VideoPlayerControls>
					<Spinner
						active={this.state.loading}
					 />
					<Video 
						autoplay={this.props.autoplay}
						pause={this.state.pause}
						handleMetadata={this.handleLoadedMetadata}
						handleTimeUpdate={this.handleTimeMediaUpdate}
						handleSeeking={this.handleSeeking}
						handleSeeked={this.handleSeeked}
						handleReadytoPlay={this.handleReady}
						src={this.props.media}
					/>
				</VideoPlayerLayout>
			);
	}
}

export default VideoPlayerContainer