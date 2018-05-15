import React, { Component } from 'react';
import Media from './media';

class Playlist extends Component {
	render(){
		const playlist = this.props.playlistGroup;
		return(

				<div>
				<p>{playlist.description}</p>
				<h2>{playlist.title}</h2>
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