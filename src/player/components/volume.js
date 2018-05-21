import React from 'react';
import Volume from '../../icons/components/volume';
import './volume.css';

function VolumeComponent(props){
	return(
		<div className="VolumeIcon">
				<Volume
				 	size={15} 
				 	color={"red"}/>
				<div className="Volume-range">
					<input 
						type="range"
						min={0}
						max={1}
						step={.05}
						onChange={props.handleVolumeChange}
					/>
				</div>
		</div>
		);
}

export default VolumeComponent;