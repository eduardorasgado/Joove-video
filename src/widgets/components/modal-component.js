import React from 'react';
import './modal.css';

function ModalComponent(props){
	return(
		<div className="Modal">
			Portal
			{props.children}
			<button onClick={props.handleClick}>Close</button>
		</div>
		);
}

export default ModalComponent;