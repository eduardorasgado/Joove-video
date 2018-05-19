import React from 'react';
import './related-layout.css';
import logo from '../../../images/logo.png'

function Related(props){
	return (
		<div className="Related">
			<a href={"./"}><img src={logo} width={250}/></a>
		</div>
		);
}

export default Related;