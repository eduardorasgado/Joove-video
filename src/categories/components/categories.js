import React from 'react';
import Category from './category';
import './categories.css';


function Categories(props){

return (
		<div className="categories-container">
			{
				props.categories.map((item) => {
					return (

						<Category 
							{...item}
							key={item.id}/>
						)
				})
			}
		</div>
	);
}

export default Categories