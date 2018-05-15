import React, { Component } from 'react';
import Playlist from './playlist';

class Category extends Component{
	render(){
		const categories = this.props.data.categories;
		return(
				<div>
					{
						categories.map((playlistGroup) => {
							return (<Playlist playlistGroup={playlistGroup}/>)
						})
					}
				</div>
			)
	}
}

export default Category;