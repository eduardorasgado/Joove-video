import React from 'react';
import './modal.css';

function ModalComponent(props){
	return(
		<div className="Modal">
			{props.children}
			<div>
			<button className="Modal-close" onClick={props.handleClick} />
			</div>
		</div>
		);
}

export default ModalComponent;