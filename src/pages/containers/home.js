import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';

class Home extends Component {
	render(){
		const categoriesData  = this.props.data.categories;
		return(
			<HomeLayout>
				<Categories categories={categoriesData} />
			</HomeLayout>
			);
	}
}

export default Home;