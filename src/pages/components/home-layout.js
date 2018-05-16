import React from 'react';
import './home-layout.css';

function HomeLayout(props){
	return(
			<section className="HomeLayout">
				
				{/*home.js container children*/}
				{props.children}
			</section>
		);
}

export default HomeLayout;