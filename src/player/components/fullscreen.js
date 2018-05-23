import React from'react';
import Fullscreen from '../../icons/components/fullscreen';
import './fullscreen.css';

const FullScreenComponent = (props) =>(
	<div 
		className="FullscreenIcon"
		onClick={props.handleFullscreenClick}
	>
		<Fullscreen
		 	size={15} 
		 	color={"red"}/>	
	</div>
)

export default FullScreenComponent;