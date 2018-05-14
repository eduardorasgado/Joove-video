import React, { Component } from 'react';
import Media from './media'

class Playlist extends Component {
	render(){
		const playlist = this.props.data.categories[0].playlist;
		return(
				<div>
				{
					playlist.map((item) => {
						//ES7 let us to use spread operator
						return <Media {...item}
									  key={item.id}
						/>
					})
				}

				</div>
			);
	}
}

export default Playlist;