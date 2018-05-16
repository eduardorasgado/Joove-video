import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related-layout';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal-component';

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
						<h1>Bienvenido a Joove, yeah!</h1>
					</Modal>
				</ModalContainer>
			</HomeLayout>
			);
	}
}

export default Home;