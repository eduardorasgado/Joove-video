import React from 'react';
import Volume from '../../icons/components/volume';
import './volume.css';

function VolumeComponent(){
	return(
		<div className="VolumeIcon">
				<Volume
				 	size={15} 
				 	color={"red"}/>
		</div>
		);
}

export default VolumeComponent;