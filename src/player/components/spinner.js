import React from 'react';
import loading from '../../../images/loading-video.gif';
import './spinner.css';

function Spinner(props){
	if (props.active) {
		return(
			<div className="Spinner"><img src={loading}/></div>
		);
	}
	else {
		return null;
	}
}

export default Spinner;