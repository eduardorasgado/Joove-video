import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related-layout';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal-component';
import HandleError from '../../errors/containers/handle-error';
import Search from '../../widgets/containers/search.js';
import VideoPlayerContainer from '../../player/containers/video-player';

class Home extends Component {
	state = {
			modalVisible: false,
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

	render() {
		return(
			<HandleError>
				<HomeLayout>
					<Related />
					<VideoPlayerContainer 
							autoplay={false}
					/>
					<div>
						<Search />
						<Categories categories={this.props.data.categories}
						handleOpenModal={this.handleOpenModal} />
					</div>
					{/*We should send children to modalC*/}
					
					{
					/*For not satisfied appearance
							condition ? bject_to_appears_if_True :
							if_false_execute_this
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
			</HandleError>
			);
	}
}

export default Home;