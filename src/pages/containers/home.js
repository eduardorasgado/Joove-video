import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related-layout';

class Home extends Component {
	render(){
		const categoriesData  = this.props.data.categories;
		return(
			<HomeLayout>
				<Related />
				<Categories categories={categoriesData} />
			</HomeLayout>
			);
	}
}

export default Home;