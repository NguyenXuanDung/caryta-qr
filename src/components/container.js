import React from 'react';
import '../styles/container.css';
import Form from './form/form';
import Result from './result/result';
import wave from '../images/wave.png';
import bg from '../images/bg.svg';
import '@fortawesome/fontawesome-free/js/all.js';

class Container extends React.Component {

	state = {
		selectedPage: "MAIN",
		name: "",
		address: "",
	}

	render() {
		return <div>
			<img src={wave} alt="person" className="wave"/>
			<div className="container">
				<div className="img">
					<img src={bg} alt="person" className="img"/>
				</div>
				{this.getBody()}
			</div>
		</div>;
	}

	handleChangePageClick = (navName) => {
		this.setState({
			selectedPage: navName
		});
	}

	updateName = (name) => {
		this.setState({
			name: name
		});
	}

	updateAddress = (address) => {
		this.setState({
			address: address
		});
	}

	getBody = () => {
		switch (this.state.selectedPage) {
			case "MAIN": return <Form
					handleChangePageClick = {this.handleChangePageClick}
					name = {this.state.name}
					address={this.state.address}
					updateName = {this.updateName}
					updateAddress = {this.updateAddress}
				/>;
			default: return <Result
				handleChangePageClick = {this.handleChangePageClick}
				name = {this.state.name}
				address={this.state.address}
			/>;
		}
	}
}

export default Container;
