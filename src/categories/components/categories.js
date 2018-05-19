import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search.js';

function Categories(props){

return (
		<div className="categories-container">
		<Search />
			{
				props.categories.map((item) => {
					return (

						<Category 
							{...item}
							key={item.id}
							handleOpenModal={props.handleOpenModal}
							/>
						)
				})
			}
		</div>
	);
}

export default Categories;