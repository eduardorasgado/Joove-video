import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css';

function Category(props){
	return(
		<div className="category-block">
			<div className="category-header">
				<div className="category-tagged">
					<p className="category-p">{props.description}</p>
					<h2 className="category-title">{props.title}</h2>
				</div>
			</div>
			<div className="category-block2">
						<Playlist
							playlist={props.playlist}
						/>
			</div>
		</div>
		);
}

export default Category;