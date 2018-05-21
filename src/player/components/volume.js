import React from 'react';
import Volume from '../../icons/components/volume';
import './volume.css';

function VolumeComponent(props){
	return(
		<button className="VolumeIcon">
				<Volume
				 	size={15} 
				 	color={"red"}/>
				<div className="Volume-range">
					<input type="range"/>
				</div>
		</button>
		);
}

export default VolumeComponent;