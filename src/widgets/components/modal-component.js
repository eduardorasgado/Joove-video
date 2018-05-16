import React from 'react';

function ModalComponent(props){
	return(
		<div>
			Portal
			{props.children}
		</div>
		);
}

export default ModalComponent;