import React from 'react';

function Icon(props){
	/*Multi-asignation constant for properties passed
	from play.js
	*/
	const {color,size,} = props;

	return(
		<svg
			fill={color}
			height={size}
			width={size}
   			viewBox="0 0 32 32">
			{props.children}
		</svg>
		);
}

export default Icon;