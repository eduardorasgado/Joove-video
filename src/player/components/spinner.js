import React from 'react';
import loading from '../../../images/loading-video.gif';
import './spinner.css';

function Spinner(props){
	return(
			<div className="Spinner"><img src={loading}/></div>
		);
}

export default Spinner;