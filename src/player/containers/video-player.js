import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video.js';

class VideoPlayerContainer extends Component{
	render(){
		return(
				<VideoPlayerLayout>
					<Video />
				</VideoPlayerLayout>
			);
	}
}

export default VideoPlayerContainer