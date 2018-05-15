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
	const playlist = props.playlistGroup;
	return(
		<div className="playlist-block">
			<div className="playlist-header">
				<div className="playlist-tagged">
					<p className="playlist-p">{playlist.description}</p>
					<h2 className="playlist-title">{playlist.title}</h2>
				</div>
			</div>
			<div className="playlist-block2">
			
			{
				//here we render UI
				playlist.playlist.map((item) => {

						//ES7 let us to use spread operator
						return <Media {...item}
								key={item.id}
								/>
					}) //end  return playlistGroups.playlist.map
			}
			</div>
		</div>
			); //end render return
}

export default Playlist;