import React, { Component } from 'react';
import RegularError from '../components/regular-error';

class HandleError extends Component {
	state = {
			handleError: false,
		}

	componentDidCatch(error, info) {
		//if an error occurs we send it to a service like Sentry
		this.setState({
			handleError: true,
		})
	}

	render(){
		if (this.state.handleError) {
			return (
				<RegularError />
				)
		}
		return this.props.children;
		}
}

export default HandleError;