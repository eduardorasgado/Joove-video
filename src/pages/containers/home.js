import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related-layout';
import ModalContainer from '../../widgets/containers/modal';

class Home extends Component {
	render(){
		const categoriesData  = this.props.data.categories;
		return(
			<HomeLayout>
				<Related />
				<Categories categories={categoriesData} />
				{/*We should send children to modalC*/}
				<ModalContainer>
					<Modal>
						
					</Modal>
				</ModalContainer>
			</HomeLayout>
			);
	}
}

export default Home;