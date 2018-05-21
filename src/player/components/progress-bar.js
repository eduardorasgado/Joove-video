import React from 'react';
import './progress-bar.css'

function ProgressBar(props) {
	return(
			<div className="ProgressBar">
				<progress 
					id='progress-bar' 
					min='0' 
					max='100' 
					value={props.progress}
					>0% played</progress>
			</div>
		);
}

export default ProgressBar;