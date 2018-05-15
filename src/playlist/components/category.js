import React, { Component } from 'react';
import Playlist from './playlist';
import './category.css';

class Category extends Component{
	render(){
		const categories = this.props.data.categories;
		return(
				<div className="category-container">
					{
						categories.map((playlistGroup) => {
							return (<Playlist 
								playlistGroup={playlistGroup} 
								key={playlistGroup.id}/>)
						})
					}
				</div>
			)
	}
}

export default Category;