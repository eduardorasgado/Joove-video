import React, { Component } from 'react';
import Media from './media'

class Playlist extends Component {
	render(){
		const categories = this.props.data.categories;
		return(
				<div>
				{
					//each category of json
					categories.map((playlistGroup) => {
						// playlist from each category
						return playlistGroup.playlist.map((item) => {

							//ES7 let us to use spread operator
							return <Media {...item}
									key={item.id}
							/>
						}) //end  return playlistGroups.playlist.map
					}) //end categories.map
				}
				</div>
			); //end render return
	}
}

export default Playlist;