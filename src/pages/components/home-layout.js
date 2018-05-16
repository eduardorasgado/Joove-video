import React from 'react';

function HomeLayout(props){
	return(
			<section>
				layout
				{/*home.js container children*/}
				{props.children}
			</section>
		);
}

export default HomeLayout;