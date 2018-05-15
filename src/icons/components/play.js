import React from 'react';
import Icon from './icon';

function Play(props){
	return(
		/*Passed props to icon with spread operator*/
		<Icon {...props}>
			{/*Children de Icon*/}
			<path d="M6 4l20 12-20 12z"></path>
		</Icon>
		);
}

export default Play;