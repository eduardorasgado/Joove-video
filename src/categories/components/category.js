import React from 'react';
import Playlist from '../../playlist/components/playlist';

function Category(props){
	return(
		<div className="playlist-block">
			<div className="playlist-header">
				<div className="playlist-tagged">
					<p className="playlist-p">{props.description}</p>
					<h2 className="playlist-title">{props.title}</h2>
				</div>
			</div>
			<div className="playlist-block2">
						<Playlist
							playlist={props.playlist}
						/>
			</div>
		</div>
		);
}

export default Category;