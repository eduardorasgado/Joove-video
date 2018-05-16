import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related-layout';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal-component';

class Home extends Component {
	state = {
			modalVisible: false,
			handleError: false,
	}

	handleOpenModal = () => {
		this.setState({
			modalVisible: true,
		});
	}

	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		});
	}

	componentDidCatch(error, info) {
		//if an error occurs
		this.setState({
			handleError: true
		});
	}

	render() {
		if (this.state.handleError) {
			return <h3>Oops! Algo salió mal, lo sentimos mucho :c porque no recargas desde el inicio?</h3>;
		}

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