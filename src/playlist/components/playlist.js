import React from 'react';
import Media from './media';
import './playlist.css';

/*
PLaylist does not need a life cycle so i does not need to be a
component, insted it should be a functional component
*/
function Playlist(props) {
	//Functional components does not neeed a render
	//we do not need this to props like this.props
	return(
			<div className="playlist">
			
			{
				//here we render UI
				props.playlist.map((item) => {

						//ES7 let us to use spread operator
						return <Media {...item}
								key={item.id}
								/>
					}) //end  return playlistGroups.playlist.map
			}
			</div>
		
			); //end render return
}

export default Playlist;