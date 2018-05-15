import React, { Component } from 'react';
import Media from './media';
import './playlist.css';

class Playlist extends Component {
	render(){
		const playlist = this.props.playlistGroup;
		return(

				<div className="playlist-block">
				<div className="playlist-header">
					<p className="playlist-p">{playlist.description}</p>
					<h2 className="playlist-title">{playlist.title}</h2>
				</div>
				{
					playlist.playlist.map((item) => {

							//ES7 let us to use spread operator
							return <Media {...item}
									key={item.id}
									/>
						}) //end  return playlistGroups.playlist.map
				}
				</div>
			); //end render return
	}
}

export default Playlist;