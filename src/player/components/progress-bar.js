import React from 'react';
import './progress-bar.css'

function ProgressBar(props) {
	return(
			<div className="ProgressBar">
				<input 
					type="range"
					min='0' 
					max='100'
					onChange={props.handleProgressChange} 
					value={props.progress}
				/>
			</div>
		);
}

export default ProgressBar;