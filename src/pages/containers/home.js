import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related-layout';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal-component';

class Home extends Component {
	state = {
			modalVisible: false,
	}

	handleOpenModal = () => {
		this.setState({
			modalVisible: true,
		})
	}

	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		})
	}
	render(){
		const categoriesData  = this.props.data.categories;
		return(
			<HomeLayout>
				<Related />
				<Categories categories={categoriesData}
				handleOpenModal={this.handleOpenModal} />
				{/*We should send children to modalC*/}
				
				{
				/*For not satisfied appearance
						condition ? bject_to_appears :
				*/
					/*If condition is satisfied*/
					this.state.modalVisible &&
					<ModalContainer>
						<Modal handleClick={this.handleCloseModal}>
							<h1>Bienvenido a Joove, yeah!</h1>
						</Modal>
					</ModalContainer>
				}
			</HomeLayout>
			);
	}
}

export default Home;