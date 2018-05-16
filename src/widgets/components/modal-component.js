import React from 'react';
import './modal.css';

function ModalComponent(props){
	return(
		<div className="Modal">
			Portal
			{props.children}
		</div>
		);
}

export default ModalComponent;