import React from 'react';
import './play-pause.css';

import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';

const PlayPause = (props) => (
		<div className="PlayPause">
		{
			props.pause ?
				<button
				onClick={props.handleClick}
				>
				
				<Play
				 	size={15} 
				 	color={"red"}/>
				</button>
			:
			<button
				onClick={props.handleClick}
			>
			<Pause
				size={15} 
			 	color={"red"}/>					
			</button>
		}
				
		</div>
	);

export default PlayPause;