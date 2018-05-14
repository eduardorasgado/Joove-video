import React, { Component } from 'react';
import Media from './media'

class Playlist extends Component {
	render(){
		const playlist = this.props.data.categories[0].playlist;
		return(
				<div>
				{
					playlist.map((item) => {
						return <Media title={item.title}
									  author={item.author}
									  type={item.type}
									  src={item.src}
									  image={item.cover}
						/>
					})
				}

				</div>
			);
	}
}

export default Playlist;