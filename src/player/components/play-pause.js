import React from 'react';
/*import './play-pause.css';*/

import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';

const PlayPause = (props) => (
		<div>
			<button><Play
					 	size={15} 
					 	color={"white"}/>
					
			</button>
			<button><Pause
						size={15} 
					 	color={"white"}/>
			</button>
		</div>
	);

export default PlayPause;