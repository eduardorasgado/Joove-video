import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video.js';

class VideoPlayerContainer extends Component{
	render(){
		return(
				<VideoPlayerLayout>
					<Video 
					autoplay={false}
						src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
					/>
				</VideoPlayerLayout>
			);
	}
}

export default VideoPlayerContainer