import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends Component{
	render(){
		return(
				//portal creation comes from react-dom
				createPortal(
					this.props.children,
					document.getElementById(
								"modal-container")
					)
			);
	}
}

export default ModalContainer;